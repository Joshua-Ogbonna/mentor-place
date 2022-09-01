
export interface Message {
    sender: string,
    senderPicture: string,
    timeSent: string,
    messages: string[]
}

interface Comment {
    commentImage: string
    commentContent: string
}

export interface Post {
    posterImage: string,
    posterName: string,
    posterUsername: string,
    postContent?: string,
    postImage?: string
    postLikes: number,
    comments: Comment[] | []
}
