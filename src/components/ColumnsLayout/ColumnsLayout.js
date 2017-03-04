import React from 'react';

import './ColumnsLayout.scss';

import Chunk from '../Chunk/Chunk';
import MediaPlayer from '../MediaPlayer/MediaPlayer';


const ColumnsLayout = ({
  chunks = [],
  compositionTitle,
  mediaUrl,
  currentMediaTime,
  actions: {
    setActiveChunk,
    setCurrentMediaDuration,
    setCurrentMediaTime
  }
}) => (
  <section className="dicto-player-ColumnsLayout">
    <aside className="aside-column">
      <div className="header">
        <h1>{compositionTitle || 'Dicto'}</h1>
      </div>
      <div className="chunks-container">
        {
          chunks.map((chunk, index) => (
            <Chunk
              chunk={chunk}
              key={index}
              onClick={setActiveChunk} />
          ))
        }
      </div>
    </aside>
    <section className="media-column">
      <MediaPlayer
        mediaUrl={mediaUrl}
        onDuration={setCurrentMediaDuration}
        onTimeUpdate={setCurrentMediaTime}
        currentMediaTime={currentMediaTime} />
    </section>
  </section>
);

export default ColumnsLayout;
