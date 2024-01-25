import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BlogForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [posts, setPosts] = useState([]);

  const onSubmit = data => {
    setPosts([...posts, data]);
    reset();
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

      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogForm;
