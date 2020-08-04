import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://gravatar.com/avatar/5cf14c374f02e69ffa4dd287fa39fc66?s=400&d=robohash&r=x" alt="avatar" />
        <div>
          <strong>Diego Machado</strong>
          <span>Desenvolvimento</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /><br />
        Sed tristique, libero at pharetra tincidunt, augue ipsum semper enim, ac
        condimentum elit ipsum non quam. Curabitur et purus vel tortor tristique ultrices.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
