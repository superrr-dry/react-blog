import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';

// ブログ投稿の型定義
export interface BlogPost {
    id: number;
    title: string;
    content: string;
}

interface BlogContextProps {
    posts: BlogPost[];
    addPost: (newPost: Omit<BlogPost, 'id'>) => void;
    updatePost: (updatedPost: BlogPost) => void;
    deletePost: (postId: number) => void;
}

// コンテキストの作成
const BlogContext = createContext<BlogContextProps | undefined>(undefined);

// コンテキストを使用するためのカスタムフック
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

// ブログプロバイダコンポーネント
export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    const addPost = useCallback((newPost: Omit<BlogPost, 'id'>) => {
        setPosts(prevPosts => [...prevPosts, { ...newPost, id: Date.now() }]);
    }, []);

    const updatePost = useCallback((updatedPost: BlogPost) => {
        setPosts(prevPosts => prevPosts.map(post => post.id === updatedPost.id ? updatedPost : post));
    }, []);

    const deletePost = useCallback((postId: number) => {
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    }, []);

    return (
        <BlogContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
            {children}
        </BlogContext.Provider>
    );
}
