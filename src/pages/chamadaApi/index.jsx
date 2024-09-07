import axios from 'axios';
import Cabecalho from '../../components/cabecalho';
import './index.scss';
import { useState } from 'react';
import CartaoOmdb from '../../components/cartaoOmdb';


export default  function ChamadaApi() {
    const [cep, setCEP] = useState('');
    const [infoLogradouro, setInfoLogradouro] = useState('');
    const [filmeBusca,setFilmeBusca] = useState('');
    const [listarFilmes, setListarFilmes] = useState([]);

async function BuscarCep(){
   let url = 'http://viacep.com.br/ws/' + cep +'/json/';

   let resp = await axios.get(url);
   let dados =  resp.data;

  let msg =  dados.logradouro + ', ' + dados.bairro + '. ' + dados.localidade + '/' + dados.uf;
  setInfoLogradouro(msg);
}



  async  function buscarFilmes(){
        let url = 'http://www.omdbapi.com?apikey=d43a5114&s=' + filmeBusca;

        let resp = await axios.get(url);
        let dados= resp.data;

        if(dados.Response == 'False') {
            alert('Nenhum filme encontrado!');
            return;
        }

        let filmesEncontrados = dados.Search;
        setListarFilmes(filmesEncontrados);
    }


    return (
        <div className='pagina-chamada-api pagina'>
            <Cabecalho titulo='Reactjs | Chamado APIS'/>

            <div className='secao omdb'>
                <h1>API Omdb</h1>

                <div className='entrdas'>
                <input type="text" placeholder='Nome do filme' value={filmeBusca} onChange={e => setFilmeBusca(e.target.value)} />
                <button onClick={buscarFilmes}>Buscar</button>
                </div>

                <div className='lista-filmes'>
                   {listarFilmes.map(item =>
                    <CartaoOmdb item={item}/>
                   )}
                </div>
                {/*<table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Filme</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listarFilmes.map(item =>
                             <tr>
                                 <td>{item.imdbID}</td>
                                 <td>{item.Title}</td>
                                 <td>{item.Year}</td>
                             </tr>
                       )} 
                   </tbody>
                </table>*/}
            </div>
            <div className='secao correio'>
                <h1>API do correio</h1>

                <div>
                    <input type="text" placeholder='Digite o CEP' value={cep} onChange={e => setCEP(e.target.value)}/>
                    <button onClick={BuscarCep}>Buscar</button>
                </div>

                <p>
                    {infoLogradouro}
                </p>
            </div>

        </div>
    )
};