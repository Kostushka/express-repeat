import './scss/app.scss';
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
                            <Item
                                img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                                title='Чизбургер-пицца'
                            />
                            <Item
                                img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                                title='Чизбургер-пицца'
                            />
                            <Item
                                img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                                title='Чизбургер-пицца'
                            />
                            <Item
                                img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                                title='Чизбургер-пицца'
                            />
                            <Item
                                img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                                title='Чизбургер-пицца'
                            />
                            <Item
                                img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                                title='Чизбургер-пицца'
                            />
                            <Item
                                img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                                title='Чизбургер-пицца'
                            />
                            <Item
                                img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                                title='Чизбургер-пицца'
                            />
                            <Item
                                img='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                                title='Чизбургер-пицца'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
