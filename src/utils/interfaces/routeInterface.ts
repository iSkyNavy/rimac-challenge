export interface RouteProps {
	name: string;
	path: string;
	Component: () => JSX.Element;
}
