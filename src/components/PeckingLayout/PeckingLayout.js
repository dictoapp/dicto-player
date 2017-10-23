import React, {Component} from 'react';

import {TagCloud} from 'react-tagcloud';

import './PeckingLayout.scss';

import Modal from 'react-modal';


import ChunksContainer from '../../containers/ChunksContainer/ChunksContainer';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import SearchComposition from '../SearchComposition/SearchComposition';
import InfoTip from '../InfoTip/InfoTip';
import Railway from '../Railway/Railway';


class PeckingLayout extends Component {

  constructor(props) {
    super(props);
    this.updateVisData = this.updateVisData.bind(this);
    this.state = {
      network: {
        nodes: [],
        edges: []
      }
    };
  }

  componentDidMount() {
    this.updateVisData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.chunks !== nextProps.chunks) {
      this.updateVisData(nextProps);
    }
  }

  updateVisData(props) {
    const {chunks} = props;

    let nodeIndex = 0;
    const network = chunks.reduce((result, chunk) => {
      const tags = chunk.tags || [];
      return tags.reduce((res, tag) => {
        nodeIndex ++;
        const n = res.nodes.find(node => node.name === tag.name && node.category === tag.category);
        if (n) {
          n.count = n.count + 1;
        }
 else {
          res.nodes.push({
            ...tag,
            value: tag.name, // + ' (' + tag.category + ')',
            id: nodeIndex,
            count: 1
          });
        }
        return res;
      }, result);
    }, {
      nodes: [],
      edges: []
    });
    network.nodes = network.nodes.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      else return -1;
    });
    this.setState({network});/* eslint react/no-set-state: 0 */
  }


  render() {
    const {
      chunks = [],
      compositionTitle,
      compositionDescription,
      compositionAuthors,

      settings: {
        allowEmbed = true,
        // visMode
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
    } = this.props;
    const {
      network: {
        nodes
      }
    } = this.state;
    const onTagClick = tag => setSearchQuery(tag.value);
    const closeModal = () => setInformationModalVisibility(false);
    return (
      <section className="dicto-player-PeckingLayout">
        <aside className="aside-column">
          <div className="header">
            <h1>{compositionTitle || 'Dicto'} {allowEmbed && <InfoTip onClick={setInformationModalVisibility} />} </h1>
            <SearchComposition
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery} />
          </div>
          <ChunksContainer onExit={onExit} />
        </aside>
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
        <section className="media-column">
          <div className="media-container">
            <MediaPlayer
              mediaUrl={mediaUrl}
              onDuration={setCurrentMediaDuration}
              o gnTimeUpdate={setCurrentMediaTime}
              currentMediaTime={currentMediaTime}
              isPlaying={isPlaying}
              onClick={toggleIsPlaying}
              playerVolume={playerVolume} />
          </div>
          <div className="visualization-container">
            {
              // visMode === 'tagcloud' &&
              <TagCloud
                minSize={12}
                maxSize={35}
                tags={nodes}
                className="tagcloud"
                onClick={onTagClick} />
            }
          </div>
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
  }
}

export default PeckingLayout;
