import Features from "../components/Features";
import Hero from "../components/Hero";
import PastProjects from "../components/PastProjects";
import { blogAPIProject, chatAppProject } from "../lib/projectObjects";

export default function Home<NextPage>() {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-gray-800 dark:text-white overflow-x-hidden">
      <Hero />
      <Features />
      <PastProjects
        id={blogAPIProject.id}
        imgsrc={blogAPIProject.imgsrc}
        alt={blogAPIProject.alt}
        title={blogAPIProject.title}
        description={blogAPIProject.description}
        repo={blogAPIProject.repo}
        liveDemo={blogAPIProject.liveDemo}
      />
      <PastProjects
        id={chatAppProject.id}
        imgsrc={chatAppProject.imgsrc}
        alt={chatAppProject.alt}
        title={chatAppProject.title}
        description={chatAppProject.description}
        repo={chatAppProject.repo}
        liveDemo={chatAppProject.liveDemo}
      />
    </div>
  );
}
