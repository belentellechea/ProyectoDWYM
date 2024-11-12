import "./style.css";

export function Grid({ posts }) {

  return (
    <div className="photoGrid" >
      {posts?.length > 0 ? (
        posts?.map((post, index) => (
          <>
            <img className="photo" key={index} src={`http://localhost:3001/${post.imageUrl}`} onClick={() => console.log(post.imageUrl)} />
          </>
        ))
      ) : (
        <div className="noPhotos">No posts yet</div>
      )}
    </div>
  );
}
//http://localhost:5173