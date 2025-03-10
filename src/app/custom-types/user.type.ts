export type User = {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    first_name: string;
    last_name: string;
    username: string;
    email: string;
    passwordHash: string;   
    profileText: string;
    profileImage: string; // base64string image
}
