import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Função para verificar login
  const handleLogin = () => {
    if (password === "18742") {
      navigate("/dashboard"); // Redireciona para o painel
    } else {
      alert("Senha incorreta! Tente novamente.");
    }
  };

  return (
    <div className="login">
    <div className="login-container">
      <div className="login-box">
        <h1>Bem-vindo ao aplicativo<br />Intercept Espionagem V2</h1>
        <p>Digite seu usuário e senha para acessar</p>
        
        <input
          type="text"
          placeholder="Digite seu usuário..."
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Digite sua senha..."
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="login-button" onClick={handleLogin}>
          ENTRAR NO PAINEL DE MONITORAMENTO
        </button>

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
    </div>
  );
}

export default Login;
