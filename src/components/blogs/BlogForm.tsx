import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import NavigateButton from '../NavigateButton';
import { useBlogContext } from '../../contexts/BlogContext';

export interface BlogPost {
  title: string;
  content: string;
}

const BlogForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BlogPost>();
  const navigate = useNavigate();
  const { setPosts } = useBlogContext();

  const onSubmit = (data: BlogPost) => {
    setPosts(prevPosts => [...prevPosts, data]);
    reset();
    navigate('/blog'); // 投稿後に一覧画面にナビゲート
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title', { required: true })} placeholder="タイトル" />
        {errors.title && <span>タイトルは必須です</span>}

        <textarea {...register('content', { required: true })} placeholder="コンテンツ" />
        {errors.content && <span>コンテンツは必須です</span>}

        <button type="submit">投稿</button>
      </form>
      <NavigateButton to="/blog" text="戻る" />
    </div>
  );
}

export default BlogForm;
