import React from 'react';

import './FullscreenLayout.scss';

import Modal from 'react-modal';


import ChunksContainer from '../../containers/ChunksContainer/ChunksContainer';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import SearchComposition from '../SearchComposition/SearchComposition';
import InfoTip from '../InfoTip/InfoTip';
import Railway from '../Railway/Railway';


const FullscreenLayout = ({
  chunks = [],
  compositionTitle,
  compositionDescription,
  compositionAuthors,

  settings: {
    allowEmbed = true
  },

  mediaUrl,
  currentMediaTime,
  currentMediaDuration,
  searchQuery,
  informationModalVisible,
  scrollPosition,
  isPlaying,
  playerVolume,
  actions: {
    setCurrentMediaDuration,
    setCurrentMediaTime,
    setSearchQuery,
    setInformationModalVisibility,
    toggleIsPlaying,
    setPlayerVolume
  },
  onExit,
}) => {
  const closeModal = () => setInformationModalVisibility(false);
  return (
    <section className="dicto-player-FullscreenLayout">
      <div className="header">
        <h1>{compositionTitle || 'Dicto'} {allowEmbed && <InfoTip onClick={setInformationModalVisibility} />} </h1>
        <SearchComposition
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery} />
      </div>
      <section className="main-row">
        <section className="media-container">
          <MediaPlayer
            mediaUrl={mediaUrl}
            onDuration={setCurrentMediaDuration}
            o gnTimeUpdate={setCurrentMediaTime}
            currentMediaTime={currentMediaTime}
            isPlaying={isPlaying}
            onClick={toggleIsPlaying}
            playerVolume={playerVolume} />
        </section>
        <section className="contents-wrapper">
          <Railway
            chunks={chunks}
            scrollPosition={scrollPosition}
            currentMediaDuration={currentMediaDuration}
            currentMediaTime={currentMediaTime}
            seekToSec={setCurrentMediaTime}
            isPlaying={isPlaying}
            toggleIsPlaying={toggleIsPlaying}
            playerVolume={playerVolume}
            setPlayerVolume={setPlayerVolume} />
          <ChunksContainer onExit={onExit} />
        </section>
      </section>

      {
        informationModalVisible ?
          <Modal
            isOpen={informationModalVisible}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick
            className="dicto-player-modal"
            contentLabel="Information">
            <h2>{compositionTitle || 'Dicto'}</h2>

            <div className="modal-content-wrapper">
              {compositionDescription || compositionAuthors ?
                <div className="modal-column info">
                  <p><i>{compositionDescription}</i></p>
                  <p><i>{compositionAuthors.map(author => author).join(', ')}.</i></p>
                </div> : null }
              <div className="modal-column addresses">
                <h3>Partager</h3>
                <div className="modal-section">
                  <p>Url de cette composition : </p>
                  <div className="to-copy">{window.location.href}</div>
                </div>
                <div className="modal-section">
                  <p>Embarquer : </p>
                  <div className="to-copy">
                    {`<iframe src="${window.location.href}" frameborder=0 allowfullscreen width=800 height=600 />`}
                  </div>
                </div>
                {/*<div className="modal-section">
                <FacebookShareButton
                  title={compositionTitle}
                  description={compositionDescription || chunks[0] && chunks[0].content}
                />
                <TwitterShareButton
                  title={compositionTitle}
                  hashtags={compositionTags.map(tag => tag.name)}
                />
              </div>*/}
              </div>
            </div>
          </Modal>
        : null
      }
    </section>
  );
};

export default FullscreenLayout;
