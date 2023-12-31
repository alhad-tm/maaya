import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (

    <div className="App">
     <Header/>
     <Main/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
