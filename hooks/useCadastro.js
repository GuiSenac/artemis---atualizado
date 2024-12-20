'use client'

import { useState } from "react";
import { cadastrarUsuario } from "../service/cadastroService";

export function useCadastro() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');
    const [erro, setErro] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validação de senha
        if (password !== confirmarPassword) {
            setErro("As senhas não coincidem.");
            return;
        }

        try {
            await cadastrarUsuario({ 
                nome, 
                sobrenome, 
                email, 
                telefone, 
                dataNascimento, 
                password 
            });
            window.location.href = '/boas-vindas';
        } catch (error) {
            setErro("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
        }
    }
   
    return {
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
        setErro,
        handleSubmit
    }
}
