import NavigateButton from '../components/NavigateButton';
import BlogPostItem from '../components/blogs/BlogPost';
import { useBlogContext } from '../contexts/BlogContext';

const BlogListPage = () => {
    const { posts } = useBlogContext();

    return (
        <div>
            <NavigateButton to="/blog/form" text="新規投稿" />
            {posts.map(post => (
                <BlogPostItem key={post.id} post={post} />
            ))}
        </div>
    );
}

export default BlogListPage;
