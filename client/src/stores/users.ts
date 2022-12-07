import myFetch from "../services/myFetch";

export interface user {
    firstname: string,
    lastname: string,
    email: string,
    userId: number,
    admin: boolean,
    friends: number[],
    goals: string[],
    finishedGoals: string[]
};

export interface userDocument {
    users: user[]
};

export function getUser(id: number) {
    return myFetch<user>(`users/${id}`);
};

export function getAllUsers() {
    return myFetch<userDocument>(`users`).then(x => x.users);
};

export function getFriendsByUser(id: number) {
    return myFetch<user[]>(`users/friends/${id}`);
};

export function getUsersByName(name: string) {
    let newUsers = myFetch<user[]>(`users/name/${name}`);
    console.log(newUsers);
    return newUsers;
};

export function getUserByEmail(email: string) {
    return myFetch<user>(`users/login/${email}`);
};