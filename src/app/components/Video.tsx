export function Video(props: { src: string }) {
  const url = props.src.replace("watch?v=", "embed/");

  return (
    <div className="aspect-h-9 aspect-w-16 my-6 ">
      <iframe
        className="rounded-lg w-[500px] h-[300px]"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
