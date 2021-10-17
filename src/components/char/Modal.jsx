import React, { useState } from "react";
import './Modal.css'

export default function Modal(props) {

    const [rows, setRows] = useState([])
    const [modifier, setModifier] = useState(0)

    const atributo = props.atributo

    const renderDice = () => {

        const rolar = () => {
            let linhas = []
            for (let i = -2 - modifier; i <= atributo; i++) {
                linhas.push(Math.floor(Math.random() * 6) + 1)
            }
            setRows(linhas)
        }

        return (
            <div className='mt-3'>
                <button className="btn btn-dark" onClick={rolar}>Rolar Dados</button>
                <div>
                    {rows.map(numero => {
                        return (
                            <div className='dado mt-3'>
                                <span className={numero >= 5 ? 'green' : 'red'}>{numero}</span>
                                <span className='ms-2'>{numero >=5 ? 'sucesso' : 'falha'}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }


    return (
        <div>
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#Modal${props.modal}`}>
                Rolar Dados
            </button>
            <div className="modal fade" id={`Modal${props.modal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.nome}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label >Modificador: </label>
                            <input className='ms-2' type="number" value={modifier} min='-2' max='3' onChange={e => setModifier(e.target.value)} />
                            {renderDice()}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}