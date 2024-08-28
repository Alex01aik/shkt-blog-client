import Image from "next/image";
import "./styles.css";
import Link from "next/link";

export type PostCardProps = {};

const PostCard: React.FC<PostCardProps> = () => {
  return (
    <div className="post-card">
      <Image
        alt="post-img"
        src={"/placeholder.png"}
        width={406}
        height={240}
        priority
      />
      <div className="post-card-content">
        <h5>Premium Quality Hookah Products</h5>
        <p>
          Our hookahs are expertly crafted, providing smooth and flavorful
          smoke.
        </p>
      </div>
      <Link href={"/"}>{`Learn more >`}</Link>
    </div>
  );
};

export default PostCard;
