import Card from "./Card";

export default function CardsList(props) {
  const { list } = props;
  console.log(list);
  console.log(Card)

  //   const { title, body } = props;
  //   return (
  //     <div className="card">
  //       <h3>{title}</h3>
  //       <p>{body}</p>
  //     </div>
  //   );
}

// {
//   posts.map((post) => (
//     <Card
//       key={post.id}
//       title={post.title}
//       body={post.body}
//       userId={post.userId}
//     />
//   ));
// }
