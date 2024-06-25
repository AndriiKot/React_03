import { useEffect, useState } from "react";

export default function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    );
  };

  useEffect(() => {
    setLoading(true);
    fetchPosts()
      .then((data) => setPosts(data))
      .then(() => setLoading(false));
  }, []);

  return [posts, loading];
}
