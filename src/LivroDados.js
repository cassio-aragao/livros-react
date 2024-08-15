import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora'; 

// Instanciar os controladores
const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
    // Definir os estados
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(controleEditora.getEditoras()[0].codEditora);

    // Hook de navegação
    const navigate = useNavigate();

    // Definir as opções da combo box
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    // Método para tratar a mudança da combo box
    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    };

    // Método para incluir o livro
    const incluir = (evento) => {
        evento.preventDefault();
        const livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora
        };
        controleLivro.incluir(livro);
        navigate('/');
    };

    // Retorno do JSX do componente
    return (
        <main>
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div className="form-group">
                    <label>Título</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Resumo</label>
                    <textarea 
                        className="form-control"
                        value={resumo} 
                        onChange={(e) => setResumo(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Editora</label>
                    <select 
                        className="form-control"
                        value={codEditora}
                        onChange={tratarCombo}
                    >
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Autores (1 por linha)</label>
                    <textarea 
                        className="form-control"
                        value={autores} 
                        onChange={(e) => setAutores(e.target.value)} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
            </form>
        </main>
    );
};

export default LivroDados;
