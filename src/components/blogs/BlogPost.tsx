import { useState, useCallback } from 'react';
import { BlogPost as BlogPostType, useBlogContext } from '../../contexts/BlogContext';

interface BlogPostProps {
    post: BlogPostType;
}

const BlogPost = ({ post }: BlogPostProps) => {
    const { updatePost, deletePost } = useBlogContext();
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(post.title);
    const [editedContent, setEditedContent] = useState(post.content);

    const handleEditClick = useCallback(() => {
        setIsEditing(true);
    }, []);

    const handleSaveClick = useCallback(() => {
        updatePost({ id: post.id, title: editedTitle, content: editedContent });
        setIsEditing(false);
    }, [post.id, editedTitle, editedContent, updatePost]);

    const handleDeleteClick = useCallback(() => {
        deletePost(post.id);
    }, [post.id, deletePost]);

    const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTitle(e.target.value);
    }, []);

    const handleContentChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditedContent(e.target.value);
    }, []);

    return (
        <div>
            {isEditing ? (
                <>
                    <input value={editedTitle} onChange={handleTitleChange} />
                    <textarea value={editedContent} onChange={handleContentChange} />
                    <button onClick={handleSaveClick}>保存</button>
                </>
            ) : (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <button onClick={handleEditClick}>編集</button>
                    <button onClick={handleDeleteClick}>削除</button>
                </>
            )}
        </div>
    );
}

export default BlogPost;
