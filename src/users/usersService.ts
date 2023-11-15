import { User } from "./user"

export type UserCreationParams = Pick<
    User,
    "email" |
    "name" |
    "phoneNumbers">

export class UsersService {
    public get(id: number, name?: string): User {
        return {
            id,
            name: name ?? "obi wan",
            email: "obi.wan@yopmail.com",
            status: "Happy",
            phoneNumbers: []
        }
    }

    public create(userCreationParams: UserCreationParams): User {
        return {
            id: Math.floor(Math.random() * 1000),
            status: "Happy",
            ...userCreationParams
        }
    }
}