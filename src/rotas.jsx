
import App from './pages/App'
import Contato from './pages/contato';
import Naoencontrado from './pages/naoencontrado';
import Eventos from './pages/eventos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VarEstado from './pages/varEstado';
import Comps from './pages/comps';
import RenderizacaoCondiconal from './pages/renderizacaoCondicional';
import Efeitos from './pages/efeitos';
import ChamadaApi from './pages/chamadaApi';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/app' element={<App />} />
                <Route path='/eventos' element={<Eventos />} />
                <Route path='/varestado' element={<VarEstado />} />
                <Route path='/comps' element={<Comps />} />
                <Route path='/renderizacaocondicional' element={<RenderizacaoCondiconal />} />
                <Route path='/efeitos' element={<Efeitos />} />
                <Route path='/chamadaapi' element={<ChamadaApi />} />



                <Route path='*' element={<Naoencontrado />} />

            </Routes>
        </BrowserRouter>
    )
}