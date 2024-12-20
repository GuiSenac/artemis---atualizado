import Header from '../app/Header/Header';
import '../app/styles/Home.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header /> {/* Cabeçalho adicionado */}
        {children}
      </body>
    </html>
  );
}
