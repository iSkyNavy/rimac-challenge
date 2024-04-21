import { Route, Routes } from "react-router-dom";
import { Layout } from "@common/layout";
import { publicRoutes } from "./routes";
import { UserProvider } from "@contexts/UserContext";

const RouteProvider = () => {
	const publicModule = publicRoutes.map(({ name, path, Component }, index) => (
		<Route path={path} key={`${index}-${name.split(" ").join("-")}`} element={<Component />} />
	));
	return (
		<Routes>
			<Route
				element={
					<UserProvider>
						<Layout />
					</UserProvider>
				}
			>
				{publicModule}
			</Route>
		</Routes>
	);
};

export default RouteProvider;
