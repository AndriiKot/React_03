import { useEffect, useState } from "react";
import "./App.css";
import "./Card/Card.css";
import Card from "./Card/Card";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    );
  };

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className="cards-container">
      {posts.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  );
}

export default App;
