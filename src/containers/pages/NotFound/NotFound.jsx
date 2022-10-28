import styles from './NotFound.module.scss';

function NotFound() {
    return (
        <h1 className={styles.block}>
            <span>😕</span>
            <br />
            Ничего не найдено
        </h1>
    );
}

export default NotFound;
