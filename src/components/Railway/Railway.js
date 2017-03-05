import React from 'react';

import './Railway.scss';

const Railway = ({
  chunks = []
}) => {
  const chunksTotalDuration = chunks.reduce((totalDuration, chunk) => {
    const chunkDuration = chunk.end - chunk.begin;
    return totalDuration + chunkDuration;
  } , 0);
  let relPosSum = 0;
  const positionnedChunks = chunks.map(chunk => {
    const duration = (chunk.end - chunk.begin);
    const relativeDuration = duration / chunksTotalDuration;
    const relativePosition = relPosSum / chunksTotalDuration;
    relPosSum += duration;
    return {
      ...chunk,
      relativeDuration,
      relativePosition
    }
  })
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
                }}
              >
                {
                  chunk.tags.map((tag, tagIndex) => (
                    <span 
                      className="tag"
                      style={{
                        background: tag.color
                      }}
                    />
                  ))
                }
              </div>
          ))
        }
      </div>
    </aside>
  );
};

export default Railway;