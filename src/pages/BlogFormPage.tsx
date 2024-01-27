import React from 'react';
import { useForm } from 'react-hook-form';
import NavigateButton from '../components/NavigateButton';
import { BlogPost, useBlogContext } from '../contexts/BlogContext';

const BlogFormPage: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BlogPost>();
  const { addPost } = useBlogContext();

  const onSubmit = (data: BlogPost) => {
    addPost(data);
    reset();
    // 投稿後にブログ一覧にナビゲート
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

export default BlogFormPage;
