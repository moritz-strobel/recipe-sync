export type CookBook = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    
    user: User;  // Reference to an user
    title: string; 
    isFavorite: boolean; 
    isDeleteable: boolean; // e.g. every user has a list of favorite recipes. this list shall not be public nor shall it be deleted (deletion results in empty cookbook) 
    isPublic: boolean;
    description: string;
    coverImageUrl: string; // URL zum Titelbild
    recipes: Recipe; // List of references to recipes 
}
