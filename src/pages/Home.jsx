import { useEffect, useState } from "react";
import service from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authStatus) {
      service.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
  }, [authStatus]); // Only run effect when authStatus changes

  if (!authStatus) {
    return (
      <h1 className="text-2xl font-bold text-center p-16">
        Login to read posts
      </h1>
    );
  }

  if (posts.length === 0) {
    return (
      <h1 className="text-2xl font-bold text-center p-16">You can post now</h1>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
