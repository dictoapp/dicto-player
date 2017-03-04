
import React, { Component } from 'react';
import { Media, Player, controls } from 'react-media-player';

import './MediaPlayer.scss';

const { PlayPause, MuteUnmute, } = controls;

class MediaPlayer extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const {
      mediaUrl,
      onDuration,
      onTimeUpdate
    } = this.props;
    return  mediaUrl ? (
      <Media>
        <div className="MediaPlayer">
          <div className="media-player">
            <Player 
              src={mediaUrl}
              onDuration={onDuration}
              onTimeUpdate={onTimeUpdate}
            />
          </div>
          <div className="media-controls">
            <PlayPause/>
            <MuteUnmute/>
          </div>
        </div>
      </Media>
    ) : null;
  }
}

export default MediaPlayer;