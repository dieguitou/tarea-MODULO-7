import viteLogo from "../assets/react.svg";
import reactLogo from "../assets/react.svg";
import {useState} from "react";

const Default = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>

            <h2>Diplomado en fullstack</h2>
            <h3>Mod 7: Curso de React</h3>
            <h3>Nombre: Diego Gorostiga Marin</h3>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
};

export default Default;
