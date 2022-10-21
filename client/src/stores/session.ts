import FriendsListVue from "@/components/FriendsList.vue";
import router from "@/router";
import { reactive } from "vue";

const session = reactive( {
    user: null as User | null,
});

export function login(which: number) {

        switch(which) {
            case 1:
                session.user = {
                    firstName: 'Robert',
                    lastName: 'Knapp',
                    friends: [
                        new Friend('Anouk', 'isCool'),
                        new Friend('Ellie', 'isCool'),
                        new Friend('Crisp', 'isCool'),
                        new Friend('Jane', 'Doe'),
                        new Friend('John', 'Smith'),
                    ]
                }
                break;
            case 2:
                session.user = {
                    firstName: 'John',
                    lastName: 'Smith',
                    friends: [
                        new Friend('Anouk', 'isCool'),
                        new Friend('Ellie', 'isCool'),
                        new Friend('Crisp', 'isCool'),
                        new Friend('Robert', 'Knapp'),
                        new Friend('Jane', 'Doe'),
                    ]
                }
                break;
            case 3:
                session.user = {
                    firstName: 'Jane',
                    lastName: 'Doe',
                    friends: [
                        new Friend('Anouk', 'isCool'),
                        new Friend('Ellie', 'isCool'),
                        new Friend('Crisp', 'isCool'),
                        new Friend('Robert', 'Knapp'),
                        new Friend('John', 'Smith'),
                    ]
                }
                break;
        }
}

export function logout() {
    session.user = null;
}

export function redirect(onoff: boolean) {
    if(onoff) {
        router.push('/recentwork');
    }
    else {
        router.push('/');
    }
}

export function addFriend(firstName: string, lastName: string) {
    session.user?.friends?.push(new Friend(firstName, lastName));
}

export class Friend {
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    public firstName?: string;
    public lastName?: string;
}

export class User {
    public firstName?: string;
    public lastName?: string;
    public friends?: Friend[];
}

export default session;