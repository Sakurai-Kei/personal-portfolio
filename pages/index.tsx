import Features from "../components/Features";
import Hero from "../components/Hero";
import PastProjects from "../components/PastProjects";
import blogApiProject from "../public/blogApiProject.png";
import chatApp from "../public/chatApp.png";

export default function Home<NextPage>() {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-gray-800 dark:text-white">
      <Hero />
      <Features />
      <PastProjects
        imgsrc={blogApiProject}
        alt="Blog API Project"
        title="Blog API Project"
        description="Lorem ipsum"
      />
      <PastProjects
        imgsrc={chatApp}
        alt="Chat App Project"
        title="Chat App Project"
        description="Placeholder content"
      />
    </div>
  );
}
