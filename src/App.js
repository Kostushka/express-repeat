import './scss/app.scss';
import Header from './components/Header';
import Categories from './containers/Content/Categories';
import Sort from './containers/Content/Sort';
import Title from './containers/Content/Title';
import Item from './containers/Content/Item';
import { useEffect, useState } from 'react';

function App() {
    const [loader, setLoader] = useState(true);
    const [pizzaList, setPizzaList] = useState([]);
    // fetch запрос
    useEffect(() => {
        fetch('https://6356c4029243cf412f8d1d66.mockapi.io/items')
            .then((res) => res.json())
            .then((json) => {
                setPizzaList(json);
                setLoader(false);
            });
    }, []);

    return (
        <div>
            <div className='wrapper'>
                <Header />
                <div className='content'>
                    <div className='container'>
                        <div className='content__top'>
                            <Categories />
                            <Sort />
                        </div>
                        <Title />
                        {(loader && 'Идет загрузка...') || (
                            <div className='content__items'>
                                {pizzaList.map((el, i) => (
                                    <Item key={i} {...el} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
