import React, {useEffect, useState} from 'react';
import styles from './UserInfoPage.module.scss';
import {useLocation} from 'react-router-dom';
import {UserInfoData} from '../../types';
import RepoSearch from '../../components/RepoSearch/RepoSearch';
import RepoList from '../../components/RepoList/RepoList';

interface locationState {
    name: string;
}

const UserInfoPage: React.FC = (): JSX.Element => {
    const location = useLocation();
    const {name} = location.state as locationState;
    const [userDataInfo, setUserDataInfo] = useState<UserInfoData | null>(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${name}`)
            .then(async res => {
                return res.json()
            })
            .then(
                (result) => {
                    setUserDataInfo(result)
                },
                (error) => alert(error.message)
            )
    }, [])

    return (
        <div className={styles.UserInfoPage}>
            <h1>GitHub Searcher</h1>
            <div className={styles.InfoWrapper}>
                {userDataInfo?.avatar_url && <img className={styles.Avatar} src={`${userDataInfo.avatar_url}`} alt="img-user"/>}
                <div className={styles.InfoContainer}>
                    <p><span>Name:</span> {userDataInfo?.name}</p>
                    <p><span>Login:</span> {userDataInfo?.login}</p>
                    <p><span>Location:</span> {userDataInfo?.location}</p>
                    <p><span>TwitterName:</span> {userDataInfo?.twitter_username}</p>
                    <p><span>Company:</span> {userDataInfo?.company}</p>
                    <p><span>Followers:</span> {userDataInfo?.followers}</p>
                    <p><span>Following:</span> {userDataInfo?.following}</p>
                    <p><span>Repositories:</span> {userDataInfo?.public_repos}</p>
                    <p><span>Email:</span> {userDataInfo?.email}</p>
                </div>
            </div>
            <div className={styles.SearchContainer}>
                <RepoSearch name={name} />
                <RepoList />
            </div>
        </div>
    );
}

export default UserInfoPage;
