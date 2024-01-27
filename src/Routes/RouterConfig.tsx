import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogList from '../pages/BlogListPage';
import BlogForm from '../pages/BlogFormPage';

export const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/form" element={<BlogForm />} />
        </Routes>
    );
}
