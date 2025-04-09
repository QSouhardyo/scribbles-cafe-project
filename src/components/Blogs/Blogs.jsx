import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookmarked, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data)
            )
    }, [])

    return (
        <div>
            <h1 className='text-3xl'>Total: {blogs.length}</h1>
            <div className="all-blogs grid grid-cols-2">
                {
                    blogs.map(blog => <Blog handleBookmarked={handleBookmarked} handleMarkAsRead={handleMarkAsRead} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;