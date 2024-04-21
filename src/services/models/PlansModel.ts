export interface PlansResponseProps {
    list: PlanProps[];
}

export interface PlanProps {
    name: string;
    price: number;
    description: string[];
    age: number
}
