import './scss/app.scss';
import pizzaList from './assets/pizzas.json';
import Header from './components/Header';
import Categories from './containers/Content/Categories';
import Sort from './containers/Content/Sort';
import Title from './containers/Content/Title';
import Item from './containers/Content/Item';

function App() {
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
                        <div className='content__items'>
                            {pizzaList.map((el, i) => (
                                <Item key={i} {...el} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
