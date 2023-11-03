import { ThreadType } from "./ThreadType";
import { UserType } from "./UserType";

export type ReplyType= {
    id?: number;
    image?: string;
    content?: string;
    thread?: ThreadType;
    user?: UserType
};

export type FormReplyType = {
    id?: number;
    content?: string;
    image?: string;
    user?: UserType;
    thread?: ThreadType
}
