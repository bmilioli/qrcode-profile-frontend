import React from "react";

//components
import { useNavigate } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import register from "../../services/registerService";

const Home = () => {
  const [name, setName] = useState("");
  const [linkedinId, setLinkedinId] = useState("");
  const [githubId, setGithubId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    const user = {
      name,
      linkedinId,
      githubId,
    };

    console.log(user);
    register(user);

    navigate(`/download/${name}`);

  };


  return (
    <div>
      <h1>QR code image generator</h1>

      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <br />
        <br />

        <label htmlFor="linkedin">Linkedin URL:</label>
        <input
          type="url"
          onChange={(e) => setLinkedinId(e.target.value)}
          value={linkedinId}
          required
        />
        <br />
        <br />

        <label htmlFor="github">Github URL:</label>
        <input
          type="url"
          onChange={(e) => setGithubId(e.target.value)}
          value={githubId}
          required
        />
        <br />
        <br />

        <input type="submit" value="Generate Image" />
      </form>
    </div>
  );
};

export default Home;
