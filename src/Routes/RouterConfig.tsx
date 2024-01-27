import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import BlogForm from '../components/blogs/BlogForm';
import BlogList from '../components/blogs/BlogList';


export const RouterConfig:React.FC =() => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/form" element={<BlogForm />} />
        </Routes>
    );
}