export class Department {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    constructor(
        _id?: string,
        name?: string,
        email?: string,
        phoneNumber?: string

    ) {
        this._id = _id || '';
        this.name = name || '';
        this.email = email || '';
        this.phoneNumber = phoneNumber || '';

    }
}


