import { useRouter } from "next/router";
import { projectList as importedProjectList } from "../../lib/projectObjects";
import ProjectHero from "../../components/ProjectHero";
import ProjectFeatures from "../../components/ProjectFeatures";

export default function Project<NextPage>() {
  const router = useRouter();
  const projectId = router.query.id;
  const projectList = importedProjectList;
  const project = projectList
    .filter((project) => {
      return project.id === projectId;
    })
    .pop();

  if (!project) {
    return (
      <div className="w-full min-h-screen flex justify-center text-white">
        No project found with provided id
      </div>
    );
  }
  const {
    title,
    alt,
    detailedDescription,
    featuresDescription,
    imgsrc,
    liveDemo,
  } = project;

  return (
    <div className="w-full min-h-screen flex flex-col">
      <ProjectHero
        imgsrc={imgsrc}
        alt={alt}
        title={title}
        detailedDescription={detailedDescription}
        liveDemo={liveDemo}
      />
      <ProjectFeatures featuresDescription={featuresDescription} />
    </div>
  );
}
