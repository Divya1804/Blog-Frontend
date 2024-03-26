import React from 'react'
import './home.css'
import { BASE_URL } from '../../services/Helper';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({post = {postTitle : "Default Title", postDescription :"Default Description"}}) => {

  const navigate = useNavigate()

    function extractDataFromHTML(htmlResult) {
        
        var tempElement = document.createElement('div');
        tempElement.innerHTML = htmlResult;
        var extractedData = tempElement.textContent || tempElement.innerText;
        extractedData = extractedData.trim();
    
        return extractedData;
    }

  return (
    <div className='blog'>
      <h1>{post?.postTitle}</h1>
      <p className='blog-content'>{extractDataFromHTML(post?.postDescription).substring(0,180)}...</p>
      {/* <p className='blog-content' dangerouslySetInnerHTML={{__html: (post?.postDescription).substring(0,180)}}>...</p> */}
      <div className="blog-btn">
        <Link to={'/post/' + post.postId } className='post-link' >
            <span>Read more</span>
        </Link>
      </div>
    </div>
  )
}

export default Card;
