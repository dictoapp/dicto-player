import React from 'react';

import './Railway.scss';

const Railway = ({
  chunks = [],
  scrollPosition,
  currentMediaDuration,
  currentMediaTime,
  relativePositions = true
}) => {
  const chunksTotalDuration = chunks.reduce((totalDuration, chunk) => {
    return totalDuration + chunk.duration;
  }, 0);
  let positionnedChunks;
  // chunks are positionned relatively to the sum of all chunks durations
  if (relativePositions) {
    positionnedChunks = chunks.map(chunk => {
      const relativeDuration = chunk.duration / chunksTotalDuration;
      const relativePosition = chunk.relativeBegin / chunksTotalDuration;
      return {
        ...chunk,
        relativeDuration,
        relativePosition
      };
    });
  // chunks are positionned relatively to their actual begining timecode
  }
 else {
    positionnedChunks = chunks.map(chunk => {
      const relativeDuration = chunk.duration / currentMediaDuration;
      const relativePosition = chunk.begin / currentMediaDuration;
      return {
        ...chunk,
        relativeDuration,
        relativePosition
      };
    });
  }

  // determining playing head position
  let playingHeadPosition;
  let playingHeadRelativePosition;
  if (currentMediaTime) {
    if (relativePositions) {
      const activeChunk = chunks.find(chunk => currentMediaTime >= chunk.begin && currentMediaTime <= chunk.end);
      if (activeChunk) {
        playingHeadPosition = activeChunk.relativeBegin + (currentMediaTime - activeChunk.begin);
        playingHeadRelativePosition = playingHeadPosition / chunksTotalDuration;
      }
    }
    else {
      playingHeadPosition = currentMediaTime;
      playingHeadRelativePosition = playingHeadPosition / currentMediaDuration;
    }
  }
  return (
    <aside className="dicto-player-Railway">
      <div className="chunks-container">
        {
          positionnedChunks
          .map(chunk => (
            <div
              key={chunk.id}
              className={'chunk ' + (chunk.active ? 'active ' : ' ') + (chunk.matched === false ? 'hidden' : ' ')}
              style={{
                  top: (chunk.relativePosition * 100) + '%',
                  height: (chunk.relativeDuration * 100) + '%'
                }}>
              {
                  chunk.tags.map((tag, tagIndex) => (
                    <span
                      className="tag"
                      key={tagIndex}
                      style={{
                        background: tag.color
                      }} />
                  ))
                }
            </div>
          ))
        }
        {
          currentMediaTime ?
            <div className="playing-head"
              style={{
                top: (playingHeadRelativePosition * 100) + '%'
              }} />
          : null
        }
        {scrollPosition ?
          <div className="scrollbar"
            style={{
              top: scrollPosition.scaledTopPrct + '%',
              height: scrollPosition.scaledHeightPrct + '%'
            }} /> : null}
      </div>
    </aside>
  );
};

export default Railway;
