import { User } from "./user.type";

export type Recipe = {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    title: string;
	user: User, // Referenz auf User
    isPublic: boolean;
    generalScore: "healthy" | "neutral" | "unhealthy";
    nutriScore: "A" | "B" | "C" | "D" | "E";
    ingredients: string[]; // Array of strings, each string beeing a ingredient
    steps: number; // How many steps
    preparationTime: number; // how long for preperation e.g. cut vegetables
    overallCookTime: number; // how long for cooking
    recipeText: string; // Actual recipe text
    coverImage: string; // image as base64string
    tags: string[]; // Array references to Tags
}
