import PostsList from './PostsList';

function PostsPage({ posts }) {
    return (
        <div>
            <h1>Lista dei Post</h1>
            <PostsList posts={posts} />
        </div>
    );
}

export default PostsPage;