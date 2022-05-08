import { StaticImageData } from "next/image";
import { PastProjectsComponent } from "../interfaces/PastProjectComponent";
import blogApiProject from "../public/blogApiProject.png";
import chatApp from "../public/chatApp.png";

const projectList: PastProjectsComponent[] = [];

const responsiveDescription =
  "The web app is powered by Tailwind, easy-to-use and responsive-out-of-box css framework, allowing the web app to look nice on both mobile and desktop environment";

const Project = (
  id: string,
  title: string,
  alt: string,
  imgsrc: StaticImageData,
  description: string,
  detailedDescription: string,
  featuresDescription: string[],
  repo: string,
  liveDemo: string
) => {
  const project: PastProjectsComponent = {
    id,
    title,
    alt,
    imgsrc,
    description,
    detailedDescription,
    featuresDescription,
    repo,
    liveDemo,
  };
  projectList.push(project);

  return project;
};

const blogAPIProject = Project(
  "blog-api-project",
  "Blog API Project",
  "Blog API Project",
  blogApiProject,
  "A full-stack blog web app made with NextJs. User can register and log in to access the comment features in a post",
  "This project uses NextJs for its static site generation features such as automatic static optimisation. For the database, this web app uses MongoDB with the Mongoose library to perform CRUD tasks. For security purpose, the web app uses bcryptjs to encrypt user's password when they register. Lastly, the web app uses SWR library for data fetching purpose",
  [
    "With SWR, data fetch is done in the background while user browses the page and will update it seamlessly",
    responsiveDescription,
    "The web app is secured by using iron-session, ensuring that some API access can only be used by authorized user",
  ],
  "https://github.com/Sakurai-Kei/blog-api",
  "https://blog-api-zeta-drab.vercel.app/"
);

const chatAppProject = Project(
  "chat-app-project",
  "Chat App Project",
  "Chat App Project",
  chatApp,
  "A full-stack real-time chat web app made with React using Google Firebase as back-end. User can use their google accounts to log in and joins the global chat-room",
  "This project uses ReactJs library and react-router for its' front-end, and Google Firebase for its' back-end. Users may log in using their google account as the app makes use of Google's auth API to check for user's status. Only logged in user may access chat features",
  [
    "With ReactJs, the chat-room will be updated real-time seamlessly as the app stays subscribed to the incoming messages",
    responsiveDescription,
    "The web app is secured by using Google's Auth API, ensuring that some API access can only be used by authorized user",
  ],
  "https://github.com/Sakurai-Kei/chat-app",
  "https://snap-chat-app-e9bd6.web.app/"
);

export { projectList, blogAPIProject, chatAppProject };
