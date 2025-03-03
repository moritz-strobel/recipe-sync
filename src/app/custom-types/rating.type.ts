export type Rating = {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    user: User; // Reference to user that rated a recipe
    stars: 1 | 2 | 3 | 4 | 5;
}
