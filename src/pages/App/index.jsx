import './index.scss';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">

      <header className='cabecalho'>
        <h1 className='titulo'>ESTUDANDO REACTJS </h1>
      </header>

      <section className='secao'>
        <h1>Estudando ReactJS</h1>

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
        </ul>
      </section>


    </div>
  );
}

