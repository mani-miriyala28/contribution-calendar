export type Contribution = {
    date: string;
    count: number;
};
export type ContributionDetails = {
    commits: number;
    pullRequests: number;
    mergeRequests: number;
    pushes: number;
    branchesContributed: number;
};
export declare const fetchGitHubContributions: (username: string, token: string, startDate: Date, endDate: Date) => Promise<Contribution[]>;
export declare const fetchContributionDetails: (username: string, token: string, date: string) => Promise<ContributionDetails>;
