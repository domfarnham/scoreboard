const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className='stats'>Players: { props.totalPlayers }</span>
    </header>
  )
}

const Counter = (props) => {
  return (
    <div className='counter'>
      <button className='counter-action decrement'> - </button>
      <span className='counter-score'>{ props.score }</span>
      <button className='counter-action increment'> + </button>
    </div>
  )
}

const Player = (props) => {
  return (
    <div className='player'>
      <span className='player-name'>
        {props.name}
      </span>
      <Counter score={props.score} />
    </div>
  )
}

const App = () => {
  return (
    <div className='scoreboard'>
      <Header title='Scoreboard' totalPlayers={1} />

      {/* Players list */}
      <Player name='Dominic Farnham' score={10} />
      <Player name='Danielle Farnham' score={35} />
      <Player name='Ralph Farnham' score={50} />
      <Player name='Oscar Farnham' score={55} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
