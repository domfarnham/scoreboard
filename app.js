const title = React.createElement(
  'h1',
  { id: 'main-title' },
  'My First React Element'
)

const desc = React.createElement(
  'p',
  null,
  'This is a React element bro!'
)

const header = React.createElement(
  'header',
  null,
  title,
  desc
)

ReactDOM.render(
  header,
  document.getElementById('root')
)
