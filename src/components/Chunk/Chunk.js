import React from 'react';

import './Chunk.scss';

import ReactMarkdown from 'react-markdown';


const Chunk = ({
  chunk = {},
  onClick
}) => {
  const onChunkClick = () => onClick(chunk);
  return (
    <section
      className={'dicto-player-Chunk ' + (chunk.active ? 'active' : '')}
      onClick={onChunkClick}>
      <div className="contents-container">
        <ReactMarkdown source={chunk.content} />
      </div>
      {chunk.tags ?
        <div className="tags-container">
          {
          chunk.tags.map((tag, index) => (
            <span
              className="tag-container"
              key={index}
              style={{
                background: tag.color
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
