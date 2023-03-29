import React from "react";


//components
import { Link } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getCanvas from "../../services/canvasService";



const Canvas = () => {
    let name = window.location.pathname.split("/")[2];
    useEffect(() => {
        getCanvas(name);
    }, []);

    return (
        <div>
            <h1>QR code image generator</h1>
            <p>With the download don't start automaticaly clik the botton</p>
            <button onClick={handleRefresh}>Click Here</button>
        </div>
    );
}

export default Canvas;
