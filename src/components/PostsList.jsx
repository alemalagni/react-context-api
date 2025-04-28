import { useContext } from 'react';
import PostCard from './PostCard';
import { PostsContext } from '../contexts/PostsContext';

function PostsList({ posts }) {
    const { posts } = useContext(PostsContext);

    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} title={post.title} content={post.content} />
            ))}
        </div>
    );
}

export default PostsList;