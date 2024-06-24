import Card from "./Card";

export default function CardsList(props) {
  const { list } = props;
  return list.map((post) => (
    <Card
      key={post.id}
      title={post.title}
      body={post.body}
      userId={post.userId}
    />
  ));
}

