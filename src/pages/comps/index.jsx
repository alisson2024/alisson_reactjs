import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho';
import Contador from '../../components/contador';
import ItemMeta from '../../components/itemMeta';
import ItemPlano from '../../components/itemPlano';

export default function Comps(){
    const [novaMeta, setNovaMeta] = useState('');
    const [listaMetas, setListaMetas] = useState([]);
    const [editando, setEditando] = useState(-1);

    const [plano, setPlano] = useState('');
    const [situacao, setSituacao] = useState('');
    const [cor, setCor] = useState('');
    const [listaPlanos, setListaPlanos] = useState([]);



    function adicionarMeta() {

        if (novaMeta != '') {

            if (editando == -1) {
                setListaMetas([...listaMetas, novaMeta]);
                setNovaMeta('');
            }
            else {
                listaMetas[editando] = novaMeta;
                setListaMetas([...listaMetas])
                setNovaMeta('');
                setEditando(-1);
            }
        }


    }

    function teclaApertada(e) {
        if (e.key == 'Enter') {
            adicionarMeta();
        }
    }

    function removerMeta(pos) {
        listaMetas.splice(pos, 1);
        setListaMetas([...listaMetas]);

    }

    function alterarMeta(pos) {
        setNovaMeta(listaMetas[pos]);
        setEditando(pos);
    }

    function adicionarPlano() {
        let novoPlano = {
            titulo: plano,
            tempo: situacao,
            tema: cor
        }

        setListaPlanos([...listaPlanos, novoPlano])

        setPlano('')
        setSituacao('')
        setCor('')

    }

    
    return(
        <div className='pagina-comps pagina'>
            <Cabecalho titulo=" ReactJS | Componentes" />

            <div className='secao'>
                <h1> Contador </h1>
                <Contador titulo="Passos" limite={15}/>
                <Contador titulo="Erros" inicio={0}/>
            </div>

            
            <div className='secao metas'>
                <h1> Transformando os itens de Meta em Componentes </h1>

                <div>
                    <input type="text" placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)} />
                    <button onClick={adicionarMeta}> Adicionar </button>
                </div>

                <ul>
                    {listaMetas.map((item, pos) =>
                       <ItemMeta  
                       item={item}
                       alterarMeta={alterarMeta}
                       removerMeta={removerMeta}
                       pos={pos}
                       />
                    )}
                </ul>
            </div>

            
            <div className='secao planos'>
                <h1> Meus planos atuais</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Meu plano aqui' value={plano} onChange={e => setPlano(e.target.value)} />
                    <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={e => setSituacao(e.target.value)} />
                    <input type="text" placeholder='Cor de identificação' value={cor} onChange={e => setCor(e.target.value)} />
                    <button onClick={adicionarPlano}> Adicionar Planos </button>
                </div>

                <div className='lista'>
                    {listaPlanos.map((item, pos) =>
                       <ItemPlano item={item}/>
                    )}

                </div>
            </div>

        </div>
    )
}