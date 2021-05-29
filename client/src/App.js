import './App.css';
import { Router } from '@reach/router';


//components
import Header from "./Components/Header"
import PersonInfo from './Components/PersonInfo';
import UList from './Components/UList';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
          <UList path="/"/>
          <PersonInfo path="/user"/>
      </Router>
    </div>
  );
}

export default App;
