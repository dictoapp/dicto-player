import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));


import Player from '../src/Player';

import transcription1 from './compositions/compo-1.json';
import transcription2 from './compositions/vectors-une-analyse.json';

storiesOf('Dicto player', module)
  .add('transcription 1', () => (
    <Player 
      composition={transcription1}
      settings={{
        displayMode: 'columns'
      }}
    />
  ))
  .add('transcription 2', () => (
    <Player 
      composition={transcription2}
      settings={{
        displayMode: 'columns'
      }}
    />
  ))