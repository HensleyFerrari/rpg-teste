import React from 'react'

import Modal from './Modal'

export default function ListItem(props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className='atributoNome'>{props.nome}</span>        
            <span className="badge bg-dark rounded-pill">{props.atributo}</span>
            <span className='ms-5'><Modal nome={props.nome} modal={props.modal} atributo={props.atributo} /></span>
        </li>
    )
}