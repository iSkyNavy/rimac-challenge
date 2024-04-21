import { PlansResponseProps } from "@models/PlansModel";
import { api } from "./API"

export const PlanService = {
    urlBase: '/plans.json',
    async getPlans() {
        return await api.get<PlansResponseProps>(this.urlBase);
    }
}