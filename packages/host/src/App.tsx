import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppCart from "cart/src/App.tsx";
import { useBearStore } from 'share-state/es';
import {Header} from "header";
function App() {
    const {bears, increasePopulation} = useBearStore();
    return (
        <>
            <Header/>
            <AppCart/>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={increasePopulation}>
                    count is {bears}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
