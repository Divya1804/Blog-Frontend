import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button, Input, Toast } from "reactstrap";
import "./post.css";
import { loadAllCategories } from "../../services/Category-service";
import JoditEditor, { Jodit } from 'jodit-react';
import { createPost as doCreatePost } from "../../services/post-service";
import { getCurrentUserDetails } from "../../auth";
import { toast } from "react-toastify";

const Post = () => {
    const [category, setCategory] = useState([]);
    const editor = useRef(null)

    const [post, setPost] = useState({
        postTitle: '',
        postDescription: '',
        categoryId: ''
    })

    const [user, setUser] = useState(undefined);

    const config = useMemo(() => {
        return {
            height: 240,
            toolbarAdaptive: false
        }
    }, [])

    useEffect(() => {
        setUser(getCurrentUserDetails())
        loadAllCategories()
            .then((data) => {
                // console.log(data);
                setCategory(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const fieldChange = (event) => {
        event.preventDefault();
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const contentFieldChange = (event) => {
        setPost({ ...post, 'postDescription': event })
    }

    const createPost = (event) => {
        event.preventDefault();
        if (post.postTitle.trim() === '') {
            toast.error("Title is missing")
            return;
        }
        if (post.postDescription.trim() === '' || post.postDescription === '<p><br></p>') {
            toast.error("Description is missing")
            return;
        }
        if (post.categoryId.trim() === '') {
            toast.error("Category is missing")
            return;
        }
        console.log("Post created");

        post['userId'] = user.userId;
        doCreatePost(post).then((data) => {
            toast.success("post created successfully")
            setPost({
                postTitle: '',
                postDescription: '',
                categoryId: ''
            })
            // console.log(data);
        }).catch((error) => {
            toast.error("Error while creating post")
            console.log(error)
        })

    }


    return (
        <>
            {/* {JSON.stringify(post)} */}
            <div className="post-container">
                <div className="title-post">
                    <h1>Create Your Blog</h1>
                </div>
                <div className="post-form">
                    <form onSubmit={createPost} method="post" className="p-form">
                        <div className="box-post">
                            <label htmlFor="title">Title</label>
                            <Input
                                className="title"
                                type="text"
                                name="postTitle"
                                id="title"
                                placeholder="Enter Your Title"
                                onChange={fieldChange}
                            // value={data.title}
                            />
                        </div>
                        <div className="box-post">
                            <label htmlFor="content">Post Content</label>

                            <JoditEditor
                                className="editor"
                                ref={editor}
                                // value= {post.postDescription}
                                config={config}
                                onChange={contentFieldChange}
                            />
                        </div>
                        <div className="box-post">
                            <label htmlFor="category">Category</label>
                            <Input
                                id="exampleSelect"
                                name="categoryId"
                                type="select"
                                className="category"
                                onChange={fieldChange}
                                defaultValue={0}
                            >
                                <option className="category-option" value={0} disabled>Select Category</option>
                                {category.map((cat) => {
                                    return (
                                        <option className="category-option" value={cat.catId} key={cat.catId}>
                                            {cat.catName}
                                        </option>
                                    );
                                })}
                            </Input>
                        </div>
                        <div className="box-post post-btn">
                            <Input type="submit" className="btn" value={'Publish Post'} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Post;
