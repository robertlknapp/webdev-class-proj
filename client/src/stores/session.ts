import myFetch from "@/services/myFetch";
import router from "@/router";
import { reactive, watch } from "vue";
import { type user, getUser,getUserByEmail } from './users';
import type { post } from './posts';

const session = reactive( {
    user: null as user | null,
    visiblePosts: [] as post[]
});

export async function login(email: string) {
    session.user = await getUserByEmail(email);
    redirect(true);
};

export function logout() {
    session.user = null;
    session.visiblePosts = [];
    redirect(false);
};

export function redirect(onoff: boolean) {
    if(onoff) {
        router.push('/recentwork');
    }
    else {
        router.push('/');
    }
};

export default session;