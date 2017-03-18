import React from 'react';

import './Railway.scss';

const Railway = ({
  chunks = [],
  scrollPosition,
  currentMediaDuration,
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
