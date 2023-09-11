import React from 'react';
import { Link } from 'react-router-dom';
import './Perfil.css';

function Perfil() {
  return (
    <div>
      <div className="capa">
        <div className="foto-perfil">
        </div>
      </div>
      <div className="nome-usuario">
        Bem-vindo,<br /><strong>Usuário!</strong>
      </div>
      <div className="texto-opcao">O que você deseja fazer?</div>
      <div className="botoes">
        <Link to="/cadastro-bike" className="botao">
          Cadastrar Bike
        </Link>
        <Link to="/vistoria" className="botao">
          Verificar Vistoria
        </Link>
        <Link to="/" className="botao">
          Sair
        </Link>
      </div>
    </div>
  );
}

export default Perfil;
