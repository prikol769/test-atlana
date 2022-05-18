import React from 'react';
import styles from './UserListItem.module.scss';
import {Link} from 'react-router-dom';
import {UserData} from "../../types";

interface UserListItemProps {
    data: UserData;
}

const UserListItem: React.FC<UserListItemProps> = (props: UserListItemProps): JSX.Element => {
    const {data} = props;

    return (
        <Link className={styles.UserListItem} to={`${data.login}`} state={{name: data.login}}>
            <img className={styles.Avatar} src={`${data.avatar_url}`}  alt="img-user" />
            {data.login}
        </Link>
    );
}

export default UserListItem;
