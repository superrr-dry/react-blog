// BlogContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { BlogPost } from '../components/blogs/BlogForm';

interface BlogContextProps {
    posts: BlogPost[];
    setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
}

const BlogContext = createContext<BlogContextProps | null>(null);

export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error('useBlogContext must be used within a BlogProvider');
    }
    return context;
}

interface BlogProviderProps {
    children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    return (
        <BlogContext.Provider value={{ posts, setPosts }}>
            {children}
        </BlogContext.Provider>
    );
}
