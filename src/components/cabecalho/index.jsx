import './index.scss';


export default function Cabecalho(props) {




  return (
    <header className='cabecalho'>
      <h1 className='titulo'>
        {props.titulo}
      </h1>
    </header>
  )
}
