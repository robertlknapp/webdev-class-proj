import myFetch from "../services/myFetch";
import { ref } from 'vue';
export interface post {
    postId: number,
    posterId: number,
    title: string,
    date: string,
    duration: number,
    location: string,
    userImg: string,
    activityType: string
};

export interface ListEnvelope<T> {
    posts: T[]
};

export interface postDocument {
    "posts": post[]
};

export function getPost(id: number) {
    return myFetch<post>(`posts/${id}`);
};

export function getAllPosts() {
    return myFetch<post[]>('posts');
};

export function getPostsByPoster(id:number) {
    return myFetch<postDocument>(`userposts/${id}`);
};

