export type User = {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    username: string;
    nationality: string;
    email: string;
    passwordHash: string;   
    profileTextUrl: Text;
    profileImageUrl: Image;
    allowEmailNotifiaction: boolean;
    allowUpdates: boolean;
    allowAds: boolean;
    notifiactions: Notification; // A user shal be informed if he gets followed, also when hes not signed in currently (notifiaction on next sign in)
    follows: User; // Reference to a user. User can follow eachother
    follower: User;
}
