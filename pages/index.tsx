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
        description="A full-stack blog web app made with NextJs. User can register and log in to access the comment features in a post"
        repo="https://github.com/Sakurai-Kei/blog-api"
        liveDemo="https://blog-api-zeta-drab.vercel.app/"
      />
      <PastProjects
        imgsrc={chatApp}
        alt="Chat App Project"
        title="Chat App Project"
        description="A full-stack real-time chat web app made with React using Google Firebase as back-end. User can use their google accounts to log in and joins the global chat-room"
        repo="https://github.com/Sakurai-Kei/chat-app"
        liveDemo="https://snap-chat-app-e9bd6.web.app/"
      />
    </div>
  );
}
