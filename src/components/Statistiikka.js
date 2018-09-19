import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Reducer from '../components/reducer'

const Statistiikka = (props) => {

    if (props.palaute === 0) {
        return (
            <div>
                <h2>statistiikka</h2>
                <div>ei yhtään palautetta annettu</div>
            </div>
        )
    }

    let state = props.store.getState()
    let average = (state.good - state.bad) / props.palaute
    return (
        <div>
            <h2>statistiikka</h2>
            <table>
                <tbody>
                    <tr>
                        <td>hyvä</td>
                        <td>{props.store.getState().good}</td>
                    </tr>
                    <tr>
                        <td>neutraali</td>
                        <td>{props.store.getState().ok}</td>
                    </tr>
                    <tr>
                        <td>huono</td>
                        <td>{props.store.getState().bad}</td>
                    </tr>
                    <tr>
                        <td>keskiarvo</td>
                        <td>{Number.parseFloat(average).toFixed(1)}</td>
                    </tr>
                    <tr>
                        <td>positiivisia</td>
                        <td>{Number.parseFloat((props.store.getState().good / props.palaute) * 100).toFixed(1)}%</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={props.onClick('ZERO')}>nollaa tilasto</button>
        </div >
    )
}

export default Statistiikka