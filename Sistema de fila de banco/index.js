function FilaBanco() {
    // Filas para clientes normais e preferenciais
    const filaNormal = [];
    const filaPreferencial = [];
    let senhaNormal = 0;
    let senhaPreferencial = 0;

    // Adiciona um cliente na fila
    function adicionarCliente(preferencial = false) {
        if (preferencial) {
            senhaPreferencial++;
            filaPreferencial.push(`P${senhaPreferencial}`); // Adiciona cliente preferencial
            console.log(`Cliente preferencial adicionado com senha P${senhaPreferencial}`);
        } else {
            senhaNormal++;
            filaNormal.push(`N${senhaNormal}`); // Adiciona cliente normal
            console.log(`Cliente normal adicionado com senha N${senhaNormal}`);
        }
    }

    // Chama o próximo cliente da fila
    function chamarProximo() {
        if (filaPreferencial.length > 0) {
            const cliente = filaPreferencial.shift(); // Remove o primeiro da fila preferencial
            console.log(`Chamando cliente preferencial: ${cliente}`);
        } else if (filaNormal.length > 0) {
            const cliente = filaNormal.shift(); // Remove o primeiro da fila normal
            console.log(`Chamando cliente normal: ${cliente}`);
        } else {
            console.log("Não há clientes na fila.");
        }
    }

    // Exibe as filas
    function exibirFilas() {
        console.log("Fila Preferencial:", filaPreferencial);
        console.log("Fila Normal:", filaNormal);
    }

    // Retorna as funções que podem ser usadas externamente
    return { adicionarCliente, chamarProximo, exibirFilas };
}

// Exemplo de uso
const banco = FilaBanco(); // Cria uma nova fila de banco
banco.adicionarCliente(true);  // Adiciona cliente preferencial
banco.adicionarCliente(false); // Adiciona cliente normal
banco.adicionarCliente(true);  // Adiciona outro cliente preferencial

banco.exibirFilas();          // Exibe as filas
banco.chamarProximo();        // Chama o próximo cliente
banco.exibirFilas();          // Exibe as filas novamente
banco.chamarProximo();        // Chama o próximo cliente
banco.exibirFilas();          // Exibe as filas novamente
