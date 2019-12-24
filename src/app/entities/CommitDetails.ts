export default class CommitDetails {
    private _author: string;
    private _avatarUrl: string;
    private _email: string;
    private _message: string;

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get avatarUrl(): string {
        return this._avatarUrl;
    }

    set avatarUrl(value: string) {
        this._avatarUrl = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }
}