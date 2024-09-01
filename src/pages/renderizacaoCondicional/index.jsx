import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho'
import CartaoFilme from '../../components/cartaoFilme';
import { toBeChecked } from '@testing-library/jest-dom/matchers';


export default function RenderizacaoCondiconal() {
    const [exibirBiscoitoSorte, setExibirBiscoitoSorte] = useState(false);



    const [nomeFilme, setNomeFilme] = useState('');
    const [classificacaoFilme, setClassificacaoFilme] = useState('');
    const [urlFilme, setUrlFilme] = useState('');
    const [estreiaFilme, setEstreiaFilme] = useState('');
    const [destaqueFilme, setDestaqueFilme] = useState(false);
    const [listaFilmes, setListaFilmes] = useState([]);

    function abrirOUfecharBiscoitoSorte() {
        setExibirBiscoitoSorte(!exibirBiscoitoSorte)
        {/* Essa exclamação ! fecha a mensagem */ }
    }



    function adicionarFilme() {
        if (nomeFilme == '' || classificacaoFilme == '' || urlFilme == '') {
            alert('preencha todos os campos!!!');
            return;
        }

        let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: urlFilme,
            estreia: estreiaFilme,
            destaque: destaqueFilme
        }

        setListaFilmes([...listaFilmes, novoFilme]);
        setNomeFilme('');
        setClassificacaoFilme('');
        setUrlFilme('');
    }







    return (
        <div className='pagina-renderizacao-condicional pagina'>
            <Cabecalho titulo="ReactJS | Renderizacao Condicional" />

            <div className='secao'>
                <h1> Biscoito da Sorte </h1>
                <button onClick={abrirOUfecharBiscoitoSorte}>
                    {exibirBiscoitoSorte == true ? 'Fechar' : 'Abrir'} </button>
                {/* Quando clico em abrir o Abrir muda para Fechar e quando clica em Fecha ele muda para o abrir */}

                {/* essas chave são uma condicao se a pessoa clicar em abrir ele vira true e ENTÃO mostra a mensagem. O && e o  ENTÃO. */}
                {exibirBiscoitoSorte == true &&
                    <p className='msg-biscoito'>
                        "Se você não vivenciar o fracasso, não saberá
                        reconhecer quando o sucesso realmente chegar."
                        <br />
                        <br />
                        <br />
                        “A vitória é para aqueles que persistem, não para aqueles que desistem.”
                    </p>
                }
            </div>


            <div className='secao filmes'>
                <h1> Catalogo de filmes </h1>
                <div className='entradas'>
                    <input type="text" placeholder='Nome do filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)} />
                    <input type="text" placeholder='Classificação' value={classificacaoFilme} onChange={e => setClassificacaoFilme(e.target.value)} />
                    <input type="text" placeholder='URL da capa' value={urlFilme} onChange={e => setUrlFilme(e.target.value)} />
                    <input type="text" placeholder='Estreia do Filme' value={estreiaFilme} onChange={ e => setEstreiaFilme (e.target.value)}/>
                    <div>
                        <input type='checkbox' value={destaqueFilme} onChange={e => setDestaqueFilme(e.target.checked)} />
                        <label> Destaque </label>
                    </div>
                    <button onClick={adicionarFilme}> Adicionar </button>
                </div>

                <div className='lista'>
                    {listaFilmes.map(item =>
                        <CartaoFilme item={item} />
                    )}
                </div>
            </div>

        </div>
    )
}