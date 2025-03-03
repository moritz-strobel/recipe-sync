import { Category } from "./category.type";
import { Rating } from "./rating.type";
import { Tag } from "./tag.type";
import { User } from "./user.type";

export type Recipe = {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    title: string;
	user: User, // Referenz auf User
    isPublic: boolean;
    general_score: "healthy" | "neutral" | "unhealthy";
    nutri_score: "A" | "B" | "C" | "D" | "E";
    ingredients: string; // Array of strings, each string beeing a ingredient 
    steps: bigint; // How many steps 
    preperationTime: bigint; // how long for preperation e.g. cut vegetables 
    overallCookingTime: bigint; // how long for cooking 
    recipeText: Text; // Actual recipe text
    images?: Image; // optional images embeded into recipe text, array?
    videoUrl?: string // optional video link to e.g. YT
    coverImage: Image; // URL zum Titelbild
    categories: Category; // List of References to Categories
    tags: Tag[]; // Array references to Tags
    rating: Rating[]; // Array of ratings --> An average shall be displayed
    views: bigint; // How many times a recipes has been viewed
    shares: bigint; // How many times a recipes has been shared
    comments: Comment[]; // Array of Comments 
}
