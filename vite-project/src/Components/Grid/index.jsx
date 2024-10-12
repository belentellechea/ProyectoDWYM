import "./style.css";

export function Grid({ photos }) {
  return (
    <div className="photoGrid">
      {photos.length > 0 ? (
        posts.map((post, index) => (
          <img className="photo" key={index} src={post.url} />
        ))
      ) : (
        <div className="noPhotos">No posts yet</div>
      )}
    </div>
  );
}
