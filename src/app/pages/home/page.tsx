import PostsGrid from "@/app/components/post/components/PostsGrid";
import SpecialPostCard from "@/app/components/post/components/SpecialPostCard";
import Section from "@/app/components/section";

export type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Section>
        <SpecialPostCard />
      </Section>
      <Section>
        <PostsGrid />
      </Section>
    </>
  );
};

export default HomePage;
