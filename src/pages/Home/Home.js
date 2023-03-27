import React from 'react'

//components
import { Link } from 'react-router-dom'

//Hooks
import { useState, useEffect } from 'react'

const Home = () => {

    const [name, setName] = useState('')
    const [linkedinId, setLinkedinId] = useState('')
    const [githubId, setGithubId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name,
            linkedinId,
            githubId
        }

        console.log(user)
    }


    return (
        <div>
            <h1>QR code image generator</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} required /><br /><br />

                <label htmlFor="linkedin">Linkedin URL:</label>
                <input type="url" onChange={(e) => setLinkedinId(e.target.value)} value={linkedinId} required /><br /><br />

                <label htmlFor="github">Github URL:</label>
                <input type="url" onChange={(e) => setGithubId(e.target.value)} value={githubId} required /><br /><br />

                <input type="submit" value="Generate Image" />
            </form>
        </div>
    )
}

export default Home