import React from 'react';
import styles from './Search.module.scss';
import {useGlobalContext} from '../../context/GlobalContext';

const Search: React.FC = (): JSX.Element => {
    const {setUsersData, setLoading, userInput, setUserInput} = useGlobalContext();

    const changeHandler = (event: React.ChangeEvent<{ value: string }>) => {
        const value = event.currentTarget.value.trim();
        if(!value) {
            setUserInput(value);
            setUsersData({});
            return;
        }
        if(value !== userInput) {
            setLoading(true);
            fetch(`https://api.github.com/search/users?q=${value}&per_page=5`)
                .then(async res => {
                    if(!res.ok) {
                        setLoading(false);
                        const resData = await res.json();
                        throw new Error(resData.message);
                    }
                    return res.json()
                })
                .then(
                    (result) => {
                        setUsersData(result);
                        setLoading(false);
                    },
                    (error) => alert(error.message)
                )
        }
        setUserInput(value);
    }

    return (
        <input className={styles.Search} onChange={changeHandler} value={userInput} placeholder="Search for Users"/>
    );
}

export default Search;
