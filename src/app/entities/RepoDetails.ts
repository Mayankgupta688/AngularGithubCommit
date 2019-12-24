export default class RepoDetails {
    private _language: string;
    private _avatarUrl: string;
    private _repositoryName: string;
    private _ownerLogin: string;
    private _openIssueCount: string;
    private _defaultBranch: string;
    private _subscribersCount: string
    private _repoSize: string;
    private _homePage: string;

    get homePage(): string {
        return this._homePage;
    }

    set homePage(value: string) {
        this._homePage = value;
    }

    get repoSize(): string {
        return this._repoSize;
    }

    set repoSize(value: string) {
        this._repoSize = value;
    }

    get subscribersCount(): string {
        return this._subscribersCount;
    }

    set subscribersCount(value: string) {
        this._subscribersCount = value;
    }

    get language(): string {
        return this._language;
    }

    set language(value: string) {
        this._language = value;
    }

    get defaultBranch(): string {
        return this._defaultBranch;
    }

    set defaultBranch(value: string) {
        this._defaultBranch = value;
    }

    get openIssueCount(): string {
        return this._openIssueCount;
    }

    set openIssueCount(value: string) {
        this._openIssueCount = value;
    }

    get avatarUrl(): string {
        return this._avatarUrl;
    }

    set avatarUrl(value: string) {
        this._avatarUrl = value;
    }

    get repositoryName(): string {
        return this._repositoryName;
    }

    set repositoryName(value: string) {
        this._repositoryName = value;
    }

    get ownerLogin(): string {
        return this._ownerLogin;
    }

    set ownerLogin(value: string) {
        this._ownerLogin = value;
    }

    capitalize(stringInput: string) {
        if (typeof stringInput !== 'string') return ''
        return stringInput.charAt(0).toUpperCase() + stringInput.slice(1)
    }
}