import './index.scss';

export default function ItemMeta(props) {
    

    return (
        <li className='comp-item-meta' >
            <img src="/assets/images/editar.png" alt="" width='15px' onClick={() => props.alterarMeta(props.pos)} /> &nbsp;
            <img src="/assets/images/remove.png" alt="" width='15px' onClick={() => props.removerMeta(props.pos)} /> &nbsp;
            {props.item}
        </li>
    )
}