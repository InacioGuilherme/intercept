import React from "react";
import { Link } from "react-router-dom";
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
    // Função para redirecionar para o WhatsApp
    const sendToWhatsApp = () => {
      const phone = "553398475969"; // Número do WhatsApp
      const message = encodeURIComponent(
        "Olá, vi que vocês oferecem um teste gratuito do painel de monitoramento. Gostaria de ativar o meu acesso!")
      window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, "_blank");
    };
  
    return (
      <div className="dashboard-container">
        {/* Cabeçalho atualizado */}
        <p>software</p>
        <p>software</p>
        <p>software</p>
        <header>
          <div className="header-content">
            <button className="menu-btn">☰</button>
            <div className="welcome-text">
              <h1>Bem-vindo!</h1>
              <p>Gerencie seu painel de monitoramento</p>
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