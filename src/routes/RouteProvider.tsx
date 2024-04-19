import { Route, Routes } from "react-router-dom";
import { Layout } from "@common/layout";
import { URL_BASE } from "@constants/app";

import { publicRoutes } from "./routes";

const RouteProvider = () => {
	const publicModule = publicRoutes.map(({ name, path, Component }, index) => (
		<Route path={path} key={`${index}-${name.split(" ").join("-")}`} element={<Component />} />
	));
	return (
		<Routes>
			<Route path={URL_BASE} element={<Layout />}>
				{publicModule}
			</Route>
		</Routes>
	);
};

export default RouteProvider;
