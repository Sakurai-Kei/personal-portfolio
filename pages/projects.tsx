import PastProjects from "../components/PastProjects";
import { blogAPIProject, chatAppProject } from "../lib/projectObjects";

export default function Projects<NextPage>() {
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-slate-900 to-pink-900 text-white items-center">
      <PastProjects
        imgsrc={blogAPIProject.imgsrc}
        alt={blogAPIProject.alt}
        title={blogAPIProject.title}
        description={blogAPIProject.description}
        repo={blogAPIProject.repo}
        liveDemo={blogAPIProject.liveDemo}
      />
      <PastProjects
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
