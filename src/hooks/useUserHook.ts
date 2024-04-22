import { UserProps } from "@models/UserModel";
import { UserService } from "@services/UserService";
import { useState } from "react";

export const useUserHook = () => {
    const [user, setUser] = useState<UserProps>();
    const getUser = async () => {
        const user = await UserService.getUser();
        setUser(user);
        return user;
    }

    return { getUser, user }
}