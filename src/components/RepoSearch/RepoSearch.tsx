import React, {useEffect, useState} from 'react';
import styles from './RepoSearch.module.scss'
import {useGlobalContext} from '../../context/GlobalContext';

interface RepoSearchProps {
    name: string;
}

const RepoSearch: React.FC<RepoSearchProps> = ({name}): JSX.Element => {
    const {setRepoData, repoData, setRepoDataFilter, repoDataFilter} = useGlobalContext();
    const [repoInput, setRepoInput] = useState('');


    useEffect(() => {
        fetch(`https://api.github.com/users/${name}/repos?q=&per_page=100`)
            .then(async res => {
                return res.json()
            })
            .then(
                (result) => {
                    setRepoData(result);
                    setRepoDataFilter(result);
                },
                (error) => alert(error.message)
            )
    }, [])


    const changeHandler = (event: React.ChangeEvent<{ value: string }>) => {
        const value = event.currentTarget.value.trim();
        if(!repoDataFilter) {
            return
        }
        const filter = repoData.filter(el => {
            return el.name.toLowerCase().includes(value);
        });
        setRepoDataFilter(filter);
        setRepoInput(value);
    }

    return (
        <input className={styles.Search} onChange={changeHandler} value={repoInput} placeholder="Search for User`s Repositories"/>
    );
}

export default RepoSearch;
