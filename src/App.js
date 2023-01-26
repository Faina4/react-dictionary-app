import SheCodesLogo from './SheCodesLogo.png';
import './App.css';
import Dictionary from'./Dictionary';

 export default function App() {
  return (
          <div className="App">
    <div className="container">
<div className="dictionary-app">
      <header className="App-header">   
      < img src=  {SheCodesLogo} className="App-logo img-fluid" alt="logo" /> 
      </header>
   <Dictionary />

    </div>

         <footer >
      <small>  Coded by</small>
      </footer>
        </div>
 
    </div>
  );
}


