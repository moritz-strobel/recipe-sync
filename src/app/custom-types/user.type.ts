import { CookBook } from "./cookbook.type";
import { Recipe } from "./recipe.type";

export type User = {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    username: string;
    first_name: string;
    last_name: string;
    email: string;
    passwordHash: string;   
    profileText: string;
    profileImage: string; // base64string image

    //recipes: Recipe[];
    //cookbooks: CookBook[];
}
