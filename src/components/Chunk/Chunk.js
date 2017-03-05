import React from 'react';

import './Chunk.scss';

import ReactMarkdown from 'react-markdown';
import getContrastYIQ from '../../utils/getContrastYIQ';

const Chunk = ({
  chunk = {},
  onClick
}) => {
  const onChunkClick = () => onClick(chunk);
  return (
    <section
      className={'dicto-player-Chunk ' + (chunk.active ? 'active ' : ' ') + (chunk.matched === false ? 'hidden' : ' ')}
      onClick={onChunkClick}>
      <div className="contents-container">
        <ReactMarkdown source={chunk.content} />
      </div>
      {chunk.tags ?
        <div className="tags-container">
          {
          chunk.tags.map((tag, index) => (
            <span
              className="tag"
              key={index}
              style={{
                background: tag.color,
                color: getContrastYIQ(tag.color)
              }}>
              {tag.name} ({tag.category})
            </span>
          ))
        }
        </div> : null}
    </section>
  );
};

export default Chunk;
