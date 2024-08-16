import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho';
import Contador from '../../components/contador';
import ItemMeta from '../../components/itemMeta';

export default function Comps(){
    const [novaMeta, setNovaMeta] = useState('');
    const [listaMetas, setListaMetas] = useState([]);
    const [editando, setEditando] = useState(-1);



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
        </div>
    )
}