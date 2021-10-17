import React, { useState } from 'react'
import './Ficha.css'

import ListItem from './ListItem'

export default function Ficha(props) {

    const [vidaAtual, setvidaAtual] = useState(localStorage.vidaAtual)

    const lifeChange = (value) =>{
        localStorage.setItem("vidaAtual", value)
        setvidaAtual(value)
    }

    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className='display-6'>{props.nome}</h2>
                    <h4>Vida: {vidaAtual}/{props.vidaTotal}</h4>
                    <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${Math.floor((vidaAtual * 100)/props.vidaTotal)}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <input type="number" value={vidaAtual} min='0' max={props.vidaTotal} onChange={e => lifeChange(e.target.value)} />
                </div>
                <div className="col-12 col-md-6">
                    <h4>Atributos</h4>
                    <ul className="list-group">
                        <ListItem nome='Close Combat' modal='closeCombat' atributo={props.closeCombat} />
                        <ListItem nome='Stamina' modal='stamina' atributo={props.stamina} />
                        <ListItem nome='Observation' modal='observation' atributo={props.observation} />
                        <ListItem nome='Survival' modal='survival' atributo={props.survival} />
                        <ListItem nome='Comtech' modal='comtech' atributo={props.comtech} />
                        <ListItem nome='Medical Aid' modal='medicalAid' atributo={props.medicalAid} />
                        <ListItem nome='Command' modal='command' atributo={props.command} />
                        <ListItem nome='Mobility' modal='mobility' atributo={props.mobility} />
                        <ListItem nome='Ranged Combat' modal='rangedComabt' atributo={props.rangedCombat} />
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}