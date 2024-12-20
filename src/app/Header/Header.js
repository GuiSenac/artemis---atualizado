"use client";

import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
<header className={styles['App-header']}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Image src="/imagem/Logo.png" alt="Logo" className={styles['App-logo']} width={80} height={80} layout="fixed" />
        </div>
  
        <nav className={styles.navMenu}>
          <ul className={styles.navLinks}>
            <li className={styles.menuItem}>
              <Link href="/">Novidades</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/produtos">Tênis</Link>
              <div className={styles.dropdown}>
                <div className={styles.dropdownColumn}>
                  <h4>Uni</h4>
                  <ul>
                  <Link href="/ListaAdidas"><li>Adidas</li></Link>
                  <Link href="/ListaNike"><li>Nike</li></Link>
                  <Link href="/ListaVans"><li>Vans</li></Link>
                    <Link href="/ListaPuma"><li>Pulma</li></Link>
                  </ul>
                  
                </div>
                
              </div>
            </li>
            <li className={styles.menuItem}><Link href="/produtos">Feminino</Link>
            <div className={styles.dropdown}>
                <div className={styles.dropdownColumn}>
                  <ul>
                    <li>Adidas</li>
                    <li>Nike</li>
                    <li>Vans</li>
                    <li>Puma</li>
                  </ul>
                </div>
                
              </div>
            </li>

            <li className={styles.menuItem}><Link href="/produtos">Masculino</Link>
            
            <div className={styles.dropdown}>
                <div className={styles.dropdownColumn}>
                  <ul>
                    <li>Adidas</li>
                    <li>Nike</li>
                    <li>Vans</li>
                    <li>Puma</li>
                  </ul>
                </div>
                
              </div></li>
            <li className={styles.menuItem}><Link href="/produtos">Criança</Link>
            <div className={styles.dropdown}>
                <div className={styles.dropdownColumn}>
                  <ul>
                    <li>Adidas</li>
                    <li>Nike</li>
                    <li>Vans</li>
                    <li>Puma</li>
                  </ul>
                </div>
                
              </div></li>
            <li className={styles.menuItem}><Link href="/produtos">Outlet</Link>
            <div className={styles.dropdown}>
                <div className={styles.dropdownColumn}>
                  <ul>
                    <li>Adidas</li>
                    <li>Nike</li>
                    <li>Vans</li>
                    <li>Puma</li>
                  </ul>
                </div>
                
              </div></li>
            <li className={styles.menuItem}><Link href="/produtos">Marcas</Link>
            <div className={styles.dropdown}>
                <div className={styles.dropdownColumn}>
                  <ul>
                  <a href="/produtos"><Image src="/imagem/png-transparent-logo-nike-logos-and-brands-icon.png" alt="Nike" width={40} height={40}  /></a>
                  <a href="/produtos"><Image src="/imagem/Captura de tela 2024-10-19 220509.png" alt="Adidas" width={40} height={40}  /></a>
                  <a href="/produtos"><Image src="/imagem/58b0f4e625a115458425a4ebd54ebf94.png" alt="Vans" width={40} height={40}  /></a>
                  <a href="/produtos"><Image src="/imagem/Captura de tela 2024-10-19 220543.png" alt="Puma" width={40} height={40}  /></a>

                  </ul>
                </div>
                
              </div>
            </li>

            
          </ul>
        </nav>
        <div className={styles.searchContainer}>
        <input type="text" className={styles.searchInput} placeholder="Buscar" />
        <button className={styles.searchButton}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10A7 7 0 1 0 10 17A7 7 0 0 0 17 10Z" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <div className={styles.icons}>
        <Link href="/login" legacyBehavior>
          <button className={styles.icon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5A5.5 5.5 0 1 1 6 7.5A5.5 5.5 0 0 1 12 2.5ZM12 13.5C9.51472 13.5 7.5 15.5147 7.5 18H16.5C16.5 15.5147 14.4853 13.5 12 13.5Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </Link>

        <Link href="/carrinho" legacyBehavior>
          <button className={styles.icon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H4L6.68 13.39A2 2 0 0 0 8.68 15H18.72A2 2 0 0 0 20.68 13.39L23 6H6M6 6L7.5 15H19.5L21 6H6Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </Link>

        <Link href="/cadastro" legacyBehavior>
          <button className={styles.icon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </Link>
        <Link href="/" legacyBehavior>
          <button className={styles.icon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </Link>
      </div>
      </div>
    </header>
  

  );
}
