import RevCard from "../RevCard/RevCard";

export default function RevImageGallery({ reviews }) {
  if (reviews.length === 0) {
    return <p>Not image please try again</p>;
  }
  return (
    <ul>
      {reviews.map((review) => (
        <RevCard key={review.id} review={review} />
      ))}
    </ul>
  );
}
