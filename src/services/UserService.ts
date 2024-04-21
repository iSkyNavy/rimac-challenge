import { UserProps } from "@models/UserModel";
import { api } from "./API"

export const UserService = {
    urlBase: '/user.json',
    async getUser() {
        return await api.get<UserProps>(this.urlBase);
    }
}