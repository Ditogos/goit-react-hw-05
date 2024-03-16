export default function RevCard({ review }) {
  return (
    <li>
      <h3>Author: {review.author}</h3>
      <p>Created: {new Date(review.created_at).toLocaleString()}</p>
      <p>{review.content}</p>
      <a href={review.url} target="_blank" rel="noopener noreferrer"></a>
    </li>
  );
}
