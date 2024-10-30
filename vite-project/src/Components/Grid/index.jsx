import "./style.css";

export function Grid({ photos }) {
  return (
    <div className="photoGrid">
      {photos.length > 0 ? (
        photos.map((photo, index) => (
          <img className="photo" key={index} src={photo.url} />
        ))
      ) : (
        <div className="noPhotos">No posts yet</div>
      )}
    </div>
  );
}
