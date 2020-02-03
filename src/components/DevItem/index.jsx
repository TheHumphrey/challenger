import React from 'react';

import './style.css'

import Detalhe from '../Detalhe/index'

function DevItem({ dev }) {
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.login}</strong>
                    <strong onclick={dev.mostrar = true}>Ver Detalhes</strong>
                    {dev.mostrar && <Detalhe dev={dev} />}
                </div>
            </header>
        </li>
    )
}

export default DevItem;