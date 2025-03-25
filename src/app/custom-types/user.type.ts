import { CookBook } from "./cookbook.type";
import { Recipe } from "./recipe.type";

export type User = {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;   
    profileText: string;
    profileImage: string; // base64string image
    recipes: Recipe[];
    cookbooks: CookBook[];
}
