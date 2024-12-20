'use client'

import { useRouter } from 'next/navigation'; 
import'./login.css';
import Layout from '../layout';  
export default function Login() {

        const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginSuccessful = true;

    if (loginSuccessful) {
      router.push('/boas-vindas'); 
    } else {
      alert('Credenciais inválidas, tente novamente.');
    }
  };

  return (
    <div>
      <Layout>
        <main>
          <div className="container">
            <div className="login">
              <form onSubmit={handleLogin}>
                <div className="box">
                  <div className="titulo">
                    <label>Faça Login</label>
                  </div>
                  <input className="email" type="email" placeholder="E-mail" required />
                  <input className="senha" type="password" placeholder="Senha" required />
                  <button className="btn" type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}