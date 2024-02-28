import { useState } from 'react'
import './style.css'


export default function Desafio() {
  const [numero, setNumero] = useState(0);

  const Mensagem = () => {
    setTimeout(() => {
      alert("Atividade entregue com sucesso!!");
    }, 2000);
  };
  return (
    <>
      <h2>Fala Vini, click no botão</h2>
      <h2>{alert}</h2>
      <button onClick={Mensagem}>Aqui Vini</button>
    </>
  );
}

