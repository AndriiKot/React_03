import { useEffect, useState } from "react";

export default function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/post");
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      // console.error("Error fetching posts:", error);
      setError(error);
    }
  };

  // const fetchPosts = async () => {
  //   return fetch("https://jsonplaceholder.typicode.com/posts").then(
  //     (response) => response.json()
  //   );
  // };

  useEffect(() => {
    setLoading(true);
    fetchPosts()
      .then((data) => setPosts(data))
      .then(() => setLoading(false));
  }, []);

  return [posts, loading, error];
}
