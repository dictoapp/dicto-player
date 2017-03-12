/* eslint react/prefer-stateless-function : 0 */
/**
 * This module exports a stateful component connected to the redux logic of the app
 * @module dicto-player/containers/player-container
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Scrollbars} from 'react-custom-scrollbars';

import * as duck from '../../redux/duck';

import Chunk from '../../components/Chunk/Chunk';

import './ChunksContainer.scss';

/**
 * Redux-decorated component class rendering the chunks container to the app
 */
 @connect(
  state => ({
    ...duck.selector(state),
  }),
  dispatch => ({
    actions: bindActionCreators({
      ...duck
    }, dispatch)
  })
)
class ChunksContainer extends Component {

  constructor(props) {
    super(props);
    this.chunks = [];
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    const positions = this.chunks.map(chunk => chunk.getPosition());
    this.props.actions.setChunksPositions(positions);
  }

  render () {
    const {
      actions: {
        scrollUpdate,
        setActiveChunk
      },
      chunks
    } = this.props;
    return (
      <div
        className="dicto-player-ChunksContainer">
        <Scrollbars
          style={{width: '100%', height: '100%'}}
          onUpdate={scrollUpdate}>
          {
          chunks.map((thatChunk, index) => {
            const bindChunkRef = (chunk) => {
              this.chunks[index] = chunk;
            };
            return (<Chunk
              chunk={thatChunk}
              key={index}
              onClick={setActiveChunk}
              ref={bindChunkRef} />);
          })
        }
        </Scrollbars>
      </div>
    );
  }
}


export default ChunksContainer;
