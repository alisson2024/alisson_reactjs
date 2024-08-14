import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

export default function Contato() {
  return (
    <div className="pagina-contato pagina">
      <Cabecalho titulo="ReactJS | Contato"/>
      <header className='cabecalho'>
        <h1 className='titulo'>ESTUDANDO REACTJS Página Contato</h1>
        <ul>
          <li className='voltar'>
            <Link to='/app'> voltar </Link>
          </li>
        </ul>
      </header> </div>
  );
}
