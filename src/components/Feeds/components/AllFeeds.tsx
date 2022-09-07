import React from 'react'

import { posts } from '../../../assets/data/posts'
import "../styles/FeedStyles.css";

const AllFeeds = () => {
  return (
    <div className="posts">
        {posts.map(
          (
            {
              posterImage,
              posterName,
              posterUsername,
              postLikes,
              postContent,
              postImage,
              comments,
            },
            idx
          ) => (
            <div className="post shadow-sm bg-body">
              <div className="post__top">
                <div className="poster__details flex__three">
                  <img src={posterImage} alt={posterName} />
                  <div className="details">
                    <h5>{posterName}</h5>
                    <p>{posterUsername}</p>
                  </div>
                </div>
              </div>
              {/* Post Details */}
              <div className="post__details">
                <div className="post__content">
                  {postContent && postContent}
                  {postImage && <img src={postImage} alt="post avatar" />}
                </div>
              </div>
              <div className="post__actions">
                <div className="likes flex__three">
                  <span>{postLikes} {postLikes > 1 ? "Likes" : "Like"}</span>
                  <i className='bx bx-like'></i>
                </div>
                <div className="comments flex__three">
                  <span>{comments.length} {comments.length > 1 ? "Comments" : "Comment"}</span>
                  <i className='bx bx-comment'></i>
                </div>
              </div>
            </div>
          )
        )}
      </div>
  )
}

export default AllFeeds