import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));


import Player from '../src/Player';

import transcription1 from './compositions/compo-1.json';

storiesOf('Dicto player', module)
  .add('transcription 1', () => (
    <Player 
      composition={transcription1}
      settings={{
        displayMode: 'columns'
      }}
    />
  ))