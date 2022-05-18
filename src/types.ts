export interface UserData {
    avatar_url: string;
    repos_url: string;
    id: number;
    login: string;
}


export interface UsersData {
    incomplete_results: boolean;
    items: UserData[];
    total_count: number;
}

export interface UserInfoData {
    avatar_url: string;
    company: string;
    followers: number;
    following: number;
    location: string;
    login: string;
    name: string;
    public_repos: number;
    twitter_username: string;
    email: string;
}

export interface RepoData {
    name: string;
    forks: number;
    stargazers_count: number;
    html_url: string;
}
