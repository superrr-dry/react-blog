// BlogList.tsx
import React from 'react';
import NavigateButton from '../NavigateButton';
import { useBlogContext } from '../../contexts/BlogContext';

const BlogList: React.FC = () => {
    const { posts } = useBlogContext();

    return (
        <div>
            <NavigateButton to="/blog/form" text="新規投稿" />
            {posts.map((post, index) => (
                <div key={index}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
