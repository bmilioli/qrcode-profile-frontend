import { api } from "../utils/config";

//Get Canvas of a user

const getCanvas = async (name) => {
    const response = await fetch(`${api}/users/generate?name=${name}`);

    // Verifica o status da resposta
    if (response.status !== 200) {
        throw new Error('Erro ao gerar o arquivo');
    }

    // Aguarda 5 segundos (opcional)
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Obtém o blob da resposta
    const blob = await response.blob();

    // Cria o URL do blob e o link de download
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `canvas-${name}.png`;

    // Adiciona o link à página e inicia o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


export default getCanvas;
