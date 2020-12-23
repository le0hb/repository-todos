interface IUserModel {
    id: string;
    name: string;
    email: string;
    password: string;
    git_user: string;
    created_at: Date;
    updated_at: Date;
}

export {IUserModel};