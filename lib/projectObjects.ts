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
  "chat-app-with-nextjs",
  "Chat App With NextJs",
  "Chat App with NextJs",
  chatApp,
  "A full-stack chat web app made with NextJs, MongoDB database, iron-session for auth state and bcryptjs for hashing passwords. Now supports file hosting with AWS S3",
  "A full-stack app made with NextJs. The app features group creation and private chat instances with other user. As this is a prototype app, the app does not check if the provided email is legit. This app does hash user's password with bcryptjs to improve account security. Auth state across the app is possible using iron-session. The web app supports both image and video(mp4) sharing from i.imgur.com domain. Furthermore, the web app supports file hosting(image only) using AWS S3 storage. With it, user can share their pictures with other people and even use it to change their profile picture and group pictures! Do note, however, content of a message is not encrypted and as such, anyone with access to the database can view the content of a message. Data fetching is made with SWR for efficient real-time data fetching. More features to come!",
  [
    "With React and SWR, the chat-room will be updated real-time seamlessly as the app stays subscribed to the incoming messages",
    responsiveDescription,
    "The web app session is secured by using iron-session, ensuring that some API access can only be used by authorized user",
  ],
  "https://github.com/Sakurai-Kei/chat-app-with-nextjs",
  "https://chat-app-with-nextjs.netlify.app/"
);

export { projectList, blogAPIProject, chatAppProject };
