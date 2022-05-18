import React, {createContext, useContext} from 'react';
import {UsersData, RepoData} from '../types';

type GlobalContextType = {
    usersData: UsersData | {};
    setUsersData: (usersData: UsersData | {}) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    userInput: string;
    setUserInput: (userInput: string) => void;
    repoData: RepoData[] | [];
    setRepoData: (repoData: any) => void;
    repoDataFilter: RepoData[] | [];
    setRepoDataFilter: (repoData: any) => void;
};

const GlobalContextDefaultValues: GlobalContextType = {
    usersData: {},
    setUsersData: (usersData: UsersData | {}) => usersData,
    loading: false,
    setLoading: (loading: boolean) => loading,
    userInput: '',
    setUserInput: (userInput: string) => userInput,
    repoData: [],
    setRepoData: (repoData: RepoData[]) => repoData,
    repoDataFilter: [],
    setRepoDataFilter: (repoData: RepoData[]) => repoData
};

export const GlobalContext = createContext<GlobalContextType>(GlobalContextDefaultValues);

export function useGlobalContext() {
    return useContext(GlobalContext);
}

const useProvideGlobal = () => {
    const [usersData, setUsersData] = React.useState({});
    const [repoData, setRepoData] = React.useState([]);
    const [repoDataFilter, setRepoDataFilter] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [userInput, setUserInput] = React.useState('');

    return {
        loading,
        setLoading,
        usersData,
        setUsersData,
        userInput,
        setUserInput,
        repoData,
        setRepoData,
        repoDataFilter,
        setRepoDataFilter
    };
};

type GlobalProviderProps = {
    children: React.ReactNode;
};

export const GlobalProvider = (props: GlobalProviderProps): JSX.Element => {
    const globalData = useProvideGlobal();
    return (
        <GlobalContext.Provider value={globalData}>
            {props.children}
        </GlobalContext.Provider>
    );
};
