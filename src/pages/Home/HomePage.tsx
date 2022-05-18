import React from 'react';
import styles from './HomePage.module.scss';
import Search from '../../components/Search/Search';
import UserList from '../../components/UserList/UserList';

const HomePage: React.FC = (): JSX.Element => {

    return (
        <div className={styles.HomePage}>
            <h1>GitHub Searcher</h1>
            <Search/>
            <UserList />
        </div>
    );
}

export default HomePage;
