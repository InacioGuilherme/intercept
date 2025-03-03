import React from "react";
import "./App.css";

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Bem vindo ao aplicativo<br />intercept espionagem v2</h1>
        <p>Digite seu usuário e senha para acessar</p>
        <input type="text" placeholder="Digite seu usuário..." className="login-input" />
        <input type="password" placeholder="Digite sua senha..." className="login-input" />
        <button className="login-button">ENTRAR NO PAINEL DE MONITORAMENTO</button>
        <div className="support">
          <span>SUPORTE TÉCNICO</span>
          <div className="support-icons">
            <button className="icon-button">📞</button>
            <button className="icon-button">✉️</button>
            <button className="icon-button">@</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
