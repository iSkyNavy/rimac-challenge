import { ReactNode, createContext, useState } from "react";
import { UserProps } from "@models/UserModel";
import { calculateAge } from "@helpers/timeHelper";
import { PlanProps } from "@models/PlansModel";

export interface UserFullProps extends UserProps {
	age?: number;
	phone?: number;
	documentType?: string;
	documentNumber?: string;
	plan?: PlanProps;
	hasSession?: boolean;
}

interface UserContextProps {
	user: UserFullProps;
	setData: (data: UserFullProps) => void;
}

const UserPropsDefault: UserFullProps = {
	name: "",
	birthDay: "",
	lastName: "",
	age: 0,
	phone: 0,
	documentType: "",
	documentNumber: "",
	plan: {
		age: 0,
		description: [],
		name: "",
		price: 0,
	},
	hasSession: false,
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
		const hasSession = true;
		setUser({ ...data, age, hasSession });
	};
	return (
		<UserContext.Provider value={{ user: user, setData: setData }}>
			{children}
		</UserContext.Provider>
	);
};
