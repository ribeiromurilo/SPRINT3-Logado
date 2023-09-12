import React from 'react';
import "./Vistoria.css";
import Footer from '../Footer';

const Vistoria = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Vistoria</h1>
        <h2>Olá, <strong>Usuário!</strong></h2>
        <p>Ainda não concluímos o resultado de sua vistoria. <br />
          Caso não for aprovado, você será permitido à mais 2 tentativas,
          após o limite será necessário contatar a Porto.
          Por favor, aguarde por breves atualizações.</p>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <>
      <Vistoria />
      <Footer />
    </>
  );
}

export default App;