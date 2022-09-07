
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

export interface Tribe {
    id: string
    tribeName: string,
    tribeProfile: string
    tribeMembersNo: number,
}

export interface Profile {
    profilePicture: string,
    profileUsername: string,
    profileAbout: string,
    profileName: string
}
