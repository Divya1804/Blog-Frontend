import React from 'react'
import './home.css'

const Card = ({post = {postTitle : "Default Title", postDescription :"Default Description"}}) => {

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
      <div className="blog-btn">
        <button>
            <span>Read more</span>
        </button>
      </div>
    </div>
  )
}

export default Card;
