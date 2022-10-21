import { User, allUsers } from "./session";


let posts:number = 1;

export class post {
    public poster?: User;
    public title?: string;
    public date?: Date;
    public duration?: string;
    public location?: string;
    public userImg?: string;

    constructor(poster: User, title: string, date: Date, duration: string, location: string, userImg: string) {
        this.poster = poster;
        this.title = title;
        this.date = date;
        this.duration = duration;
        this.location = location;
        this.userImg = userImg;
    };
}

//returns a different post for the first 6 calls
export function createTempPost() {
    switch(posts) {
        case 1:
            posts++;
            return new post(allUsers.user1, 'Ran around campus!', new Date('October 17, 2022'), '30 min', 'SUNY New Paltz campus', 'wowlinkwouldbehere');
        case 2:
            posts++;
            return new post(allUsers.user2, 'Swam through the gunk', new Date('October 16, 2022'), '1 hour', 'SUNY New Paltz campus', 'wow');
        case 3:
            posts++;
            return new post(allUsers.user3, 'Went rollerblading! Had a great time!', new Date('October 16, 2022'), 'hour and a half', 'Poughkeepsie', 'wow');
        case 4:
            posts++;
            return new post(allUsers.user4, 'Went for a morning jog', new Date('October 15, 2022'), '20 min', 'SUNY New Paltz campus', 'wow');
        case 5:
            posts++;
            return new post(allUsers.user5, 'Walked into town', new Date('October 12, 2022'), '1 hour', 'New Paltz', 'wow');
        case 6:
            posts++;
            return new post(allUsers.user6, 'Biked around town', new Date('October 17, 2022 03:24:00'), '40 min', 'New Paltz', 'wow');
    }
};


export default post;