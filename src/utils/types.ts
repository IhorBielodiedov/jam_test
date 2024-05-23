export interface IProduct {
  id: number;
  name: string;
  type: TFilter;
  img: string;
  description: string;
  composition: string;
  energyValue: number;
  cookingTime: { min: number; max: number };
  price: number;
  rate: number;
}
export type TFilter = "donut" | "croissant" | "cake" | "all";
