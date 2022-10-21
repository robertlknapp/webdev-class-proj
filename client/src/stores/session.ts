
import router from "@/router";
import { reactive } from "vue";

const session = reactive( {
    user: null as User | null,
});

export class User {
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public userID?: number;
    public admin?: boolean;
    public friends?: User[];
}

export function login(which: number) {

        switch(which) {
            case 1:
                populateFriends(allUsers.user1);
                session.user = allUsers.user1;
                break;
            case 2:
                populateFriends(allUsers.user2);
                session.user = allUsers.user2;
                break;
            case 3:
                populateFriends(allUsers.user3);
                session.user = allUsers.user3;
                break;
        }
}

export const allUsers = {
    user1: {
        firstName: 'Robert',
        lastName: 'Knapp',
        email: 'robertlknapp@outlook.com',
        userID: 1,
        admin: true,
        friends: [
            
        ],
    },

    user2: {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smith.com',
        userID: 2,
        admin: false,
        friends: [

        ],
    },

    user3: {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@doe.com',
        userID: 3,
        admin: false,
        friends: [
            
        ],
    },
    user4: {
        firstName: 'Ellie',
        lastName: 'isCool',
        email: 'ellie@iscool.com',
        userID: 4,
        admin: false,
        friends: [
            
        ],
    },
    user5: {
        firstName: 'Anouk',
        lastName: 'isCool',
        email: 'anouk@iscool.com',
        userID: 5,
        admin: false,
        friends: [
            
        ],
    },
    user6: {
        firstName: 'Crisp',
        lastName: 'isCool',
        email: 'crisp@iscool.com',
        userID: 6,
        admin: false,
        friends: [
            
        ],
    },
}

function populateFriends(currentUser: User) {
    currentUser.friends = [
        allUsers.user1,
        allUsers.user2,
        allUsers.user3,
        allUsers.user4,
        allUsers.user5,
        allUsers.user6,
    ];

    for(let i = 0; i < currentUser.friends.length; i++) {
        if(currentUser.friends[i].userID == currentUser.userID) {
            currentUser.friends.splice(i,1);
        }
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

export default session;