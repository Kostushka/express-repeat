import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';
import Home from './containers/pages/Home';
import Cart from './containers/pages/Cart';
import NotFound from './containers/pages/NotFound';

function App() {
    return (
        <div>
            <div className='wrapper'>
                <Header />
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='cart' element={<Cart />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
