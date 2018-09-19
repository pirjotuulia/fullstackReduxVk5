import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducer from './components/reducer'
import './index.css';
import App from './App';

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(<App store={store} />,
        document.getElementById('root'))
}

render()
store.subscribe(render)
