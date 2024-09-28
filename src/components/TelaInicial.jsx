import React from 'react';
import './style.css'
import Logo from './img/Logo2.png'


function App() {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img src={Logo} className="img" alt="Logo" />
        </div>
        <ul className="iconsp">
          <li className="Lista"><a href="/" className="texto">Serviços</a></li>
          <li className="Lista"><a href="/" className="texto">Home</a></li>
          <li className="Lista"><a href="/" className="texto">Sobre Nós</a></li>
        </ul>
        <ul className="iconsp2">
          <li className="Lista1"><a href="/" id="cadastro">Cadastra-se</a></li>
          <li className="Lista1"><a href="/" id="entrar">Entrar</a></li>
        </ul>
      </nav>

      <main className="conteudo">
        <div className="textos">
          <h1 className="textomain">Objetivos definidos,<br />estratégias precisas.</h1>
          <h1 className="subtexto">SEU SUCESSO COM UM PERSONAL AO LADO!</h1>
          <p className="sloganmain">Chegou a hora de focar em você. Personalize seu treinos e<br /> conquiste seus resultados.</p>
        </div>

        <div className="buttons">
          <button id="btn-cadastro">Cadastre-se</button>
          <button id="btn-entrar">Entrar</button>
        </div>
      </main>

      <article className="article">
        <div className="artigos"></div>
        <div className="artigos"></div>
        <div className="artigos"></div>
      </article>

      <footer>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, enim excepturi explicabo quis, harum, sequi fugiat nisi doloribus dolorem dolores qui mollitia vitae nesciunt sapiente obcaecati odio tempora debitis expedita.</h1>
      </footer>
    </div>
  );
}

export default App;
