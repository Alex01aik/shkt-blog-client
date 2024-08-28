import PostCard from "../PostCard";
import "./styles.css";

export type PostsGridProps = {};

const PostsGrid: React.FC<PostsGridProps> = () => {
  return (
    <div className="post-grid">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default PostsGrid;
