import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header';
import {Content} from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Containner } from './components/Containner/Containner';

function App() {
  return (
    <div className="App">
       {/* <Header title="page title"/>
       <Content title="lorem ipsun" desc="react has been designed fron the start for gradual adoption" />
       <Footer copyright="all rights reserved"/> */}
       <Containner/>
       <Containner/>
    </div>
  );
}

export default App;