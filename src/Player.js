/**
 * dicto-player Application Endpoint
 * ======================================
 *
 * Rendering the application.
 * @module dicto-player
 */
import React from 'react';
import {Provider} from 'react-redux';
import PlayerContainer from './containers/PlayerContainer/PlayerContainer';

import configureStore from './redux/configureStore';

const store = configureStore({});

const Player = ({
  composition = {},
  settings = {},
  onExit,
}) => {
  return (
    <Provider store={store}>
      <PlayerContainer
        composition={composition}
        settings={settings}
        onExit={onExit} />
    </Provider>
  );
};


export default Player;
