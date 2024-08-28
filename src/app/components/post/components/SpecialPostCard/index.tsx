import Image from "next/image";
import "./styles.css";
import Button from "@/app/components/button";

export type SpecialPostCardProps = {};

const SpecialPostCard: React.FC<SpecialPostCardProps> = () => {
  return (
    <div className="special-post-card">
      <div className="special-post-header">
        <h1>Medium length hero heading goes here</h1>
        <div className="special-post-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <Button>Learn more</Button>
        </div>
      </div>
      <Image
        alt="post-img"
        src={"/placeholder.png"}
        width={1312}
        height={738}
        priority
      />
    </div>
  );
};

export default SpecialPostCard;
