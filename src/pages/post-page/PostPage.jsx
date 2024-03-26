import React, { useEffect, useState } from 'react'
import './postPage.css';
import { Link, useParams } from 'react-router-dom';
import { getPost } from '../../services/post-service';

const PostPage = () => {

    const { postId } = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {
        getPost(postId).then((content) => {
            console.log(content);
            setData(content)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <div className="page-container">
                <div className="page-title">
                    <h1>Blog Page {postId}</h1>
                </div>
                <div className="page-detail">
                    <Link to={'/'} >Home </Link> / <Link to={''}> Blog</Link>
                </div>
                <div className="page-detail">
                    <p>Posted by <b>{data?.user?.username}</b> </p>
                </div>
                <div className="page-content">
                    <h1>{data?.postTitle}</h1>
                    <div dangerouslySetInnerHTML={{__html: data?.postDescription}} className='content'></div>
                </div>
            </div>
        </>
    )
}

export default PostPage
