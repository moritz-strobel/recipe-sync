export type User = {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    name: string;
    last_name: string;
    username: string;
    email: string;
    passwordHash: string;   
    profileText: Text;
    profileImage: string; // base64string image
}
