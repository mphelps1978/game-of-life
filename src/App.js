import React from 'react';
import { useSpring, animated } from 'react-spring'

import GameBoard from './components/GameBoard'

import './styles/main.scss'

function App() {

  const props = useSpring ({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style = {props} className = "container">
    <h1>Cellular Autonama Simulation</h1>
    <h3>Based on John Conway's <a
      href = 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'
      target = "_blank"
      rel = "noopener noreferrer"
      >
      Game of Life</a> Simulation</h3>
    <br/>
    <GameBoard/>
    </animated.div>
  );
}

export default App;
