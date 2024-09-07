import React, { useState } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, photoUrl, img, like, comments }) {
  const [isLiked, setIsLiked] = useState(false); // Track whether the post is liked

  // Toggle the "liked" state
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className='post'>
      <div className="post_header">
        <Avatar src={img} />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_body">
        <img src={photoUrl} alt="" width='530px' />
      </div>
      <div className="post_footer">
        <div className='divRow'>
          <Avatar 
            src='https://media.istockphoto.com/id/1212824035/vector/thumbs-up-doodle.jpg?s=612x612&w=0&k=20&c=DRPHlxQLCDUg61pWCbYGYbvm9Xy8cwGYSy7oTlEOTYU=' 
            className='like' 
            sx={{ width: 24, height: 24 }} 
          />
          <span className='span_like'>{like}</span>
        </div>
        <p className='like' style={{ color: 'gray' }}>{comments}</p>
      </div>

      <div style={{ height: '1px', backgroundColor: "lightgray", width: '100%', margin: '0px 0' }}></div>

      <div className="post_buttons">
        {/* Like Button - handle click and change color */}
        <div onClick={handleLikeClick}>
          <InputOption 
            Icon={ThumbUpAltIcon} 
            title="Like" 
            color={isLiked ? "blue" : "gray"} // Change color based on isLiked
          />
        </div>
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={RepeatIcon} title="Repost" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
