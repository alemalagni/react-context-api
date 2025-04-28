import PostCard from './PostCard';

function PostsList({ posts }) {
    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} title={post.title} content={post.content} />
            ))}
        </div>
    );
}

export default PostsList;