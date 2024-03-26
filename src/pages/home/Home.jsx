import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Base from '../../components/Base'
import Typewriter from "typewriter-effect";
import blog from "../../assets/comp.svg"
import { getAllPosts } from "../../services/post-service";
import './home.css';
import Card from "./Card";

const Home = () => {

  const [postContent, setPostContent] = useState(null)

  useEffect(() => {
    getAllPosts().then((data) => {
      console.log(data);
      setPostContent(data)
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      {/* {JSON.stringify(postContent)} */}
      <div className="home-container">
        <div className="home-title">
          <h1>Latest Blogs</h1>
        </div>
        <div className="home-blogs">
          

          {postContent &&
            postContent?.content?.map((post) => {
              return (
                <div key={post.postId}>
                  <Card post={post} />
                </div>
              );
            })}

        </div>
      </div>
    </>
  );
};

export default Home;
