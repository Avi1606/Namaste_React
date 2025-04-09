import Header from './Components/Header/Header.jsx';
import Body from './Components/Body/Body.jsx';
import './App.css'
import Body_swiggy from "./Components/Body(Swiggy)/Body_swiggy.jsx";

function App() {
  return (
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Body_swiggy/>
        </div>
      </div>
  )
}

export default App