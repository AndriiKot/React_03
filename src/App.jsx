import { useEffect, useState } from "react";
import "./App.css";
import "./Card/Card.css";
import CardsList from "./Card/CardsList";

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
      <CardsList />
    </div>
  );
}

export default App;
