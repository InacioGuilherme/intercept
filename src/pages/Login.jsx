import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function NewLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Função para validar se o username é um número de telefone válido
  const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^[0-9]{10,11}$/; // Valida 10 ou 11 dígitos
    return regex.test(phoneNumber);
  };

  const handleLogin = () => {
    if (!isValidPhoneNumber(username)) {
      return;
    }

    if (password === "18742") { // Exemplo de senha
      // Passa o número de telefone como estado para o Dashboard
      navigate("/dashboard", { state: { phone: username } });
    } else {
      alert("Credenciais incorretas, tente novamente!");
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginBox">
        <h1 className="loginHeader">Intercept - Acesso ao Sistema</h1>
        <p className="loginSubHeader">Entre com suas credenciais para acessar</p>

        <input
          type="text"
          placeholder="Usuário"
          className="loginInput"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Senha"
          className="loginInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="loginButton" onClick={handleLogin}>
          Acessar
        </button>

        <div className="supportSection">
          <span className="supportText">Precisa de ajuda?</span>
          <div className="supportIcons">
            <button className="iconButton">📞</button>
            <button className="iconButton">✉️</button>
            <button className="iconButton">💬</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLogin;
