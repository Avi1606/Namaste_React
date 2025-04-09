import Header from './Components/Header/Header.jsx';
import Body from './Components/Body/Body.jsx';

import './App.css'

function App() {
  return (
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Body />
        </div>
      </div>
  )
}

export default App