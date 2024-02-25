import { useSelector } from "react-redux"

const PostsView = () => {

    const {isLoading, posts, error} = useSelector((state) => state.posts);

  return (
    <div className="mt-8">
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>{error}</h3>}
      {posts && posts.map(post => <div key={post.id}>
            <h2 className="mt-4 font-bold text-2xl">{post.title}</h2>
            <p className="mt-1">{post.body}</p>
      </div>)}
    </div>
  )
}

export default PostsView
