/* esling react/prefer-stateless-function: 0 */
import React, {Component} from 'react';
import {Media, Player, controls, withMediaProps} from 'react-media-player';

import './MediaPlayer.scss';
import MediaTimeHandler from './MediaTimeHandler';

const {PlayPause, MuteUnmute} = controls;

class MediaPlayer extends Component {

  constructor(props) {
    super(props);
  }
  shouldComponentUpdate() {
    return true;
  }
  render() {
    const {
      mediaUrl,
      onDuration,
      onTimeUpdate,
      currentMediaTime
    } = this.props;
    return mediaUrl ? (
      <Media>
        <div className="MediaPlayer">
          <div className="media-player">
            <Player
              src={mediaUrl}
              onDuration={onDuration}
              onTimeUpdate={onTimeUpdate} />
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
            <MediaTimeHandler currentMediaTime={currentMediaTime} />
          </div>
        </div>
      </Media>
    ) : null;
  }
}

export default withMediaProps(MediaPlayer);
