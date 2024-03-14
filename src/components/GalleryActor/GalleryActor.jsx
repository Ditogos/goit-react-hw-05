import CardActor from "../CardActor/CardActor";

export default function GalleryActor({ data }) {
  return (
    <ul>
      {data.map((cardData) => (
        <CardActor key={cardData.id} data={cardData} />
      ))}
    </ul>
  );
}
