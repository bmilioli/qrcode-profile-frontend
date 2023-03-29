import React from "react";

//Hooks
import { useEffect } from "react";
import getCanvas from "../../services/canvasService";

const Canvas = () => {
  let name = window.location.pathname.split("/")[2];
  useEffect(() => {
    getCanvas(name);
  }, []);

  return (
    <div>
      <h1>QR code image generator</h1>
      <p>
        If the download doesn't start automatically, click the button. It may
        take a 1 minute to start after clicking
      </p>

      <button onClick={() => window.location.reload()}>Download</button>
    </div>
  );
};

export default Canvas;
