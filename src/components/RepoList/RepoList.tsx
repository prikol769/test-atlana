import React from 'react';
import RepoListItem from '../RepoListItem/RepoListItem';
import styles from './RepoList.module.scss'
import {useGlobalContext} from '../../context/GlobalContext';

const RepoList: React.FC = (): JSX.Element => {
    const {repoDataFilter, loading} = useGlobalContext();

    return (
        <>

            <div className={styles.RepoList}>
                {loading
                    ? <p>...Loading</p>
                    : <>
                        {
                            repoDataFilter?.length === 0
                                ? <p>Not found</p>
                                : <>
                                    {repoDataFilter?.slice(0, 5).map((item, index) => (
                                        <RepoListItem key={index} data={item}/>
                                    ))}
                                </>
                        }
                    </>
                }
            </div>
        </>
    );
}

export default RepoList;
