import './index.scss';


export default function CartaoOmdb(props){



    return (
        <div className='comp-cartao-omdb'>
                <img src={props.itema.Poster} alt="" />

                <div className='info'>
                    <div className='titulos'>
                        <h1>{props.item.Title}</h1>
                        <h2>lançamento em {props.item.Year}</h2>
                    </div>
                    <h3>cód. imdb: {props.item.imdbID}</h3>
                </div>
        </div>
    )
}