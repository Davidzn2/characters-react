import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Layout/Header'
import Card from 'react-bootstrap/Card';

function Character() {
    const params = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
            .then((res) => setCharacter(res.data))
            .then((res) => console.log(res.data))
    })
    return (
        <>
            <Header />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                        <h2>Sobre el Personaje</h2>
                        <ul>
                            <li>Status: {character.status}</li>
                            <li>Species: {character.species}</li>
                            <li>Type: {character.type}</li>
                            <li>Gender: {character.gender}</li>

                        </ul>

                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}

export default Character