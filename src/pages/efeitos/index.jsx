import Cabecalho from '../../components/cabecalho'
import { tratarNumero } from '../../utils/numeros';
import './index.scss'
import { useState, useEffect } from 'react'
{/*useEffect e para com efeitos*/}

export default function Efeitos() {
const [mencao,setMencao] = useState ('');
const [sitMencao, setSitMencao] = useState('-');

const [nota1,setNota1] = useState('0');
const [nota2,setNota2] = useState('0');
const [nota3,setNota3] = useState('0');
const [media,setMedia] = useState(0);
const [sitAluno,setSitAluno] = useState('');

{/*useEffect: quando variavel de Estado e alterada e  chamado a funcao, nesse caso não precisa de onclick || esse codigo abaixo reresenta isso. */}

useEffect(() => {
    avaliacaoMencao();
}, [mencao]);


useEffect(() =>{
    avaliarNotas();
}, [nota1,nota2,nota3])

useEffect(() => {
    avaliacaoSituacao();
}, [media])

function avaliarNotas(){
    let m = (tratarNumero(nota1) + tratarNumero(nota2) + tratarNumero(nota3)) /3;
    setMedia(m);
}
function avaliacaoSituacao(){
    let s ='';
    if (media >= 5) {
        s='Aprovado';
    }
    else {
        s='Recuperacao';
    }
    setSitAluno(s);
}




function avaliacaoMencao(){
    if(mencao == 'P'){
        setSitMencao('Plenamente satisfatório');
    }
    else if(mencao == 'S'){
        setSitMencao('Satisfatório');
    }
    else if(mencao == 'NS'){
        setSitMencao('Não Satisfatório')
    }
    else{
        setSitMencao('Inválido')
    }
}
    return(
        <div className='pagina-efeitos pagina'>
            <Cabecalho titulo="ReactJS | Efeitos"/>

            <div className='secao'>
                <h1>Situacao Aluno</h1>

                <div className='sit-aluno'>
                    <div>{sitMencao}</div>

                    <div>
                        <label > Menção: </label>
                        <input type="text" value={mencao} onChange={e => setMencao(e.target.value)} />
                    </div>
                </div>
            </div>


            <div className='secao'>
                <h1> Notas Aluno </h1>

                <div className='notas-aluno'>
                    <div className='entradas'>
                        <input type="text" value={nota1} onChange={e => setNota1(e.target.value)} />
                        <input type="text" value={nota2} onChange={e => setNota2(e.target.value)} />
                        <input type="text" value={nota3} onChange={e => setNota3(e.target.value)} />
                    </div>
                    <div className='media'>
                        <label > Média: </label>
                        <div> {media.toFixed(1)} </div>
                    </div>
                    <div className='situacao'>
                        <label > Sit: </label>
                        <div> {sitAluno} </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 