// Deve estar na primeira linha do arquivo
'use client';

import Form from "../../../componentes/formComponent";
import { useCadastro } from "../../../hooks/useCadastro";
import styles from '../styles/cadastro.css';

export default function Cadastro() {
  const {
    nome, setNome,
    sobrenome, setSobrenome,
    email, setEmail,
    telefone, setTelefone,
    dataNascimento, setDataNascimento,
    password, setPassword,
    confirmarPassword, setConfirmarPassword,
    erro, handleSubmit
  } = useCadastro();

  return (
    <div className={styles['container-wrapper']}> {/* Novo contêiner para centralizar */}
      <div className={styles.container}>
        <h3>Cadastrar-se</h3>
        {erro && <div className={styles.error}>{erro}</div>}
        <Form
          nome={nome}
          setNome={setNome}
          sobrenome={sobrenome}
          setSobrenome={setSobrenome}
          email={email}
          setEmail={setEmail}
          telefone={telefone}
          setTelefone={setTelefone}
          dataNascimento={dataNascimento}
          setDataNascimento={setDataNascimento}
          password={password}
          setPassword={setPassword}
          confirmarPassword={confirmarPassword}
          setConfirmarPassword={setConfirmarPassword}
          erro={erro}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
