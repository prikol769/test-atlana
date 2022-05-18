import React from 'react';
import styles from './UserList.module.scss';
import UserListItem from '../UserListItem/UserListItem';
import {useGlobalContext} from "../../context/GlobalContext";

const UserList: React.FC = (): JSX.Element => {
    const {usersData, loading} = useGlobalContext();

    return (
        <>
            {'items' in usersData &&
            <div className={styles.UserList}>
                {loading
                    ? <p>...Loading</p>
                    : <>
                        {
                            usersData.total_count === 0
                                ? <p>Not found</p>
                                : <>
                                    {usersData.items.map((item, index) => (
                                        <UserListItem key={index} data={item}/>
                                    ))}
                                </>
                        }
                    </>
                }
            </div>
            }
        </>
    );
};

export default UserList;
