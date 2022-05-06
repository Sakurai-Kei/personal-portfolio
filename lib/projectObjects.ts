import { StaticImageData } from "next/image";
import { PastProjectsComponent } from "../interfaces/PastProjectComponent";
import blogApiProject from "../public/blogApiProject.png";
import chatApp from "../public/chatApp.png";

const Project = (
  title: string,
  alt: string,
  imgsrc: StaticImageData,
  description: string,
  repo: string,
  liveDemo: string
) => {
  const project: PastProjectsComponent = {
    title,
    alt,
    imgsrc,
    description,
    repo,
    liveDemo,
  };

  return project;
};

const blogAPIProject = Project(
  "Blog API Project",
  "Blog API Project",
  blogApiProject,
  "A full-stack blog web app made with NextJs. User can register and log in to access the comment features in a post",
  "https://github.com/Sakurai-Kei/blog-api",
  "https://blog-api-zeta-drab.vercel.app/"
);

const chatAppProject = Project(
  "Chat App Project",
  "Chat App Project",
  chatApp,
  "A full-stack real-time chat web app made with React using Google Firebase as back-end. User can use their google accounts to log in and joins the global chat-room",
  "https://github.com/Sakurai-Kei/chat-app",
  "https://snap-chat-app-e9bd6.web.app/"
);

export { blogAPIProject, chatAppProject };
