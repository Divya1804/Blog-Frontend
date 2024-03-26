import React, { useEffect, useState } from 'react'
import { getPostsByUser } from '../../services/post-service'
import { getCurrentUserDetails } from '../../auth'
import Card from '../home/Card'

const UserDashboard = () => {

  const [postContent, setPostContent] = useState([])

  useEffect(() => {
    getPostsByUser(getCurrentUserDetails().userId)
      .then((data) => {
        console.log(data);
        setPostContent([...data]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])






  return (
    <>
      {/* {JSON.stringify(postContent)} */}
      <div className="home-container">
        <div className="home-title">
          <h1>My Blogs</h1>
        </div>
        <div className="home-blogs">


          {postContent &&
            postContent.map((post) => {
              return (
                <div key={post.postId}>
                  <Card post={post} />
                </div>
              );
            })}

        </div>
      </div>
    </>
  )
}

export default UserDashboard
