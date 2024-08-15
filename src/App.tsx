import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import './App.css';

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <Link className="navbar-brand" to="/">Catálogo de Livros</Link> */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Catálogo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dados">Novo</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<LivroLista />} />
                <Route path="/dados" element={<LivroDados />} />
            </Routes>
        </Router>
    );
}

export default App;
