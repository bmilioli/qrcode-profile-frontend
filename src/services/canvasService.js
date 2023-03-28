import { api } from "../utils/config";

//Get Canvas of a user

const getCanvas = async (name) => {
    const response = await fetch(`${api}/users/generate?name=${name}`,
    );
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `canvas-${name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


export default getCanvas;
