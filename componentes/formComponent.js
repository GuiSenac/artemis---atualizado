export default function Form({
    nome,
    setNome,
    sobrenome,
    setSobrenome,
    email,
    setEmail,
    telefone,
    setTelefone,
    dataNascimento,
    setDataNascimento,
    password,
    setPassword,
    confirmarPassword,
    setConfirmarPassword,
    erro,
    handleSubmit
}) {
    return (
        <form onSubmit={handleSubmit}>
            {/* Primeira linha: Nome e Sobrenome */}
            <div className="row">
    <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
    <input type="text" placeholder="Digite seu sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
  </div>
  <div className="row">
    <input className="email-field" type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </div>
  <div className="row">
    <input type="tel" placeholder="Digite seu telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
    <input type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
  </div>
  <div className="row">
    <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
    <input type="password" placeholder="Confirme sua senha" value={confirmarPassword} onChange={(e) => setConfirmarPassword(e.target.value)} />
  </div>

            {/* Exibição de erro */}
            {erro && <p className="error">{erro}</p>}

            {/* Botão de submit */}
            <div className="button-wrapper">
            <button type="submit">Cadastrar-se</button>
            </div>
        </form>
    );
}
