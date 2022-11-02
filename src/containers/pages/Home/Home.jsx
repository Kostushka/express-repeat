import { useEffect, useState } from 'react';
import Categories from '../../Content/Categories';
import Sort from '../../Content/Sort';
import Title from '../../Content/Title';
import Item from '../../Content/Item';
import SkeletonItem from '../../Content/Item/SkeletonItem';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [pizzaList, setPizzaList] = useState([]);
    // fetch запрос
    useEffect(() => {
        fetch('https://6356c4029243cf412f8d1d66.mockapi.io/items')
            .then((res) => res.json())
            .then((json) => {
                setPizzaList(json);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='container'>
            <div className='content__top'>
                <Categories />
                <Sort />
            </div>
            <Title />

            <div className='content__items'>
                {isLoading
                    ? [...new Array(6)].map((_, i) => <SkeletonItem key={i} />)
                    : pizzaList.map((el, i) => {
                          return <Item key={i} {...el} />;
                      })}
            </div>
        </div>
    );
}
export default Home;
