export async function cadastrarUsuario(dadosDoUsuario) {
    try {
        const response = await fetch("http://localhost:8080/users/cadastrar", { // Correção do endpoint
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoUsuario), // Converte os dados do usuário em JSON
        });

        if (response.ok) { // Verifica se a resposta é 2xx
            const data = await response.json(); // Espera a resposta em JSON
            console.log("Usuário cadastrado com sucesso!", data);
            return data; // Retorna o JSON da resposta
        } else {
            const errorData = await response.text(); // Captura a resposta de erro
            console.error(`Falha na requisição. Status: ${response.status}`, errorData);
            return null; // Retorna null ou pode lançar um erro
        }
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error); // Captura erros de rede
        return null; // Retorna null ou pode lançar um erro
    }
}
