import { useState } from 'react';

function Categories() {
    const [state, setState] = useState(0);

    const list = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ];

    return (
        <div className='categories'>
            <ul>
                {list.map((el, i) => (
                    <li
                        onClick={() => setState(i)}
                        className={state === i ? 'active' : ''}
                        key={i}
                    >
                        {el}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Categories;
