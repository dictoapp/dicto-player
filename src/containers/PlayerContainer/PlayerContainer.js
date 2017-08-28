/* eslint react/prefer-stateless-function : 0 */
/**
 * This module exports a stateful component connected to the redux logic of the app
 * @module dicto-player/containers/player-container
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as duck from '../../redux/duck';


import ColumnsLayout from '../../components/ColumnsLayout/ColumnsLayout';

/**
 * Redux-decorated component class rendering the player feature to the app
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
class PlayerContainer extends Component {

  constructor(props) {
    super(props);
    this.renderAppropriatePlayer = (displayMode, theseProps) => {
      switch (displayMode) {
        case 'columns':
        default:
          return <ColumnsLayout {...theseProps} />;
      }
    };
  }

  componentDidMount() {
    this.props.actions.setComposition(this.props.composition);
    this.props.actions.setSettings(this.props.settings);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.composition !== nextProps.composition) {
      this.props.actions.setComposition(nextProps.composition);
    }

    if (this.props.settings !== nextProps.settings) {
      this.props.actions.setSettings(nextProps.settings);
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  render () {
    const {
      displayMode
    } = this.props;
    return displayMode ? this.renderAppropriatePlayer(displayMode, this.props) : null;
  }
}


export default PlayerContainer;
