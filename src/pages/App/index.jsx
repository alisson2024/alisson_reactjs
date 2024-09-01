import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Efeitos from '../efeitos';

export default function App() {
  return (
    <div className="pagina-app pagina">
      <Cabecalho titulo="Estudando ReactJS !!!" />;  

      <section className='secao'>
        <h1> Temas </h1>

        <ul>
          <li className='ir-a-contato'>
            <Link to='/contato'> Contato </Link>
          </li>
          <li>
            <Link to='/eventos'> Eventos </Link>
          </li>
          <li>
            <Link to='/varestado'>VarEstado</Link>
          </li>
          <li>
            <Link to='/comps'>Componentes</Link>
          </li>
          <li>
            <Link to='/renderizacaoCondicional'>RenderizacaoCondicional</Link>
          </li>
          <li>
            <Link to='/Efeitos'>Efeitos</Link>
          </li>
        </ul>
      </section>


    </div>
  );
}

