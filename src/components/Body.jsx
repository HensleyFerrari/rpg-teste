import React, { useState } from "react";
import './Body.css'

import Ficha from './char/Ficha'

export default function Body() {

    const [texto, setTexto] = useState(localStorage.nome)
    const [closeCombat, setCloseCombat] = useState(localStorage.closeCombat)
    const [stamina, setStamina] =  useState(localStorage.stamina)
    const [observation, setObservation] =  useState(localStorage.observation)
    const [survival, setSurvival] =  useState(localStorage.survival)
    const [comtech, setComtech] =  useState(localStorage.comtech)
    const [medicalAid, setMedicalAid] =  useState(localStorage.medicalAid)
    const [command, setCommand] =  useState(localStorage.command)
    const [mobility, setMobility] =  useState(localStorage.mobility)
    const [rangedCombat, setRangedCombat] =  useState(localStorage.rangedCombat)

    const save = () =>{
        localStorage.setItem("nome", texto)
        localStorage.setItem("closeCombat", closeCombat)
        localStorage.setItem("observation", observation)
        localStorage.setItem("stamina", stamina)
        localStorage.setItem("survival", survival)
        localStorage.setItem("comtech", comtech)
        localStorage.setItem("medicalAid", medicalAid)
        localStorage.setItem("command", command)
        localStorage.setItem("mobility", mobility)
        localStorage.setItem("rangedCombat", rangedCombat)
    }

    return (
        <div className='container'>
            <Ficha nome={texto} closeCombat={closeCombat} stamina={stamina} observation={observation} survival={survival} comtech={comtech} medicalAid={medicalAid}
                command={command} mobility={mobility} rangedCombat={rangedCombat} />
            <div className="input">
                <h3>
                    Editar Pesonagem
                </h3>
                <label>Nome: </label>
                <input type="text" value={texto} onChange={e => setTexto(e.target.value)} />
            </div>
            <hr />
            <div className="atributo">
                <label>Close Combat: </label>
                <input type="number" value={closeCombat} onChange={e => setCloseCombat(e.target.value)} />
            </div>
            <div className="atributo">
                <label>Stamina: </label>
                <input type="number" value={stamina} onChange={e => setStamina(e.target.value)} />
            </div>
            <div className="atributo">
                <label>Observation: </label>
                <input type="number" value={observation} onChange={e => setObservation(e.target.value)} />
            </div>
            <div className="atributo">
                <label>Survival: </label>
                <input type="number" value={survival} onChange={e => setSurvival(e.target.value)} />
            </div>
            <div className="atributo">
                <label>Comtech: </label>
                <input type="number" value={comtech} onChange={e => setComtech(e.target.value)} />
            </div>
            <div className="atributo">
                <label>Medical Aid: </label>
                <input type="number" value={medicalAid} onChange={e => setMedicalAid(e.target.value)} />
            </div>
            <div className="atributo">
                <label>Command: </label>
                <input type="number" value={command} onChange={e => setCommand(e.target.value)} />
            </div>
            <div className="atributo">
                <label>Mobility: </label>
                <input type="number" value={mobility} onChange={e => setMobility(e.target.value)} />
            </div>
            <div className="atributo">
                <label>Ranged Combat: </label>
                <input type="number" value={rangedCombat} onChange={e => setRangedCombat(e.target.value)} />
            </div>
            <button className='btn btn-success' onClick={save}>Salvar Personagem</button>
        </div>
    )
}