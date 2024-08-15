
import App from './pages/App'
import Contato from './pages/contato';
import Naoencontrado from './pages/naoencontrado';
import Eventos from './pages/eventos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VarEstado from './pages/varEstado';
import Comps from './pages/comps';

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

                <Route path='*' element={<Naoencontrado />} />

            </Routes>
        </BrowserRouter>
    )
}