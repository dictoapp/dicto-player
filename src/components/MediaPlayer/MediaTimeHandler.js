/* eslint react/no-set-state : 0 */
import React, {Component} from 'react';
import {withMediaProps} from 'react-media-player';

class CustomPlayPause extends Component {

  constructor (props) {
    super(props);

    this.seekToCurrentMediaTime = this.seekToCurrentMediaTime.bind(this);

    this.state = {
      seeking: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (Math.abs(this.props.currentMediaTime - nextProps.currentMediaTime) > 1 && !this.props.isLoading) {

      if (this.state.seeking === false) {
        this.setState({seeking: true});
        this.seekToCurrentMediaTime(nextProps.currentMediaTime);
        setTimeout(() => this.setState({seeking: false}), 200);
      }
    }

    if (this.props.isPlaying !== nextProps.isPlaying) {
      if (nextProps.isPlaying) {
        this.props.media.play();
      }
 else {
        this.props.media.pause();
      }
    }
    if (this.props.playerVolume !== nextProps.playerVolume) {
      this.props.media.setVolume(nextProps.playerVolume);
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  seekToCurrentMediaTime (nextTime) {
      this.props.media.seekTo(nextTime);
  }

  render() {
    const {className, style} = this.props;
    return (
      <span
        className={className}
        style={style}>
        { this.props.currentMediaTime }
      </span>
    );
  }
}

export default withMediaProps(CustomPlayPause);
