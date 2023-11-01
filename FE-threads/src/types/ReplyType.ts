import { ThreadType } from "./ThreadType";
import { UserType } from "./UserType";

export type ReplyType= {
    id: number;
    image: string;
    content: string;
    thread: ThreadType;
    user: UserType
};
