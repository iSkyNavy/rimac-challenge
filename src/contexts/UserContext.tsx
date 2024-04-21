import { ReactNode, createContext, useState } from "react";
import { UserProps } from "@models/UserModel";
import { calculateAge } from "@helpers/timeHelper";

export interface UserFullProps extends UserProps {
	age?: number;
	phone?: number;
	typeDocument?: string;
}

interface UserContextProps {
	user: UserFullProps;
	setData: (data: UserProps) => void;
}

const UserPropsDefault: UserFullProps = {
	name: "",
	birthDay: "",
	lastName: "",
	age: 0,
	phone: 0,
	typeDocument: "",
};

export const UserContext = createContext<UserContextProps>({
	user: UserPropsDefault,
	setData: () => {},
});

interface PropsProvider {
	children: ReactNode;
}

export const UserProvider = ({ children }: PropsProvider) => {
	const [user, setUser] = useState<UserFullProps>(UserPropsDefault);
	const setData = (data: UserFullProps) => {
		const age = calculateAge(data.birthDay);
		setUser({ ...data, age });
	};
	return (
		<UserContext.Provider value={{ user: user, setData: setData }}>
			{children}
		</UserContext.Provider>
	);
};
