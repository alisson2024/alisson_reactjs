import './index.scss';
import { useState } from 'react';
import { tratarNumero } from '../../utils/numeros.js'
import { calcularTotalingresso } from '../../services/ingresso.js'
import Cabecalho from '../../components/cabecalho/index.jsx';

export default function VarEstado() {


    const [Titulos2, settitulos2] = useState('Oie');
    const [Titulos3, settitulos3] = useState('');
    const [marcouOpcaoS4, setmarcouOpcaoS4] = useState(true);
    const [tituloS5, settituloS5] = useState('Oie');
    const [descricaoS5, setdescricaoS5] = useState('Oie');
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [res, setres] = useState(0);

    const [qtdIng, setQtdIng] = useState(0);
    const [meioIng, setMeioIng] = useState(0);
    const [cupom, setCupom] = useState('');
    const [totalIng, setTotalIng] = useState(0);





    function somarcalculadora() {
        let soma = tratarNumero(num1) + tratarNumero(num2)
        setres(soma);
    }
    function subtraircalculadora() {
        let subtrair = tratarNumero(num1) - tratarNumero(num2)
        setres(subtrair);
    }
    function multiplicarcalculadora() {
        let multiplicar = tratarNumero(num1) * tratarNumero(num2)
        setres(multiplicar);
    }
    function dividircalculadora() {
        let dividir = tratarNumero(num1) / tratarNumero(num2)
        setres(dividir);
    }
    function calcularIngresso() {
        let tota = calcularTotalingresso(qtdIng, meioIng, cupom)

        setTotalIng(tota);
    }




    return (
        <div className='pagina-varestado pagina'>
            <Cabecalho titulo="ReactJS | VarEstado" />;




            <div className='secao ingresso'>
                <h1> Venda de Ingressos</h1>
                <div className='entrda'>
                    <div>
                        <label > Quantidade: </label>
                        <input type="text" value={qtdIng} onChange={e => setQtdIng(e.target.value)} />
                    </div>
                    <div>
                        <label> Meia Entrada:</label>
                        <input type="checkbox" checked={meioIng} onChange={e => setMeioIng(e.target.checked)} />
                    </div>
                    <div>
                        <label>Cupom</label>
                        <input type="text" value={cupom} onChange={e => setCupom(e.target.value)} />
                    </div>
                    <div>
                        <label> &nbsp;</label>
                        <button onClick={calcularIngresso}>Calcular</button>
                    </div>
                    <hr />
                    <div>
                        O total é R$ {totalIng}
                    </div>

                </div>

            </div>

            <div className='secao calculadora'>
                <h1>Calculadora</h1>
                <div className='entrada'>
                    <input type="text" value={num1} onChange={e => setnum1(e.target.value)} />
                    <input type="text" value={num2} onChange={e => setnum2(e.target.value)} />
                    <div> = </div>
                    <div className='res'> {res} </div>
                </div>
                <div className='butao'>
                    <button onClick={somarcalculadora}> + </button>
                    <button onClick={subtraircalculadora}> - </button>
                    <button onClick={multiplicarcalculadora}> X </button>
                    <button onClick={dividircalculadora}> ÷ </button>
                </div>
            </div>


            <div className='secao'>
                <h1>{Titulos2}</h1>
                <input type="text" value={Titulos2} onChange={e => settitulos2(e.target.value)} />
            </div>

            <div className='secao'>
                <h1>{Titulos3}</h1>
                <select onChange={e => settitulos3(e.target.value)}>
                    <option> Selecione</option>
                    <option> JavaScript</option>
                    <option> HTML/CSS</option>
                    <option> ReactJS </option>
                </select>
            </div>

            <div className='secao'>
                <h1> Programar e lindezinha ? {marcouOpcaoS4 ? 'sim' : 'não'}</h1>
                <input type="checkbox" checked={marcouOpcaoS4} onChange={e => setmarcouOpcaoS4(e.target.checked)} /> programar e lindezinha ?
            </div>

            <div className='secao'>
                <h1>{tituloS5} </h1>

                <input type="text" value={descricaoS5} onChange={e => setdescricaoS5(e.target.value)} />

                <button onClick={() => settituloS5(descricaoS5)}> Alterar </button>
            </div>
        </div>
    )
}
