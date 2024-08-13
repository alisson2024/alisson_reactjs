import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function Eventos() {

function clicou (){
    alert('Oie, o usuário acaba de Clicar!')
}
function movimentouMouse(){
    alert('Oie, ele movimentou o Mouse!')
}
function alterouValor(e){
    let novovalor=e.target.value; //string
    alert('Oie, ele alterou o valor do Input/Select! para: ' + novovalor)
}
function alteroucheck(e){
    let novovalor=e.target.checked; // boolean
    alert('Oie, ele alterou o valor do Input[checkbox/radio] para: ' + novovalor)
}

    return (
        <div className='pagina-eventos pagina'>
           <Cabecalho/>;    
            <section className='secao'>
                <h1> Entendendo eventos </h1>

                <p onClick={clicou} onMouseMove={movimentouMouse}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse consequatur assumenda necessitatibus, officiis dolore veniam atque aliquam dolor eaque rem laboriosam voluptate molestias reiciendis. Nesciunt, perferendis ipsum. Quaerat, maxime exercitationem.</p>

                <input onChange={alterouValor} type="text" placeholder='Digite Aqui' />


                <textarea onChange={alterouValor}></textarea>
                <select onChange={alterouValor}>
                    <option> Selecione </option>
                    <option> item A </option>
                    <option> Item B </option>
                </select>

                <div className='grupo'>
                    <input type="checkbox" onChange={alteroucheck}/> Opção 1
                    <input type="checkbox" /> Opção 2
                </div>

                <div className='grupo'>
                    <div>
                        <input type="radio" name='gpo' onChange={alteroucheck} /> Opção 1
                    </div>
                    <div>
                        <input type="radio" name='gpo' /> Opção 2
                    </div>
                </div>

                <button onClick={clicou}> Clique Aqui </button>
            </section>
        </div>
    )
};