import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Header