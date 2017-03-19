/* eslint react/prefer-stateless-function : 0 */
/**
 * This module exports a stateful component connected to the redux logic of the app
 * @module dicto-player/containers/player-container
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Scrollbars} from 'react-custom-scrollbars';
import {SpringSystem, MathUtil} from 'rebound';

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
    this.springSystem = new SpringSystem();
    this.handleSpringUpdate = this.handleSpringUpdate.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
    this.spring = this.springSystem.createSpring();
    this.spring.addListener({onSpringUpdate: this.handleSpringUpdate});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.autoScrollMode) {
      const {
        activeChunkIndex,
        activeChunkCompletion,
        actions: {
          toggleAutoScroll
        }
      } = nextProps;
      const chunk = document.getElementById('chunk-' + activeChunkIndex);
      if (chunk) {
        const scrollTop = chunk.offsetTop;
        const height = chunk.offsetHeight;
        const target = scrollTop + height * activeChunkCompletion;
        const centered = target - this.container.offsetHeight / 2;
        this.scrollTop(centered);
      }
      toggleAutoScroll();
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    const positions = this.chunks.map(chunk => chunk.getPosition());
    this.props.actions.setChunksPositions(positions);
  }

  componentWillUnmount() {
    this.springSystem.deregisterSpring(this.spring);
    this.springSystem.removeAllListeners();
    this.springSystem = undefined;
    this.spring.destroy();
    this.spring = undefined;
  }

  scrollTop(top) {
    const {scrollbars} = this;
    // scrollbars.scrollTop(top);
    const scrollTop = scrollbars.getScrollTop();
    const scrollHeight = scrollbars.getScrollHeight();
    // const val = MathUtil.mapValueInRange(top, 0, scrollHeight, scrollHeight * 0.2, scrollHeight * 0.8);
    const val = MathUtil.mapValueInRange(top, 0, scrollHeight, 0, scrollHeight);
    this.spring.setCurrentValue(scrollTop).setAtRest();
    this.spring.setEndValue(val);
  }

  handleSpringUpdate(spring) {
    const val = spring.getCurrentValue();
    this.scrollbars.scrollTop(val);
  }

  render () {
    const {
      actions: {
        scrollUpdate,
        setActiveChunk
      },
      chunks
    } = this.props;

    const bindScrollbarRef = (scrollbar) => {
      this.scrollbars = scrollbar;
    };
    const bindContainerRef = (container) => {
      this.container = container;
    };

    return (
      <div
        className="dicto-player-ChunksContainer"
        ref={bindContainerRef}>
        <Scrollbars
          ref={bindScrollbarRef}
          style={{width: '100%', height: '100%'}}
          onUpdate={scrollUpdate}>
          {
          chunks.map((thatChunk, index) => {
            const bindChunkRef = (chunk) => {
              this.chunks[index] = chunk;
            };
            return (<Chunk
              chunk={thatChunk}
              id={'chunk-' + index}
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
