module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selector = exports.setPlayerVolume = exports.toggleIsPlaying = exports.toggleAutoScroll = exports.setChunksPositions = exports.scrollUpdate = exports.setInformationModalVisibility = exports.setCurrentMediaTime = exports.setCurrentMediaDuration = exports.setActiveChunk = exports.setSearchQuery = exports.setSettings = exports.setComposition = exports.resetApp = exports.SET_PLAYER_VOLUME = exports.TOGGLE_ISPLAYING = exports.TOGGLE_AUTOSCROLL = exports.SET_CHUNKS_POSITIONS = exports.SCROLL_UPDATE = exports.SET_INFORMATION_MODAL_VISIBILITY = exports.SET_CURRENT_MEDIA_TIME = exports.SET_CURRENT_MEDIA_DURATION = exports.SET_ACTIVE_CHUNK = exports.SET_SEARCH_QUERY = exports.SET_SETTINGS = exports.SET_COMPOSITION = exports.RESET_APP = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * This module exports logic-related elements for the dicto-player application
                                                                                                                                                                                                                                                                   * This module follows the ducks convention for putting in the same place actions, action types,
                                                                                                                                                                                                                                                                   * state selectors and reducers about a given feature (see https://github.com/erikras/ducks-modular-redux)
                                                                                                                                                                                                                                                                   * @module dicto-player/redux
                                                                                                                                                                                                                                                                   */

var _redux = __webpack_require__(1);

var _reselect = __webpack_require__(7);

var _chunkMatchesSearchQuery = __webpack_require__(8);

var _chunkMatchesSearchQuery2 = _interopRequireDefault(_chunkMatchesSearchQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
 * Action names
 */
var RESET_APP = exports.RESET_APP = '§dicto-player/RESET_APP';
var SET_COMPOSITION = exports.SET_COMPOSITION = '§dicto-player/SET_COMPOSITION';
var SET_SETTINGS = exports.SET_SETTINGS = '§dicto-player/SET_SETTINGS';

var SET_SEARCH_QUERY = exports.SET_SEARCH_QUERY = '§dicto-player/SET_SEARCH_QUERY';
var SET_ACTIVE_CHUNK = exports.SET_ACTIVE_CHUNK = '§dicto-player/SET_ACTIVE_CHUNK';
var SET_CURRENT_MEDIA_DURATION = exports.SET_CURRENT_MEDIA_DURATION = '§dicto-player/SET_CURRENT_MEDIA_DURATION';
var SET_CURRENT_MEDIA_TIME = exports.SET_CURRENT_MEDIA_TIME = '§dicto-player/SET_CURRENT_MEDIA_TIME';
var SET_INFORMATION_MODAL_VISIBILITY = exports.SET_INFORMATION_MODAL_VISIBILITY = '§dicto-player/SET_INFORMATION_MODAL_VISIBILITY';
var SCROLL_UPDATE = exports.SCROLL_UPDATE = '§dicto-player/SCROLL_UPDATE';
var SET_CHUNKS_POSITIONS = exports.SET_CHUNKS_POSITIONS = '§dicto-player/SET_CHUNKS_POSITIONS';
var TOGGLE_AUTOSCROLL = exports.TOGGLE_AUTOSCROLL = '§dicto-player/TOGGLE_AUTOSCROLL';
var TOGGLE_ISPLAYING = exports.TOGGLE_ISPLAYING = '§dicto-player/TOGGLE_ISPLAYING';
var SET_PLAYER_VOLUME = exports.SET_PLAYER_VOLUME = '§dicto-player/SET_PLAYER_VOLUME';
/*
 * Action creators
 */
var resetApp = exports.resetApp = function resetApp() {
  return {
    type: RESET_APP
  };
};

var setComposition = exports.setComposition = function setComposition(composition) {
  return {
    type: SET_COMPOSITION,
    composition: composition
  };
};
var setSettings = exports.setSettings = function setSettings(settings) {
  return {
    type: SET_SETTINGS,
    settings: settings
  };
};
var setSearchQuery = exports.setSearchQuery = function setSearchQuery(searchQuery) {
  return {
    type: SET_SEARCH_QUERY,
    searchQuery: searchQuery
  };
};
var setActiveChunk = exports.setActiveChunk = function setActiveChunk(chunk) {
  return {
    type: SET_ACTIVE_CHUNK,
    chunk: chunk
  };
};
var setCurrentMediaDuration = exports.setCurrentMediaDuration = function setCurrentMediaDuration(duration) {
  return {
    type: SET_CURRENT_MEDIA_DURATION,
    duration: duration
  };
};
var setCurrentMediaTime = exports.setCurrentMediaTime = function setCurrentMediaTime(playerState, generatedByUser) {
  return {
    type: SET_CURRENT_MEDIA_TIME,
    playerState: playerState,
    generatedByUser: generatedByUser
  };
};
var setInformationModalVisibility = exports.setInformationModalVisibility = function setInformationModalVisibility(state) {
  return {
    type: SET_INFORMATION_MODAL_VISIBILITY,
    state: state
  };
};
var scrollUpdate = exports.scrollUpdate = function scrollUpdate(values) {
  return {
    type: SCROLL_UPDATE,
    values: values
  };
};
var setChunksPositions = exports.setChunksPositions = function setChunksPositions(positions) {
  return {
    type: SET_CHUNKS_POSITIONS,
    positions: positions
  };
};
var toggleAutoScroll = exports.toggleAutoScroll = function toggleAutoScroll() {
  return {
    type: TOGGLE_AUTOSCROLL
  };
};
var toggleIsPlaying = exports.toggleIsPlaying = function toggleIsPlaying() {
  return {
    type: TOGGLE_ISPLAYING
  };
};
var setPlayerVolume = exports.setPlayerVolume = function setPlayerVolume(volume) {
  return {
    type: SET_PLAYER_VOLUME,
    volume: volume
  };
};
/*
 * Reducers
 */
var COMPOSITION_DEFAULT_STATE = {};
function compositionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : COMPOSITION_DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case RESET_APP:
      return COMPOSITION_DEFAULT_STATE;
    case SET_COMPOSITION:
      return action.composition;
    default:
      return state;
  }
}

var SETTINGS_DEFAULT_STATE = {
  displayMode: 'columns'
};
function settingsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SETTINGS_DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case RESET_APP:
      return SETTINGS_DEFAULT_STATE;
    case SET_SETTINGS:
      return action.settings;
    default:
      return state;
  }
}

var PLAYER_DEFAULT_STATE = {
  chunks: [],
  searchQuery: '',
  activeChunk: undefined,
  activeChunkIndex: undefined,
  activeChunkCompletion: undefined,
  currentMediaTime: 0,
  currentDocumentTime: 0,
  // currentMediaType: undefined,
  // currentMediaUrl: undefined,
  // currentMediaPosition : undefined,
  // currentMediaIsPlaying: false,
  currentMediaDuration: 0,
  informationModalVisible: false,
  scrollPosition: undefined,
  autoScrollMode: false,
  isPlaying: false,
  playerVolume: 1
};
function player() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PLAYER_DEFAULT_STATE;
  var action = arguments[1];

  var searchQuery = void 0;
  var activeChunkIndex = void 0;
  var chunks = void 0;
  var activeChunk = void 0;
  var activeChunkCompletion = void 0;
  var finalTime = void 0;
  var currentDocumentTime = void 0;

  switch (action.type) {
    case RESET_APP:
      return PLAYER_DEFAULT_STATE;
    case SET_COMPOSITION:
      if (action.composition.data && action.composition.data.length) {
        searchQuery = state.searchQuery;
        activeChunkIndex = state.activeChunkIndex;
        var relPosSum = 0;
        return _extends({}, state, {
          chunks: action.composition.data.reduce(function (finalChunks, chunk, id) {
            var duration = chunk.end - chunk.begin;
            relPosSum += duration;
            return [].concat(_toConsumableArray(finalChunks), [_extends({}, chunk, {
              id: id,
              duration: duration,
              relativeBegin: relPosSum - duration,
              active: activeChunkIndex && activeChunkIndex === id ? true : false,
              matched: (0, _chunkMatchesSearchQuery2.default)(chunk, searchQuery)
            })]);
          }, [])
        });
      }
      return state;
    case SET_SEARCH_QUERY:
      searchQuery = action.searchQuery;
      return _extends({}, state, {
        searchQuery: searchQuery,
        chunks: state.chunks.map(function (chunk) {
          return _extends({}, chunk, {
            matched: (0, _chunkMatchesSearchQuery2.default)(chunk, searchQuery)
          });
        })
      });
    case SET_ACTIVE_CHUNK:
      chunks = state.chunks.map(function (chunk, index) {
        if (chunk.id === action.chunk.id && chunk.matched) {
          activeChunk = chunk;
          activeChunkIndex = index;
          return _extends({}, chunk, {
            active: true
          });
        }
        return _extends({}, chunk, {
          active: false
        });
      });
      // case : the user try to select a non-matched chunk = search the next one
      if (activeChunk === undefined) {
        activeChunk = chunks.some(function (chunk, index) {
          if (chunk.matched && chunk.begin >= action.chunk.begin) {
            finalTime = chunk.begin;
            activeChunkIndex = index;
            activeChunkCompletion = 0;
            chunk.active = true;
            return chunk;
          }
        });
      }
      if (activeChunk) {
        currentDocumentTime = activeChunk.relativeBegin;
      }
      return _extends({}, state, {
        activeChunk: activeChunk,
        activeChunkIndex: activeChunkIndex,
        activeChunkCompletion: 0,
        currentMediaTime: action.chunk.begin,
        currentDocumentTime: currentDocumentTime,

        autoScrollMode: true,

        chunks: chunks
      });
    case SET_CURRENT_MEDIA_DURATION:
      return _extends({}, state, {
        currentMediaDuration: action.duration.duration
      });
    case SET_CURRENT_MEDIA_TIME:
      var currentTime = action.playerState.currentTime;

      finalTime = currentTime;
      var _autoScrollMode = action.generatedByUser === true;
      // finding the active chunk
      chunks = state.chunks.map(function (chunk, index) {
        // if there is a search query use it
        if (chunk.begin <= currentTime && chunk.end >= currentTime && chunk.matched) {
          activeChunkIndex = index;
          activeChunk = _extends({}, chunk);
          activeChunkCompletion = (currentTime - activeChunk.begin) / activeChunk.duration;
          return _extends({}, chunk, {
            active: true
          });
        }
        return _extends({}, chunk, {
          active: false
        });
      });
      // case between chunks = search the next one
      if (activeChunk === undefined) {
        activeChunk = chunks.some(function (chunk, index) {
          if (chunk.matched && chunk.begin >= currentTime) {
            finalTime = chunk.begin;
            activeChunkIndex = index;
            activeChunkCompletion = 0;
            chunk.active = true;
            return chunk;
          }
        });
      }
      if (activeChunk) {
        currentDocumentTime = activeChunk.relativeBegin + (finalTime - activeChunk.begin);
      }
      return _extends({}, state, {
        currentMediaTime: finalTime,
        currentDocumentTime: currentDocumentTime,
        activeChunkIndex: activeChunkIndex,
        activeChunkCompletion: activeChunkCompletion,
        activeChunk: activeChunk,
        autoScrollMode: _autoScrollMode,
        chunks: chunks
      });
    case TOGGLE_AUTOSCROLL:
      return _extends({}, state, {
        autoScrollMode: !state.autoScrollMode
      });
    case TOGGLE_ISPLAYING:
      return _extends({}, state, {
        isPlaying: !state.isPlaying
      });
    case SET_INFORMATION_MODAL_VISIBILITY:
      return _extends({}, state, {
        informationModalVisible: action.state !== undefined ? action.state : !state.informationModalVisible
      });
    case SET_PLAYER_VOLUME:
      return _extends({}, state, {
        playerVolume: action.volume
      });
    case SCROLL_UPDATE:
      var _action$values = action.values,
          top = _action$values.top,
          scrollHeight = _action$values.scrollHeight,
          clientHeight = _action$values.clientHeight,
          scrollTop = _action$values.scrollTop;

      var topBorder = scrollTop;
      var bottomBorder = scrollTop + clientHeight;
      var topChunk = void 0;
      var topPortion = void 0;
      var bottomChunk = void 0;
      var bottomPortion = void 0;
      // translate to box position
      state.chunks.some(function (chunk) {
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
      var chunksTotalDuration = state.chunks.reduce(function (totalDuration, chunk) {
        var chunkDuration = chunk.end - chunk.begin;
        return totalDuration + chunkDuration;
      }, 0);
      var scaledTopPrct = void 0;
      var scaledHeightPrct = void 0;
      // this is the visual scroll translated to a time-relative scale
      if (topChunk) {
        var translatedTopTime = topChunk.relativeBegin + topChunk.duration * topPortion;
        var translatedBottomTime = void 0;
        translatedBottomTime = translatedTopTime + 30;
        if (bottomChunk) {
          translatedBottomTime = bottomChunk.relativeBegin + bottomChunk.duration * bottomPortion;
        } else {
          translatedBottomTime = topChunk.end;
        }
        scaledTopPrct = translatedTopTime / chunksTotalDuration * 100;
        scaledHeightPrct = (translatedBottomTime - translatedTopTime) / chunksTotalDuration * 100;
      }
      var visualTopPrct = top * 100;
      var visualHeightPrct = clientHeight / (scrollHeight - clientHeight) * 100;
      var _scrollPosition = {
        visualTopPrct: visualTopPrct,
        visualHeightPrct: visualHeightPrct,
        scaledTopPrct: scaledTopPrct,
        scaledHeightPrct: scaledHeightPrct
      };
      if (!state.scrollPosition || JSON.stringify(_scrollPosition) !== JSON.stringify(state.scrollPosition)) {
        return _extends({}, state, {
          scrollPosition: _scrollPosition
        });
      }
      return state;
    case SET_CHUNKS_POSITIONS:
      chunks = state.chunks.map(function (chunk, index) {
        return _extends({}, chunk, action.positions[index]);
      });
      if (JSON.stringify(chunks) !== JSON.stringify(state.chunks)) {
        return _extends({}, state, {
          chunks: chunks
        });
      }
      return state;
    default:
      return state;
  }
}

exports.default = (0, _redux.combineReducers)({
  player: player,
  compositionReducer: compositionReducer,
  settingsReducer: settingsReducer
});
/*
 * Selectors
 */

var compositionTitle = function compositionTitle(state) {
  return state.compositionReducer.metadata && state.compositionReducer.metadata.title;
};
var compositionDescription = function compositionDescription(state) {
  return state.compositionReducer.metadata && state.compositionReducer.metadata.description;
};
var compositionAuthors = function compositionAuthors(state) {
  return state.compositionReducer.metadata && state.compositionReducer.metadata.authors;
};
var compositionTags = function compositionTags(state) {
  return state.compositionReducer.metadata && state.compositionReducer.metadata.tags;
};

var mediaUrl = function mediaUrl(state) {
  return state.compositionReducer.metadata && state.compositionReducer.metadata.mediaUrl;
};
var displayMode = function displayMode(state) {
  return state.settingsReducer.displayMode;
};

var currentMediaDuration = function currentMediaDuration(state) {
  return state.player.currentMediaDuration;
};
var chunks = function chunks(state) {
  return state.player.chunks;
};
var activeChunk = function activeChunk(state) {
  return state.player.activeChunk;
};
var activeChunkIndex = function activeChunkIndex(state) {
  return state.player.activeChunkIndex;
};
var activeChunkCompletion = function activeChunkCompletion(state) {
  return state.player.activeChunkCompletion;
};
var autoScrollMode = function autoScrollMode(state) {
  return state.player.autoScrollMode;
};
var playerVolume = function playerVolume(state) {
  return state.player.playerVolume;
};

var currentMediaTime = function currentMediaTime(state) {
  return state.player.currentMediaTime;
};

var searchQuery = function searchQuery(state) {
  return state.player.searchQuery;
};
var informationModalVisible = function informationModalVisible(state) {
  return state.player.informationModalVisible;
};
var scrollPosition = function scrollPosition(state) {
  return state.player.scrollPosition;
};
var isPlaying = function isPlaying(state) {
  return state.player.isPlaying;
};

var selector = exports.selector = (0, _reselect.createStructuredSelector)({
  compositionTitle: compositionTitle,
  compositionDescription: compositionDescription,
  compositionAuthors: compositionAuthors,
  compositionTags: compositionTags,

  mediaUrl: mediaUrl,
  displayMode: displayMode,
  activeChunk: activeChunk,
  activeChunkIndex: activeChunkIndex,
  activeChunkCompletion: activeChunkCompletion,
  currentMediaDuration: currentMediaDuration,
  autoScrollMode: autoScrollMode,
  playerVolume: playerVolume,

  currentMediaTime: currentMediaTime,
  searchQuery: searchQuery,
  informationModalVisible: informationModalVisible,
  scrollPosition: scrollPosition,
  isPlaying: isPlaying,

  chunks: chunks
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-media-player");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _PlayerContainer = __webpack_require__(6);

var _PlayerContainer2 = _interopRequireDefault(_PlayerContainer);

var _configureStore = __webpack_require__(29);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * dicto-player Application Endpoint
 * ======================================
 *
 * Rendering the application.
 * @module dicto-player
 */
var store = (0, _configureStore2.default)({});

var Player = function Player(_ref) {
  var _ref$composition = _ref.composition,
      composition = _ref$composition === undefined ? {} : _ref$composition,
      _ref$settings = _ref.settings,
      settings = _ref$settings === undefined ? {} : _ref$settings,
      onExit = _ref.onExit;

  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_PlayerContainer2.default, {
      composition: composition,
      settings: settings,
      onExit: onExit })
  );
};

exports.default = Player;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class; /* eslint react/prefer-stateless-function : 0 */
/**
 * This module exports a stateful component connected to the redux logic of the app
 * @module dicto-player/containers/player-container
 */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _duck = __webpack_require__(3);

var duck = _interopRequireWildcard(_duck);

var _ColumnsLayout = __webpack_require__(9);

var _ColumnsLayout2 = _interopRequireDefault(_ColumnsLayout);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Redux-decorated component class rendering the player feature to the app
 */
var PlayerContainer = (_dec = (0, _reactRedux.connect)(function (state) {
  return _extends({}, duck.selector(state));
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_extends({}, duck), dispatch)
  };
}), _dec(_class = function (_Component) {
  _inherits(PlayerContainer, _Component);

  function PlayerContainer(props) {
    _classCallCheck(this, PlayerContainer);

    var _this = _possibleConstructorReturn(this, (PlayerContainer.__proto__ || Object.getPrototypeOf(PlayerContainer)).call(this, props));

    _this.props.actions.setComposition(props.composition);
    _this.props.actions.setSettings(props.settings);
    _this.renderAppropriatePlayer = function (displayMode, theseProps) {
      switch (displayMode) {
        case 'columns':
        default:
          return _react2.default.createElement(_ColumnsLayout2.default, theseProps);
      }
    };
    return _this;
  }

  _createClass(PlayerContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.composition !== nextProps.composition) {
        this.props.actions.setComposition(nextProps.composition);
      }

      if (this.props.settings !== nextProps.settings) {
        this.props.actions.setSettings(nextProps.settings);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var displayMode = this.props.displayMode;

      return displayMode ? this.renderAppropriatePlayer(displayMode, this.props) : null;
    }
  }]);

  return PlayerContainer;
}(_react.Component)) || _class);
exports.default = PlayerContainer;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = chunkMatchesSearchQuery;
function chunkMatchesSearchQuery() {
        var chunk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var searchQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        return searchQuery && searchQuery.length && chunk.content && chunk.content.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1 ? false : true;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(10);

var _reactModal = __webpack_require__(11);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _ChunksContainer = __webpack_require__(12);

var _ChunksContainer2 = _interopRequireDefault(_ChunksContainer);

var _MediaPlayer = __webpack_require__(20);

var _MediaPlayer2 = _interopRequireDefault(_MediaPlayer);

var _SearchComposition = __webpack_require__(23);

var _SearchComposition2 = _interopRequireDefault(_SearchComposition);

var _InfoTip = __webpack_require__(25);

var _InfoTip2 = _interopRequireDefault(_InfoTip);

var _Railway = __webpack_require__(27);

var _Railway2 = _interopRequireDefault(_Railway);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnsLayout = function ColumnsLayout(_ref) {
  var _ref$chunks = _ref.chunks,
      chunks = _ref$chunks === undefined ? [] : _ref$chunks,
      compositionTitle = _ref.compositionTitle,
      compositionDescription = _ref.compositionDescription,
      compositionAuthors = _ref.compositionAuthors,
      _ref$settings$allowEm = _ref.settings.allowEmbed,
      allowEmbed = _ref$settings$allowEm === undefined ? true : _ref$settings$allowEm,
      mediaUrl = _ref.mediaUrl,
      currentMediaTime = _ref.currentMediaTime,
      currentMediaDuration = _ref.currentMediaDuration,
      searchQuery = _ref.searchQuery,
      informationModalVisible = _ref.informationModalVisible,
      scrollPosition = _ref.scrollPosition,
      isPlaying = _ref.isPlaying,
      playerVolume = _ref.playerVolume,
      _ref$actions = _ref.actions,
      setCurrentMediaDuration = _ref$actions.setCurrentMediaDuration,
      setCurrentMediaTime = _ref$actions.setCurrentMediaTime,
      setSearchQuery = _ref$actions.setSearchQuery,
      setInformationModalVisibility = _ref$actions.setInformationModalVisibility,
      toggleIsPlaying = _ref$actions.toggleIsPlaying,
      setPlayerVolume = _ref$actions.setPlayerVolume,
      onExit = _ref.onExit;

  var closeModal = function closeModal() {
    return setInformationModalVisibility(false);
  };
  return _react2.default.createElement(
    'section',
    { className: 'dicto-player-ColumnsLayout' },
    _react2.default.createElement(
      'aside',
      { className: 'aside-column' },
      _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'h1',
          null,
          compositionTitle || 'Dicto',
          ' ',
          allowEmbed && _react2.default.createElement(_InfoTip2.default, { onClick: setInformationModalVisibility }),
          ' '
        ),
        _react2.default.createElement(_SearchComposition2.default, {
          searchQuery: searchQuery,
          onSearchQueryChange: setSearchQuery })
      ),
      _react2.default.createElement(_ChunksContainer2.default, { onExit: onExit })
    ),
    _react2.default.createElement(_Railway2.default, {
      chunks: chunks,
      scrollPosition: scrollPosition,
      currentMediaDuration: currentMediaDuration,
      currentMediaTime: currentMediaTime,
      seekToSec: setCurrentMediaTime,
      isPlaying: isPlaying,
      toggleIsPlaying: toggleIsPlaying,
      playerVolume: playerVolume,
      setPlayerVolume: setPlayerVolume }),
    _react2.default.createElement(
      'section',
      { className: 'media-column' },
      _react2.default.createElement(_MediaPlayer2.default, {
        mediaUrl: mediaUrl,
        onDuration: setCurrentMediaDuration,
        o: true, gnTimeUpdate: setCurrentMediaTime,
        currentMediaTime: currentMediaTime,
        isPlaying: isPlaying,
        onClick: toggleIsPlaying,
        playerVolume: playerVolume })
    ),
    informationModalVisible ? _react2.default.createElement(
      _reactModal2.default,
      {
        isOpen: informationModalVisible,
        onRequestClose: closeModal,
        shouldCloseOnOverlayClick: true,
        className: 'dicto-player-modal',
        contentLabel: 'Information' },
      _react2.default.createElement(
        'h2',
        null,
        compositionTitle || 'Dicto'
      ),
      _react2.default.createElement(
        'div',
        { className: 'modal-content-wrapper' },
        compositionDescription || compositionAuthors ? _react2.default.createElement(
          'div',
          { className: 'modal-column info' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'i',
              null,
              compositionDescription
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'i',
              null,
              compositionAuthors.map(function (author) {
                return author;
              }).join(', '),
              '.'
            )
          )
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'modal-column addresses' },
          _react2.default.createElement(
            'h3',
            null,
            'Partager'
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-section' },
            _react2.default.createElement(
              'p',
              null,
              'Url de cette composition : '
            ),
            _react2.default.createElement(
              'div',
              { className: 'to-copy' },
              window.location.href
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-section' },
            _react2.default.createElement(
              'p',
              null,
              'Embarquer : '
            ),
            _react2.default.createElement(
              'div',
              { className: 'to-copy' },
              '<iframe src="' + window.location.href + '" frameborder=0 allowfullscreen width=800 height=600 />'
            )
          )
        )
      )
    ) : null
  );
};

// import {
//   ShareButtons,
//   ShareCounts,
//   generateShareIcon
// } from 'react-share';

// const {
//   FacebookShareButton,
//   GooglePlusShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   TelegramShareButton,
//   WhatsappShareButton,
//   PinterestShareButton,
//   VKShareButton
// } = ShareButtons;

exports.default = ColumnsLayout;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class; /* eslint react/prefer-stateless-function : 0 */
/**
 * This module exports a stateful component connected to the redux logic of the app
 * @module dicto-player/containers/player-container
 */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _reactCustomScrollbars = __webpack_require__(13);

var _rebound = __webpack_require__(14);

var _duck = __webpack_require__(3);

var duck = _interopRequireWildcard(_duck);

var _Chunk = __webpack_require__(15);

var _Chunk2 = _interopRequireDefault(_Chunk);

__webpack_require__(19);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Redux-decorated component class rendering the chunks container to the app
 */
var ChunksContainer = (_dec = (0, _reactRedux.connect)(function (state) {
  return _extends({}, duck.selector(state));
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_extends({}, duck), dispatch)
  };
}), _dec(_class = function (_Component) {
  _inherits(ChunksContainer, _Component);

  function ChunksContainer(props) {
    _classCallCheck(this, ChunksContainer);

    var _this = _possibleConstructorReturn(this, (ChunksContainer.__proto__ || Object.getPrototypeOf(ChunksContainer)).call(this, props));

    _this.chunks = [];
    _this.springSystem = new _rebound.SpringSystem();
    _this.handleSpringUpdate = _this.handleSpringUpdate.bind(_this);
    _this.scrollTop = _this.scrollTop.bind(_this);
    _this.onScrollUpdate = _this.onScrollUpdate.bind(_this);
    _this.spring = _this.springSystem.createSpring();
    _this.spring.addListener({ onSpringUpdate: _this.handleSpringUpdate });
    return _this;
  }

  _createClass(ChunksContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.autoScrollMode) {
        var activeChunkIndex = nextProps.activeChunkIndex,
            activeChunkCompletion = nextProps.activeChunkCompletion,
            toggleAutoScroll = nextProps.actions.toggleAutoScroll;

        var chunk = document.getElementById('chunk-' + activeChunkIndex);
        if (chunk) {
          var scrollTop = chunk.offsetTop;
          var height = chunk.offsetHeight;
          var target = scrollTop + height * activeChunkCompletion;
          var centered = target - this.container.offsetHeight / 2;
          this.scrollTop(centered);
        }
        toggleAutoScroll();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var positions = this.chunks.map(function (chunk) {
        return chunk.getPosition();
      });
      this.props.actions.setChunksPositions(positions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.springSystem.deregisterSpring(this.spring);
      this.springSystem.removeAllListeners();
      this.springSystem = undefined;
      this.spring.destroy();
      this.spring = undefined;
    }
  }, {
    key: 'scrollTop',
    value: function scrollTop(top) {
      var scrollbars = this.scrollbars;
      // scrollbars.scrollTop(top);

      var scrollTop = scrollbars.getScrollTop();
      var scrollHeight = scrollbars.getScrollHeight();
      // const val = MathUtil.mapValueInRange(top, 0, scrollHeight, scrollHeight * 0.2, scrollHeight * 0.8);
      var val = _rebound.MathUtil.mapValueInRange(top, 0, scrollHeight, 0, scrollHeight);
      this.spring.setCurrentValue(scrollTop).setAtRest();
      this.spring.setEndValue(val);
    }
  }, {
    key: 'handleSpringUpdate',
    value: function handleSpringUpdate(spring) {
      var val = spring.getCurrentValue();
      this.scrollbars.scrollTop(val);
    }
  }, {
    key: 'onScrollUpdate',
    value: function onScrollUpdate(values) {
      this.props.actions.scrollUpdate(values);

      var onExit = this.props.onExit;
      var scrollTop = values.scrollTop,
          scrollHeight = values.scrollHeight,
          clientHeight = values.clientHeight;

      if (scrollTop === 0 && typeof onExit === 'function') {
        onExit('top', values);
      } else if (scrollTop >= scrollHeight - clientHeight && typeof onExit === 'function') {
        onExit('bottom', values);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$actions = _props.actions,
          setActiveChunk = _props$actions.setActiveChunk,
          toggleIsPlaying = _props$actions.toggleIsPlaying,
          setSearchQuery = _props$actions.setSearchQuery,
          chunks = _props.chunks,
          isPlaying = _props.isPlaying;


      var bindScrollbarRef = function bindScrollbarRef(scrollbar) {
        _this2.scrollbars = scrollbar;
      };
      var bindContainerRef = function bindContainerRef(container) {
        _this2.container = container;
      };

      var onChunkClick = function onChunkClick(chunk) {
        setActiveChunk(chunk);
        if (!isPlaying) {
          toggleIsPlaying();
        }
      };

      return _react2.default.createElement(
        'div',
        {
          className: 'dicto-player-ChunksContainer',
          ref: bindContainerRef },
        _react2.default.createElement(
          _reactCustomScrollbars.Scrollbars,
          {
            ref: bindScrollbarRef,
            style: { width: '100%', height: '100%' },
            onUpdate: this.onScrollUpdate },
          chunks.map(function (thatChunk, index) {
            var bindChunkRef = function bindChunkRef(chunk) {
              _this2.chunks[index] = chunk;
            };
            return _react2.default.createElement(_Chunk2.default, {
              chunk: thatChunk,
              id: 'chunk-' + index,
              onTagQuery: setSearchQuery,
              key: index,
              onClick: onChunkClick,
              ref: bindChunkRef });
          })
        )
      );
    }
  }]);

  return ChunksContainer;
}(_react.Component)) || _class);
exports.default = ChunksContainer;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("rebound");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(16);

var _reactMarkdown = __webpack_require__(17);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _getContrastYIQ = __webpack_require__(18);

var _getContrastYIQ2 = _interopRequireDefault(_getContrastYIQ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function LinkRenderer(props) {
  return _react2.default.createElement(
    'a',
    { href: props.href, target: '_blank' },
    props.children
  );
}

var Chunk = function (_Component) {
  _inherits(Chunk, _Component);

  function Chunk(props) {
    _classCallCheck(this, Chunk);

    var _this = _possibleConstructorReturn(this, (Chunk.__proto__ || Object.getPrototypeOf(Chunk)).call(this, props));

    _this.getPosition = function () {
      var height = _this.element.offsetHeight;
      var top = _this.element.offsetTop;
      return {
        height: height,
        top: top
      };
    };
    return _this;
  }

  _createClass(Chunk, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$chunk = _props.chunk,
          chunk = _props$chunk === undefined ? {} : _props$chunk,
          onClick = _props.onClick,
          onTagQuery = _props.onTagQuery,
          id = _props.id;

      var onChunkClick = function onChunkClick() {
        return onClick(chunk);
      };
      var bindRef = function bindRef(section) {
        _this2.element = section;
      };
      return _react2.default.createElement(
        'section',
        {
          className: 'dicto-player-Chunk ' + (chunk.active ? 'active ' : ' ') + (chunk.matched === false ? 'hidden' : ' '),
          onClick: onChunkClick,
          id: id,
          ref: bindRef },
        _react2.default.createElement(
          'div',
          { className: 'contents-container' },
          _react2.default.createElement(_reactMarkdown2.default, {
            source: chunk.content,
            renderers: { Link: LinkRenderer } })
        ),
        chunk.tags ? _react2.default.createElement(
          'div',
          { className: 'tags-container' },
          chunk.tags.map(function (tag, index) {
            var onTagClick = function onTagClick() {
              return onTagQuery('' + tag.name);
            };
            return _react2.default.createElement(
              'span',
              {
                className: 'tag',
                key: index,
                onClick: onTagClick,
                style: {
                  background: tag.color,
                  color: (0, _getContrastYIQ2.default)(tag.color)
                } },
              tag.name,
              ' (',
              tag.category,
              ')'
            );
          })
        ) : null
      );
    }
  }]);

  return Chunk;
}(_react.Component);

exports.default = Chunk;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getContrastYIQ;
function getContrastYIQ(hexcolor) {
  if (!hexcolor) {
    return;
  }
  if (hexcolor.length > 6) {
    hexcolor = hexcolor.substring(1);
  }
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMediaPlayer = __webpack_require__(4);

__webpack_require__(21);

var _MediaTimeHandler = __webpack_require__(22);

var _MediaTimeHandler2 = _interopRequireDefault(_MediaTimeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* esling react/prefer-stateless-function: 0 */


var MediaPlayer = function (_Component) {
  _inherits(MediaPlayer, _Component);

  function MediaPlayer(props) {
    _classCallCheck(this, MediaPlayer);

    return _possibleConstructorReturn(this, (MediaPlayer.__proto__ || Object.getPrototypeOf(MediaPlayer)).call(this, props));
  }

  _createClass(MediaPlayer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          mediaUrl = _props.mediaUrl,
          onDuration = _props.onDuration,
          onTimeUpdate = _props.onTimeUpdate,
          currentMediaTime = _props.currentMediaTime,
          isPlaying = _props.isPlaying,
          playerVolume = _props.playerVolume,
          onClick = _props.onClick;

      var handleClick = function handleClick() {
        return onClick();
      };
      return mediaUrl ? _react2.default.createElement(
        _reactMediaPlayer.Media,
        null,
        _react2.default.createElement(
          'div',
          { onClick: handleClick, className: 'dicto-player-MediaPlayer' },
          _react2.default.createElement(
            'div',
            { className: 'media-player' },
            _react2.default.createElement(_reactMediaPlayer.Player, {
              src: mediaUrl,
              onDuration: onDuration,
              onTimeUpdate: onTimeUpdate })
          ),
          _react2.default.createElement(
            'div',
            { className: 'media-controls' },
            _react2.default.createElement(_MediaTimeHandler2.default, {
              isPlaying: isPlaying,
              currentMediaTime: currentMediaTime,
              playerVolume: playerVolume })
          )
        )
      ) : null;
    }
  }]);

  return MediaPlayer;
}(_react.Component);

exports.default = (0, _reactMediaPlayer.withMediaProps)(MediaPlayer);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMediaPlayer = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-set-state : 0 */


var CustomPlayPause = function (_Component) {
  _inherits(CustomPlayPause, _Component);

  function CustomPlayPause(props) {
    _classCallCheck(this, CustomPlayPause);

    var _this = _possibleConstructorReturn(this, (CustomPlayPause.__proto__ || Object.getPrototypeOf(CustomPlayPause)).call(this, props));

    _this.seekToCurrentMediaTime = _this.seekToCurrentMediaTime.bind(_this);

    _this.state = {
      seeking: false
    };
    return _this;
  }

  _createClass(CustomPlayPause, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (Math.abs(this.props.currentMediaTime - nextProps.currentMediaTime) > 1 && !this.props.isLoading) {

        if (this.state.seeking === false) {
          this.setState({ seeking: true });
          setTimeout(function () {
            _this2.seekToCurrentMediaTime(nextProps.currentMediaTime);
          });
          setTimeout(function () {
            return _this2.setState({ seeking: false });
          }, 200);
        }
      }

      if (this.props.isPlaying !== nextProps.isPlaying) {
        if (nextProps.isPlaying) {
          setTimeout(this.props.media.play);
        } else {
          setTimeout(this.props.media.pause);
        }
      }
      if (this.props.playerVolume !== nextProps.playerVolume) {
        setTimeout(function () {
          _this2.props.media.setVolume(nextProps.playerVolume);
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'seekToCurrentMediaTime',
    value: function seekToCurrentMediaTime(nextTime) {
      this.props.media.seekTo(nextTime);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        'span',
        {
          className: className,
          style: style },
        this.props.currentMediaTime
      );
    }
  }]);

  return CustomPlayPause;
}(_react.Component);

exports.default = (0, _reactMediaPlayer.withMediaProps)(CustomPlayPause);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchComposition = function SearchComposition(_ref) {
  var searchQuery = _ref.searchQuery,
      onSearchQueryChange = _ref.onSearchQueryChange;

  var onSearchTermChange = function onSearchTermChange(e) {
    return onSearchQueryChange(e.target.value);
  };
  return _react2.default.createElement(
    'div',
    { className: 'dicto-player-SearchComposition' },
    _react2.default.createElement('input', {
      type: 'text',
      value: searchQuery,
      onChange: onSearchTermChange,
      placeholder: 'Chercher un terme' })
  );
};

exports.default = SearchComposition;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoTip = function InfoTip(_ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement(
    'span',
    {
      className: 'dicto-player-InfoTip',
      onClick: onClick },
    'i'
  );
};

exports.default = InfoTip;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Railway = function Railway(_ref) {
  var _ref$chunks = _ref.chunks,
      chunks = _ref$chunks === undefined ? [] : _ref$chunks,
      scrollPosition = _ref.scrollPosition,
      currentMediaDuration = _ref.currentMediaDuration,
      currentMediaTime = _ref.currentMediaTime,
      _ref$relativePosition = _ref.relativePositions,
      relativePositions = _ref$relativePosition === undefined ? true : _ref$relativePosition,
      seekToSec = _ref.seekToSec,
      isPlaying = _ref.isPlaying,
      toggleIsPlaying = _ref.toggleIsPlaying,
      playerVolume = _ref.playerVolume,
      setPlayerVolume = _ref.setPlayerVolume;

  var chunksTotalDuration = chunks.reduce(function (totalDuration, chunk) {
    return totalDuration + chunk.duration;
  }, 0);
  var positionnedChunks = [];
  // chunks are positionned relatively to the sum of all chunks durations
  if (relativePositions) {
    positionnedChunks = chunks.map(function (chunk) {
      var relativeDuration = chunk.duration / chunksTotalDuration;
      var relativePosition = chunk.relativeBegin / chunksTotalDuration;
      return _extends({}, chunk, {
        relativeDuration: relativeDuration,
        relativePosition: relativePosition
      });
    });
    // chunks are positionned relatively to their actual begining timecode
  } else {
    positionnedChunks = chunks.map(function (chunk) {
      var relativeDuration = chunk.duration / currentMediaDuration;
      var relativePosition = chunk.begin / currentMediaDuration;
      return _extends({}, chunk, {
        relativeDuration: relativeDuration,
        relativePosition: relativePosition
      });
    });
  }

  // determining playing head position
  var playingHeadPosition = void 0;
  var playingHeadRelativePosition = void 0;
  if (currentMediaTime) {
    if (relativePositions) {
      var activeChunk = chunks.find(function (chunk) {
        return currentMediaTime >= chunk.begin && currentMediaTime <= chunk.end;
      });
      if (activeChunk) {
        playingHeadPosition = activeChunk.relativeBegin + (currentMediaTime - activeChunk.begin);
        playingHeadRelativePosition = playingHeadPosition / chunksTotalDuration;
      }
    } else {
      playingHeadPosition = currentMediaTime;
      playingHeadRelativePosition = playingHeadPosition / currentMediaDuration;
    }
  }

  var toggleVolume = function toggleVolume() {
    // todo : set progressive volume setter
    if (playerVolume === 0) {
      setPlayerVolume(1);
    } else {
      setPlayerVolume(0);
    }
  };
  return _react2.default.createElement(
    'aside',
    { className: 'dicto-player-Railway' },
    _react2.default.createElement(
      'div',
      { className: 'player-ui' },
      _react2.default.createElement(
        'button',
        { onClick: toggleIsPlaying },
        isPlaying ? '❙❙' : '▶'
      ),
      _react2.default.createElement(
        'button',
        {
          id: 'volume-symbol',
          className: playerVolume === 0 ? 'inactive' : 'active',
          onClick: toggleVolume },
        _react2.default.createElement(
          'span',
          null,
          '\u2759'
        ),
        _react2.default.createElement(
          'span',
          null,
          '\u2759'
        ),
        _react2.default.createElement(
          'span',
          null,
          '\u2759'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'chunks-container' },
      positionnedChunks.map(function (chunk) {
        var onClick = function onClick(e) {
          var y = e.nativeEvent.offsetY;
          var h = e.target.offsetHeight;
          var seekTo = chunk.begin + chunk.duration * (y / h);
          // second argument declares that seek event is user-generated
          seekToSec({ currentTime: seekTo }, true);
        };
        return _react2.default.createElement(
          'div',
          {
            key: chunk.id,
            className: 'chunk ' + (chunk.active ? 'active ' : ' ') + (chunk.matched === false ? 'hidden' : ' '),
            onClick: onClick,
            style: {
              top: chunk.relativePosition * 100 + '%',
              height: chunk.relativeDuration * 100 + '%'
            } },
          chunk.tags && chunk.tags.map(function (tag, tagIndex) {
            return _react2.default.createElement('span', {
              className: 'tag',
              key: tagIndex,
              style: {
                background: tag.color
              } });
          })
        );
      }),
      currentMediaTime ? _react2.default.createElement('div', {
        className: 'playing-head',
        style: {
          top: playingHeadRelativePosition * 100 + '%'
        } }) : null,
      scrollPosition ? _react2.default.createElement('div', {
        className: 'scrollbar',
        style: {
          top: scrollPosition.scaledTopPrct + '%',
          height: scrollPosition.scaledHeightPrct + '%'
        } }) : null
    )
  );
};

exports.default = Railway;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(1);

var _reduxThunk = __webpack_require__(30);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _duck = __webpack_require__(3);

var _duck2 = _interopRequireDefault(_duck);

var _promiseMiddleware = __webpack_require__(31);

var _promiseMiddleware2 = _interopRequireDefault(_promiseMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Configures store with a possible inherited state and appropriate reducers
 * @param initialState - the state to use to bootstrap the reducer
 * @return {object} store - the configured store
 */
/**
 * Dicto-player store configuration
 * ===================================
 * Configuring store with appropriate middlewares
 */
function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Compose final middleware with thunk and promises handling
  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _promiseMiddleware2.default)());

  // Create final store and subscribe router in debug env ie. for devtools
  var createStoreWithMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ ? (0, _redux.compose)(
  // related middlewares
  middleware,
  // connection to redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__())(_redux.createStore) : (0, _redux.compose)(middleware)(_redux.createStore);

  var store = createStoreWithMiddleware(_duck2.default,
  // rootReducer,
  initialState);
  // live-reloading handling
  if (false) {
    module.hot.accept('./duck', function () {
      var nextRootReducer = require('./duck').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Promise middleware
 * ===================================
 * If a promise is passed in an action,
 * this middleware will resolve it and dispatch related actions names
 * (ACTION_NAME when started, then ACTION_NAME_SUCCESS or ACTION_NAME_FAIL depending on promise outcome)
 */

exports.default = function () {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // If the action is a function, execute it
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }

        var promise = action.promise,
            type = action.type,
            rest = _objectWithoutProperties(action, ['promise', 'type']);

        // If there is no promise in the action, ignore it


        if (!promise) {
          return next(action);
        }
        var REQUEST = type;
        var SUCCESS = REQUEST + '_SUCCESS';
        var FAILURE = REQUEST + '_FAIL';

        // Trigger the action (for loading indication for instance)
        next(_extends({}, rest, { type: REQUEST }));
        return promise(dispatch, getState).then(function (result) {
          next(_extends({}, rest, { result: result, type: SUCCESS }));
          return true;
        }).catch(function (error) {
          return next(_extends({}, rest, error, { errorMessage: error, type: FAILURE }));
        });
      };
    };
  };
};

/***/ })
/******/ ])["default"];