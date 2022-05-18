import React from 'react';
import styles from './RepoListItem.module.scss'
import {RepoData} from "../../types";

interface RepoListItemProps {
    data: RepoData;
}

const RepoListItem: React.FC<RepoListItemProps> = (props: RepoListItemProps): JSX.Element => {
    const {data} = props;

    return (
        <a className={styles.RepoListItem} href={`${data.html_url}`}>
            <p>{data.name}</p>
            <div className={styles.ForksStarsContainer}>
                <p>{data.forks} Forks</p>
                <p>{data.stargazers_count} Stars</p>
            </div>
        </a>
    );
}

export default RepoListItem;
