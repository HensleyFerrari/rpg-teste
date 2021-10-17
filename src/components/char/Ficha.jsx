import React from 'react'
import './Ficha.css'

import ListItem from './ListItem'

export default function Ficha(props) {
    return (
        <div>
            <h2 className='display-6'>{props.nome}</h2>
            <span>Vida: </span>
            <h4>Atributos</h4>
            <div className='container d-flex'>
                <ul className="list-group">
                    <ListItem nome='Close Combat' modal='closeCombat' atributo={props.closeCombat} />
                    <ListItem nome='Stamina' modal='stamina' atributo={props.stamina} />
                    <ListItem nome='Observation' modal='observation' atributo={props.observation} />
                    <ListItem nome='Survival' modal='survival' atributo={props.survival} />
                    <ListItem nome='Comtech' modal='comtech' atributo={props.comtech} />
                    <ListItem nome='Medical Aid' modal='medicalAid'atributo={props.medicalAid} />
                    <ListItem nome='Command' modal='command' atributo={props.command} />
                    <ListItem nome='Mobility' modal='mobility' atributo={props.mobility} />
                    <ListItem nome='Ranged Combat' modal='rangedComabt' atributo={props.rangedCombat} />
                </ul>
            </div>
            <hr />
        </div>
    )
}