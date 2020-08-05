import React from 'react';

import './styles.css';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/34141267?s=460&u=3d13ddaaf7d1aff4711edde9c860a80fc67c284f&v=4" alt="Ramon" />
        <div>
          <strong>Ramon Mesquita</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de programação.
            <br /><br />
            Apaixonado por ensinar e poder transformar a vida das pessoas através da programação assim como o próprio conseguiu.
          </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
          </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
