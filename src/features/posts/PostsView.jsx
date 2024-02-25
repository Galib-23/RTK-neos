import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postSlice";

const PostsView = () => {

    const {isLoading, posts, error} = useSelector((state) => state.posts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

  return (
    <div className="mt-8">
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>{error}</h3>}
      {posts && posts.map(post => <div className="bg-cyan-300 p-6 rounded-md mt-3 mx-10" key={post.id}>
            <h2 className="mt-4 font-bold text-2xl">{post.title}</h2>
            <p className="mt-1">{post.body}</p>
      </div>)}
    </div>
  )
}

export default PostsView
