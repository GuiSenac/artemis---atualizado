"use client";

import Link from "next/link";
import styles from './styles/Home.module.css';
import featuredStyles from './styles/FeaturedOffers.module.css'; 
import './styles/globals.css';
import modalStyles from './styles/Modal.module.css';
import { useState, useEffect, useRef } from 'react'; 
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; import "slick-carousel/slick/slick-theme.css";
import Modal from '../app/Modal';

export default function Home() {
  useEffect(() => {
    console.log("Componente montado");
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  const toggleModal = () => {
    setModalVisible(prev => !prev);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const slider = [
    { name: 'Slider Nike', image: '/imagem/nike-5126389_1280.jpg' },
    { name: 'Slider Adidas', image: '/imagem/test2.png' },
    { name: 'Slider Vans', image: '/imagem/hammock-2239788_1280.jpg' },
    { name: 'Slider Puma', image: '/imagem/amirhossein-hasani-pAmqSVguAEc-unsplash.jpg' },
  ];

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentIndex(newIndex);
  };

  const getPreviousIndex = () => (currentIndex === 0 ? slider.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === slider.length - 1 ? 0 : currentIndex + 1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
  };


  const scrollContainer = useRef(null);  // Correção: useRef adicionado

  useEffect(() => {
    const container = scrollContainer.current;
    
    let isDown = false;
    let startX;
    let scrollLeft;

    if (container) {
      container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });

      container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
      });

      container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
      });

      container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 3; // Multiplicar pelo fator de rolagem desejado
        container.scrollLeft = scrollLeft - walk;
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('mousedown', () => {});
        container.removeEventListener('mouseleave', () => {});
        container.removeEventListener('mouseup', () => {});
        container.removeEventListener('mousemove', () => {});
      }
    };
  }, []);  // Correção: Fechamento correto do useEffect e dependência vazia

  const offers = [
    { name: 'Tênis Nike Air Force 1 07 Feminino', price: 'R$ 702,99', installments: 'Até 10x de R$ 70,29', image: '/imagem/tenis nike 2.png' },
    { name: 'Tênis Nike Air Force 1 07 LV8 Masculino', price: 'R$ 683,99', installments: 'Até 10x de R$ 68,39', image: '/imagem/tenis nike3.png' },
    { name: 'Tenis Vans', price: 'R$ 899,99', installments: 'Até 10x de R$ 89,99', image: '/imagem/istockphoto-471565617-612x612.jpg' },
    { name: 'Tenis Puma', price: 'R$ 899,99', installments: 'Até 10x de R$ 89,99', image: '/imagem/istockphoto-471565617-612x612.jpg' },
    { name: 'Tenis Nike', price: 'R$ 899,99', installments: 'Até 10x de R$ 89,99', image: '/imagem/istockphoto-471565617-612x612.jpg' },
    { name: 'Tenis Adidas', price: 'R$ 899,99', installments: 'Até 10x de R$ 89,99', image: '/imagem/istockphoto-471565617-612x612.jpg' },
    { name: 'Tenis Vans', price: 'R$ 899,99', installments: 'Até 10x de R$ 89,99', image: '/imagem/istockphoto-471565617-612x612.jpg' },
    { name: 'Tenis Puma', price: 'R$ 899,99', installments: 'Até 10x de R$ 89,99', image: '/imagem/istockphoto-471565617-612x612.jpg' },
    { name: 'Tenis Nike', price: 'R$ 899,99', installments: 'Até 10x de R$ 89,99', image: '/imagem/istockphoto-471565617-612x612.jpg' },
    { name: 'Tenis Adidas', price: 'R$ 899,99', installments: 'Até 10x de R$ 89,99', image: '/imagem/istockphoto-471565617-612x612.jpg' },
    { name: 'Tenis Vans', price: 'R$ 899,99', installments: 'Até 10x de R$ 89,99', image: '/imagem/istockphoto-471565617-612x612.jpg' },
    { name: 'Tenis Puma', price: 'R$ 899,99', installments: 'Até 10x de R$ 89,99', image: '/imagem/istockphoto-471565617-612x612.jpg' },
  ];
  const features = [
    { 
      title: 'Seleção Exclusiva', 
      image: '/imagem/idea_1016562 (1).png', 
      description: 'Nossa loja oferece uma seleção exclusiva de tênis, com designs modernos e inovadores, perfeitos para todas as ocasiões.' 
    },
    { 
      title: 'Conforto e Estilo', 
      image: '/imagem/target_3234841.png', 
      description: 'Priorizamos o conforto sem abrir mão do estilo. Nossos tênis são feitos com materiais de alta qualidade, garantindo uma experiência agradável ao usá-los.' 
    },
    { 
      title: 'Atendimento Personalizado', 
      image: '/imagem/reputation_4102689.png', 
      description: 'Nossa equipe está sempre pronta para oferecer um atendimento personalizado, ajudando você a encontrar o par de tênis ideal que se encaixa no seu estilo e necessidades.' 
    },
    { 
      title: 'Compromisso com a Sustentabilidade', 
      image: '/imagem/help_7914633.png', 
      description: 'Estamos comprometidos em oferecer produtos que respeitam o meio ambiente, com opções de tênis feitos de materiais sustentáveis.' 
    },
  ];


   return (
    <div className={styles.App}>
   

      {modalVisible && (
  <div className={modalStyles.modalOverlay} onClick={toggleModal}>
    <div className={modalStyles.modalContent} onClick={e => e.stopPropagation()}>
      <h3>Cadastro</h3>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="Email" /> 
        <input type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
      </form>
      <button onClick={toggleModal}>Fechar</button>
    </div>
  </div>
)}



<main className={styles.main2}>
  <div className={styles.leftSliderContainer}>
    <Image
      className={styles.leftSlideImage}
      src={slider[getPreviousIndex()].image}
      alt="Imagem Anterior"
      width={250}
      height={150}
    />
  </div>
  <div className={styles.mainSliderContainer}>
    <Slider {...settings}>
      {slider.map((slide, index) => (
        <div key={index} className={styles.mainSlide}>
          <Image
            className={styles.mainSlideImage}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            width={500}
            height={300}
          />
        </div>
      ))}
    </Slider>
  </div>
  <div className={styles.rightSliderContainer}>
    <Image
      className={styles.rightSlideImage}
      src={slider[getNextIndex()].image}
      alt="Imagem Seguinte"
      width={250}
      height={150}
    />
  </div>
</main>










        <section className={featuredStyles.featuredOffers}>
  <h2>Mais Vendidos</h2>
  <div className={featuredStyles.offersContainer} ref={scrollContainer}>

{/* Card da Super Oferta Especial */}
<div className={`${featuredStyles.offer} ${featuredStyles.specialOffer}`}>
  <h3>Os Queridinhos da Semana!</h3>
  <div className={featuredStyles.priceContainer}>
    <p className={featuredStyles.price}>
      Descubra os modelos que estão bombando! Conforto, estilo e qualidade se encontram nos nossos tênis mais procurados. Aproveite as promoções e garanta já o seu par antes que acabe!
    </p>
    {/* Usando Link com legacyBehavior */}
    <Link href="/produtos" legacyBehavior>
      <a className={featuredStyles.cardButton}>Compre Aqui</a>
    </Link>
  </div>
</div>







    {/* Cards dos produtos */}
    {offers.map((offer, index) => (
      <div key={index} className={featuredStyles.offer}>
        <div className={featuredStyles.imageContainer}>
          <Image 
            src={offer.image} 
            alt={offer.name} 
            width={200} 
            height={100} 
            className={featuredStyles.image} 
          />
        </div>
        <h3>{offer.name}</h3>
        <div className={featuredStyles.priceContainer}>
          <p className={featuredStyles.price}>{offer.price}</p>
          <p className={featuredStyles.installments}>{offer.installments}</p>
        </div>
      </div>
    ))}
  </div>
</section>



        <section className={styles.featuresSection}>
  <div className={styles.textContent}>
    <div className={featuredStyles.featureTitle}>
      <h1>Nossas Características</h1>
    </div>

    <h3>Por que Escolher Nossa Loja</h3>
    <p>Estamos começando uma nova jornada no mundo dos calçados e temos muito a oferecer aos nossos clientes. Aqui estão algumas razões pelas quais você deve escolher nossa loja para suas compras de tênis.</p>
    
    <div className={styles.featuresList}>
      {[
        { 
          title: 'Seleção Exclusiva', 
          image: '/imagem/idea_1016562 (1).png', 
          description: 'Nossa loja oferece uma seleção exclusiva de tênis, com designs modernos e inovadores, perfeitos para todas as ocasiões.' 
        },
        { 
          title: 'Conforto e Estilo', 
          image: '/imagem/target_3234841.png', 
          description: 'Trabalhamos apenas com as melhores marcas que garantem conforto e durabilidade, proporcionando a melhor experiência para os nossos cliente' 
        },
        { 
          title: 'Atendimento Personalizado', 
          image: '/imagem/reputation_4102689.png', 
          description: 'Nossa equipe de atendimento é treinada para ajudar você a encontrar o par de tênis perfeito, considerando seu estilo e conforto.' 
        },
        { 
          title: 'Compromisso com a Sustentabilidade', 
          image: '/imagem/help_7914633.png', 
          description: 'Estamos sempre atualizados com as últimas tendências, garantindo que você encontre os modelos mais modernos e estilosos.' 
        },
      ].map((feature, idx) => (
        <div className={styles.featureItem} key={idx}>
          <div className={styles.icon}>
            <Image src={feature.image} alt={feature.title} width={40} height={40} />
          </div>
          <div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className={styles.imageContainerdd}>
    <Image 
      src="/imagem/diego-jaramillo-W4swGaKFHVQ-unsplash.jpg" 
      alt="Business Man" 
      width={600} 
      height={400} 
      className={styles.businessImage}
    />
  </div>
</section>

<footer className={styles.footer}>
  <div className={styles.footerSection}>
    <h3>Artemis</h3>
    <p>A Artemis oferece uma variedade completa de calçados de alta qualidade, atendendo às necessidades de nossos clientes no Brasil. Estamos comprometidos em proporcionar conforto, estilo e satisfação a cada compra.</p>
  </div>
  <div className={styles.footerSection}>
    <h3>Informações de Contato</h3>
    <p>Endereço: 1762 Rua da Moda, São Paulo, Brasil</p>
    <p>E-mail: info@artemis.com.br</p>
    <p>Segunda a Sexta: 08h - 17h50</p>
  </div>
  <div className={styles.footerSection}>
    <h3>Links Rápidos</h3>
    <div className={styles.quickLinks}>
      <Link href="#">Home</Link>
      <Link href="#">Sobre Nós</Link>
      <Link href="#">Serviços</Link>
      <Link href="#">Blog</Link>
    </div>
  </div>
  <div className={styles.footerSection}>
    <h3>Newsletter</h3>
    <p>Seja o primeiro a saber sobre nossas últimas atualizações e ofertas especiais.</p>
    <input type="email" placeholder="Seu Endereço de E-mail" className={styles.newsletterInput} />
    <button type="button" className={styles.newsletterButton}>Inscreva-se</button>
  </div>
  <div className={styles.footerSection}>
    <h3>Marcas</h3>
    <div className={styles.brands}>
      <Image src="/imagem/png-transparent-logo-nike-logos-and-brands-icon.png" alt="Nike" width={40} height={40} />
      <Image src="/imagem/Captura de tela 2024-10-19 220509.png" alt="Adidas" width={40} height={40} />
      <Image src="/imagem/58b0f4e625a115458425a4ebd54ebf94.png" alt="Vans" width={40} height={40} />
      <Image src="/imagem/Captura de tela 2024-10-19 220543.png" alt="Puma" width={40} height={40} />
    </div>
  </div>
  <div className={styles.footerSection}>
    <h3>Baixe o App</h3>
    <a href="#"><img src="/imagem/image-Photoroom-Photoroom (3)-Photoroom.png" alt="App Store" className={styles.appLink} /></a>
    <a href="#"><img src="/imagem/image-removebg-preview (2).png" alt="Google Play" className={styles.appLink} /></a>
  </div>
  <div className={styles.footerSection}>
    <h3>Siga a Artemis</h3>
   <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
  <img src="/imagem/insta.png" alt="Instagram" className={styles.socialIcon} />
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  <img src="/imagem/tet.png" alt="Twitter" className={styles.socialIcon} />
</a>
<a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
  <img src="/imagem/tiktok.png" alt="TikTok" className={styles.socialIcon} />
</a>
<a href="https://www.facebook.com/marketplace/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
  <img src="/imagem/face.png" alt="facebook" className={styles.socialIcon} />
</a>
  </div>
  <div className={styles.footerSection}>
    <h3>Formas de Pagamento</h3>
    <div className={styles.paymentMethods}>
      <img src="/imagem/png-transparent-visa-logo-credit-card-debit-card-mastercard-logo-visa-go-blue-text-trademark.png" alt="Visa" />
      <img src="/imagem/cartao-elo.png" alt="Elo" />
      <img src="/imagem/png-transparent-visa-mastercard-logo-symbol-decal-sticker-text-orange-area-circle.png" alt="Mastercard" />
      <img src="/imagem/boleto-logo.png" alt="Boleto" />
    </div>
  </div>
  <div className={styles.footerBottom}>
    <p>&copy; 2024 Artemis. Todos os direitos reservados | Termos de Uso | Política de Privacidade </p>
  </div>
</footer>
</div>

      );
}


