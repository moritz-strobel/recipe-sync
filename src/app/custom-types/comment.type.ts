import { User } from "./user.type";


export type Comment = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    
    user: User; // Reference to user that commented a recipe
    text: string; // A comment shall only be n characters long
}
