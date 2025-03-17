import React from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";

// Importação das imagens
import whatsappImg from "../assets/whatsapp.jpg";
import instagramImg from "../assets/instagram.jpg";
import audioImg from "../assets/audio.jpg";
import photoImg from "../assets/photos.jpg";
import callsImg from "../assets/calls.jpg";
import contactsImg from "../assets/contacts.png";
import locationImg from "../assets/localizacao.jpg";
import facebookImg from "../assets/facebook.png";
import messengerImg from "../assets/messenger.jpg";
import gmailImg from "../assets/gmail.jpg";

function Dashboard() {
  const location = useLocation();
  const phone = location.state?.phone || "553398475969"; // Pega o número de telefone passado para a página, ou um número default
  const formattedPhone = `+55 (${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;

  // Função para redirecionar para o WhatsApp
  const sendToWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá, vi que vocês oferecem o painel de monitoramento. Gostaria de ativar o meu acesso!"
    );
    window.open(`https://api.whatsapp.com/send?phone=${553398475969}&text=${message}`, "_blank");
  };

  return (
    <div className="dashboard-container">
      {/* Cabeçalho atualizado */}
      <header>
        <div className="header-content">
          <button className="menu-btn">☰</button>
          <div className="welcome-text">
            <h1>Bem-vindo!</h1>
            <p>Monitorando número {formattedPhone}</p> {/* Exibição do número formatado */}
          </div>
        </div>
        <div className="user-icon">U</div>
      </header>

      {/* Grid de opções */}
      <div className="dashboard-grid">
        <div className="tile" onClick={sendToWhatsApp}>
          <span>WhatsApp</span>
          <img src={whatsappImg} alt="WhatsApp" />
        </div>

        <div className="tile" onClick={sendToWhatsApp}>
          <span>Instagram</span>
          <img src={instagramImg} alt="Instagram" />
        </div>

        <div className="tile" onClick={sendToWhatsApp}>
          <span>Escuta Ambiente</span>
          <img src={audioImg} alt="Escuta Ambiente" />
        </div>

        <div className="tile" onClick={sendToWhatsApp}>
          <span>Captura de Fotos</span>
          <img src={photoImg} alt="Captura de Fotos" />
        </div>

        <div className="tile" onClick={sendToWhatsApp}>
          <span>Chamadas</span>
          <img src={callsImg} alt="Chamadas" />
        </div>

        <div className="tile" onClick={sendToWhatsApp}>
          <span>Contatos</span>
          <img src={contactsImg} alt="Contatos" />
        </div>

        <div className="tile" onClick={sendToWhatsApp}>
          <span>Localização</span>
          <img src={locationImg} alt="Localização" />
        </div>

        <div className="tile" onClick={sendToWhatsApp}>
          <span>Facebook</span>
          <img src={facebookImg} alt="Facebook" />
        </div>

        <div className="tile" onClick={sendToWhatsApp}>
          <span>Messenger</span>
          <img src={messengerImg} alt="Messenger" />
        </div>

        <div className="tile" onClick={sendToWhatsApp}>
          <span>Gmail</span>
          <img src={gmailImg} alt="Gmail" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
