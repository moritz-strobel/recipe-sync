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
    images?: string[]; // image as base64string
    videoUrl?: string // optional video link to e.g. YT
    coverImage: string; // image as base64string
    tags: Tag[]; // Array references to Tags
    views: bigint; // How many times a recipes has been viewed
    shares: bigint; // How many times a recipes has been shared
    comments: Comment[]; // Array of Comments 
}
