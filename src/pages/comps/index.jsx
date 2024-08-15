import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Contador from '../../components/contador';

export default function Comps(){



    return(
        <div className='pagina-comps pagina'>
            <Cabecalho titulo=" ReactJS | Componentes" />

            <div className='secao'>
                <h1> Contador </h1>
                <Contador titulo="Passos" limite={15}/>
                <Contador titulo="Erros" inicio={0}/>
            </div>
        </div>
    )
}