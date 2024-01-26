/* import * as React from "react"
import * as ReactDOM from 'react-dom'
import { App } from '../App'
import { hydrateRoot } from 'react-dom/client';

window.addEventListener('load', () => {
    hydrateRoot(document.getElementById('react_root'), <App />)
})
 */


import * as React from "react"
import { createRoot } from 'react-dom/client';
import { App } from '../App'

window.addEventListener('load', () => {
    const root = createRoot(document.getElementById('react_root'));
    root.render(<App />);
})