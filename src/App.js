import React from 'react';
import './App.css';

function App() {
  return (
  <div className="container">
    <div className="content">
      <p>
        Coloque suas vagas de <strong>trabalho</strong> a disposicão de pessoas altamente qualificadas lhe contatar  
      </p>
      <form>
        <label htmlFor="email" >E-mail</label>
        <input 
        type="email" 
        id="email" 
        placeholder="coloque seu melhor e-mail" 
        />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </div>
  </div>
  );
}

export default App;
