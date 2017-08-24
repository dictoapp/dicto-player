/* esling react/prefer-stateless-function: 0 */
import React, {Component} from 'react';
import {Media, Player, withMediaProps} from 'react-media-player';

import './MediaPlayer.scss';
import MediaTimeHandler from './MediaTimeHandler';


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
      currentMediaTime,
      isPlaying,
      playerVolume,
      onClick
    } = this.props;
    const handleClick = () => onClick();
    return mediaUrl ? (
      <Media>
        <div onClick={handleClick} className="dicto-player-MediaPlayer">
          <div className="media-player">
            <Player
              src={mediaUrl}
              onDuration={onDuration}
              onTimeUpdate={onTimeUpdate} />
          </div>
          <div className="media-controls">
            <MediaTimeHandler
              isPlaying={isPlaying}
              currentMediaTime={currentMediaTime}
              playerVolume={playerVolume} />
          </div>
        </div>
      </Media>
    ) : null;
  }
}

export default withMediaProps(MediaPlayer);
