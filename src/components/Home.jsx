import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Layout/Header'
import { Link } from 'react-router-dom'

function Home() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((res) => setCharacters(res.data.results))
    })
    return (
        <>
            <Header />
            <h2>Hola</h2>
            {/* <li>
                <Link to="/character/cr7">Cristiano Ronaldo</Link>
            </li>
            <li>
                <Link to="/character/messi">Lionel Messi</Link>
            </li> */}
            <ul>
                {
                    characters.map((character) => {
                        return (
                            <li> 
                                <Link to={`/character/${character.id}`}>{character.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default Home