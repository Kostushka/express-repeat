import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonItem = () => {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={288}
            height={466}
            viewBox='0 0 288 466'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
        >
            <circle cx='123' cy='122' r='120' />
            <rect x='2' y='253' rx='0' ry='0' width='280' height='26' />
            <rect x='2' y='299' rx='0' ry='0' width='280' height='88' />
            <rect x='4' y='403' rx='0' ry='0' width='89' height='45' />
            <rect x='130' y='403' rx='0' ry='0' width='152' height='45' />
        </ContentLoader>
    );
};

export default SkeletonItem;
