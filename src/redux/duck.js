/**
 * This module exports logic-related elements for the dicto-player application
 * This module follows the ducks convention for putting in the same place actions, action types,
 * state selectors and reducers about a given feature (see https://github.com/erikras/ducks-modular-redux)
 * @module dicto-player/redux
 */

import {combineReducers} from 'redux';
import {createStructuredSelector} from 'reselect';

import chunkMatchesSearchQuery from '../utils/chunkMatchesSearchQuery';

/*
 * Action names
 */
export const RESET_APP = '§dicto-player/RESET_APP';
export const SET_COMPOSITION = '§dicto-player/SET_COMPOSITION';
export const SET_SETTINGS = '§dicto-player/SET_SETTINGS';

export const SET_SEARCH_QUERY = '§dicto-player/SET_SEARCH_QUERY';
export const SET_ACTIVE_CHUNK = '§dicto-player/SET_ACTIVE_CHUNK';
export const SET_CURRENT_MEDIA_DURATION = '§dicto-player/SET_CURRENT_MEDIA_DURATION';
export const SET_CURRENT_MEDIA_TIME = '§dicto-player/SET_CURRENT_MEDIA_TIME';
export const SET_INFORMATION_MODAL_VISIBILITY = '§dicto-player/SET_INFORMATION_MODAL_VISIBILITY';
export const SCROLL_UPDATE = '§dicto-player/SCROLL_UPDATE';
export const SET_CHUNKS_POSITIONS = '§dicto-player/SET_CHUNKS_POSITIONS';
export const TOGGLE_AUTOSCROLL = '§dicto-player/TOGGLE_AUTOSCROLL';
/*
 * Action creators
 */
export const resetApp = () => ({
  type: RESET_APP
});

export const setComposition = (composition) => ({
  type: SET_COMPOSITION,
  composition
});
export const setSettings = (settings) => ({
  type: SET_SETTINGS,
  settings
});
export const setSearchQuery = (searchQuery) => ({
  type: SET_SEARCH_QUERY,
  searchQuery
});
export const setActiveChunk = (chunk) => ({
  type: SET_ACTIVE_CHUNK,
  chunk
});
export const setCurrentMediaDuration = (duration) => ({
  type: SET_CURRENT_MEDIA_DURATION,
  duration
});
export const setCurrentMediaTime = (playerState, generatedByUser) => ({
  type: SET_CURRENT_MEDIA_TIME,
  playerState,
  generatedByUser
});
export const setInformationModalVisibility = (state) => ({
  type: SET_INFORMATION_MODAL_VISIBILITY,
  state
});
export const scrollUpdate = (values) => ({
  type: SCROLL_UPDATE,
  values
});
export const setChunksPositions = (positions) => ({
  type: SET_CHUNKS_POSITIONS,
  positions
});
export const toggleAutoScroll = () => ({
  type: TOGGLE_AUTOSCROLL
});
/*
 * Reducers
 */
const COMPOSITION_DEFAULT_STATE = {

};
function compositionReducer (state = COMPOSITION_DEFAULT_STATE, action) {
  switch (action.type) {
    case RESET_APP:
      return COMPOSITION_DEFAULT_STATE;
    case SET_COMPOSITION:
      return action.composition;
    default:
      return state;
  }
}

const SETTINGS_DEFAULT_STATE = {
  displayMode: 'columns'
};
function settingsReducer (state = SETTINGS_DEFAULT_STATE, action) {
  switch (action.type) {
    case RESET_APP:
      return SETTINGS_DEFAULT_STATE;
    case SET_SETTINGS:
      return action.settings;
    default:
      return state;
  }
}

const PLAYER_DEFAULT_STATE = {
  chunks: [],
  searchQuery: '',
  activeChunk: undefined,
  activeChunkIndex: undefined,
  activeChunkCompletion: undefined,
  currentMediaTime: 0,
  // currentMediaType: undefined,
  // currentMediaUrl: undefined,
  // currentMediaPosition : undefined,
  // currentMediaIsPlaying: false,
  currentMediaDuration: 0,
  informationModalVisible: false,
  scrollPosition: undefined,
  autoScrollMode: false
};
function player(state = PLAYER_DEFAULT_STATE, action) {
  let searchQuery;
  let activeChunkIndex;
  let chunks;
  let activeChunk;
  let activeChunkCompletion;
  switch (action.type) {
    case RESET_APP:
      return PLAYER_DEFAULT_STATE;
    case SET_COMPOSITION:
      if (action.composition.data && action.composition.data.length) {
        searchQuery = state.searchQuery;
        activeChunkIndex = state.activeChunkIndex;
        let relPosSum = 0;
        return {
          ...state,
          chunks: action.composition.data.reduce((finalChunks, chunk, id) => {
            const duration = chunk.end - chunk.begin;
            relPosSum += duration;
            return [
              ...finalChunks,
              {
                ...chunk,
                id,
                duration,
                relativeBegin: relPosSum - duration,
                active: activeChunkIndex && activeChunkIndex === id ? true : false,
                matched: chunkMatchesSearchQuery(chunk, searchQuery)
              }
            ];
          }, [])
        };
      }
      return state;
    case SET_SEARCH_QUERY:
      searchQuery = action.searchQuery;
      return {
        ...state,
        searchQuery,
        chunks: state.chunks.map(chunk => ({
          ...chunk,
          matched: chunkMatchesSearchQuery(chunk, searchQuery)
        }))
      };
    case SET_ACTIVE_CHUNK:
      chunks = state.chunks.map((chunk, index) => {
        if (chunk.id === action.chunk.id) {
          activeChunkIndex = index;
          return {
            ...chunk,
            active: true
          };
        }
        return {
          ...chunk,
          active: false
        };
      });
      return {
        ...state,
        activeChunk: action.chunk,
        activeChunkIndex,
        currentMediaTime: action.chunk.begin,

        autoScrollMode: true,
        activeChunkCompletion: 0,

        chunks
      };
    case SET_CURRENT_MEDIA_DURATION:
      return {
        ...state,
        currentMediaDuration: action.duration.duration
      };
    case SET_CURRENT_MEDIA_TIME:
      const {
        currentTime,
        // duration,
        // progress,
        // ...
      } = action.playerState;
      // finding the active chunk
      chunks = state.chunks.map((chunk, index) => {
        if (chunk.begin <= currentTime && chunk.end >= currentTime) {

          activeChunkIndex = index;
          activeChunk = {...chunk};
          activeChunkCompletion = (currentTime - activeChunk.begin) / activeChunk.duration;
          return {
            ...chunk,
            active: true
          };
        }
        return {
          ...chunk,
          active: false
        };
      });
      const autoScrollMode = action.generatedByUser === true;
      return {
        ...state,
        currentMediaTime: currentTime,
        activeChunkIndex,
        activeChunkCompletion,
        activeChunk,
        autoScrollMode,
        chunks
      };
    case TOGGLE_AUTOSCROLL:
      return {
        ...state,
        autoScrollMode: !state.autoScrollMode
      };
    case SET_INFORMATION_MODAL_VISIBILITY:
      return {
        ...state,
        informationModalVisible: action.state !== undefined ? action.state : !state.informationModalVisible
      };
    case SCROLL_UPDATE:
      const {top, scrollHeight, clientHeight, scrollTop} = action.values;
      const topBorder = scrollTop;
      const bottomBorder = scrollTop + clientHeight;
      let topChunk;
      let topPortion;
      let bottomChunk;
      let bottomPortion;
      // translate to box position
      state.chunks.some(chunk => {
        if (topBorder >= chunk.top && topBorder <= chunk.top + chunk.height) {
          topChunk = chunk;
          topPortion = (topBorder - chunk.top) / chunk.height;
        }
        if (bottomBorder >= chunk.top && bottomBorder <= chunk.top + chunk.height) {
          bottomChunk = chunk;
          bottomPortion = (bottomBorder - chunk.top) / chunk.height;
          return true;
        }
      });
      const chunksTotalDuration = state.chunks.reduce((totalDuration, chunk) => {
        const chunkDuration = chunk.end - chunk.begin;
        return totalDuration + chunkDuration;
      }, 0);
      let scaledTopPrct;
      let scaledHeightPrct;
      // this is the visual scroll translated to a time-relative scale
      if (topChunk) {
        const translatedTopTime = topChunk.relativeBegin + topChunk.duration * topPortion;
        let translatedBottomTime;
        translatedBottomTime = translatedTopTime + 30;
        if (bottomChunk) {
          translatedBottomTime = bottomChunk.relativeBegin + bottomChunk.duration * bottomPortion;
        }
        else {
          translatedBottomTime = topChunk.end;
        }
        scaledTopPrct = translatedTopTime / chunksTotalDuration * 100;
        scaledHeightPrct = (translatedBottomTime - translatedTopTime) / chunksTotalDuration * 100;
      }
      const visualTopPrct = top * 100;
      const visualHeightPrct = clientHeight / (scrollHeight - clientHeight) * 100;
      const scrollPosition = {
        visualTopPrct,
        visualHeightPrct,
        scaledTopPrct,
        scaledHeightPrct
      };
      if (
          !state.scrollPosition ||
          JSON.stringify(scrollPosition) !== JSON.stringify(state.scrollPosition)
          ) {
        return {
          ...state,
          scrollPosition
        };
      }
      return state;
    case SET_CHUNKS_POSITIONS:
      chunks = state.chunks.map((chunk, index) => {
        return {
          ...chunk,
          ...action.positions[index]
        };
      });
      if (JSON.stringify(chunks) !== JSON.stringify(state.chunks)) {
        return {
          ...state,
          chunks
        };
      }
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  player,
  compositionReducer,
  settingsReducer
});
/*
 * Selectors
 */
const compositionTitle = (state) => state.compositionReducer.metadata && state.compositionReducer.metadata.title;
const compositionDescription = (state) => state.compositionReducer.metadata && state.compositionReducer.metadata.description;
const compositionAuthors = (state) => state.compositionReducer.metadata && state.compositionReducer.metadata.authors;
const compositionTags = (state) => state.compositionReducer.metadata && state.compositionReducer.metadata.tags;

const mediaUrl = (state) => state.compositionReducer.metadata && state.compositionReducer.metadata.mediaUrl;
const displayMode = (state) => state.settingsReducer.displayMode;

const currentMediaDuration = (state) => state.player.currentMediaDuration;
const chunks = (state) => state.player.chunks;
const activeChunk = (state) => state.player.activeChunk;
const activeChunkIndex = (state) => state.player.activeChunkIndex;
const activeChunkCompletion = (state) => state.player.activeChunkCompletion;
const autoScrollMode = (state) => state.player.autoScrollMode;

const currentMediaTime = (state) => state.player.currentMediaTime;

const searchQuery = (state) => state.player.searchQuery;
const informationModalVisible = (state) => state.player.informationModalVisible;
const scrollPosition = (state) => state.player.scrollPosition;

export const selector = createStructuredSelector({
  compositionTitle,
  compositionDescription,
  compositionAuthors,
  compositionTags,

  mediaUrl,
  displayMode,
  activeChunk,
  activeChunkIndex,
  activeChunkCompletion,
  currentMediaDuration,
  autoScrollMode,

  currentMediaTime,
  searchQuery,
  informationModalVisible,
  scrollPosition,

  chunks
});

