import { Recipe } from "./recipe.type";

export type Ingredient = {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    recipe: Recipe;
    name: string;
}
