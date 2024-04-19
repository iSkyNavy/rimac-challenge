import { RouteProps } from "@interfaces/routeInterface";
import HomePage from "@pages/HomePage";
import PlansPage from "@pages/PlansPage";
import ResumePage from "@pages/ResumePage";

export const publicRoutesPath = {
    HomePage: '/',
    PlansPage: '/plans',
    ResumePage: '/resume',
}

export const publicRoutes: RouteProps[] = [
    {
        name: "home-page",
        path: publicRoutesPath.HomePage,
        Component: HomePage
    },
    {
        name: "plans-page",
        path: publicRoutesPath.PlansPage,
        Component: PlansPage
    },
    {
        name: "resume-page",
        path: publicRoutesPath.ResumePage,
        Component: ResumePage
    }
];