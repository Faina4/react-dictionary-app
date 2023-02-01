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
  <main>
      <Dictionary defaultKeyword="sunset"/>
   </main>        
         </div>

         <footer >
      <small>  Coded by FaIna and open-sourced on <a href="https://github.com/Faina4/react-dictionary-app" rel="noreferrer " target="_blank" >GitHub </a> 
      and hosted on <a href="https://sweet-dragon-0e1c62.netlify.app" rel="noreferrer " target="_blank" >Netlify </a> </small>
      </footer>
        </div>
 
    </div>
  );
}


