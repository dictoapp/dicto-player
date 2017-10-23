import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));


import Player from '../src/Player';

import transcription1 from './compositions/compo-1.json';
import transcription2 from './compositions/vectors-une-analyse.json';

const onExit = direction => console.info('on exit', direction);

storiesOf('Dicto player', module)
  .add('transcription 1', () => (
    <Player 
      composition={transcription1}
      settings={{
        displayMode: 'columns'
      }}
          onExit={onExit}
    />
  ))
  .add('transcription 2', () => (
    <Player 
      composition={transcription2}
      settings={{
        displayMode: 'columns'
      }}
          onExit={onExit}
    />
  ))
  .add('relative position', () => (
    <div style={{background: 'black'}}>
      <div
        style={{
          position: 'fixed',
          top: '10%',
          left: '10%',
          width: '80%',
          height: '80%',
        }}
      >
        <Player 
          composition={transcription1}
          settings={{
            displayMode: 'columns'
          }}
          onExit={onExit}
        />
      </div>
    </div>
  ))