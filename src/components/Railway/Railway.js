import React from 'react';

import './Railway.scss';

const Railway = ({
  chunks = [],
  scrollPosition
}) => {
  const chunksTotalDuration = chunks.reduce((totalDuration, chunk) => {
    const chunkDuration = chunk.end - chunk.begin;
    return totalDuration + chunkDuration;
  }, 0);
  // todo : implement that when handling montages
  // let relPosSum = 0;
  const positionnedChunks = chunks.map(chunk => {
    const duration = (chunk.end - chunk.begin);
    const relativeDuration = duration / chunksTotalDuration;
    const relativePosition = chunk.begin / chunksTotalDuration; // relPosSum / chunksTotalDuration;
    // relPosSum += duration;
    return {
      ...chunk,
      relativeDuration,
      relativePosition
    };
  });
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
