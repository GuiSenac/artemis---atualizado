"use client";

import Image from 'next/image';
import styles from './App.css';
import ToggleButton from './tooglebutton';

export default function Pulma1() {
  return (
    <div className='container'>
      <div className='productWrapper'>
        <div className='imageSection'>
          <Image
            src="/imagem/puma1.png" // Substitua pelo caminho da imagem do produto
            alt="Produto"
            width={400}
            height={400}
            className='productImage'
          />
        </div>
        <div className='detailsSection'>
          <h1 className='productTitle'>Puma Carina Lux</h1>
          <p className='productPrice'>R$ 488,06</p>
          <p className='productDescription'>
            Tênis confortável e durável para atividades esportivas e uso casual. Disponível em várias cores e tamanhos.
          </p>

         <ToggleButton/>


          <button className='buyButton'>Comprar Agora</button>
        </div>
      </div>
    </div>
  );
}