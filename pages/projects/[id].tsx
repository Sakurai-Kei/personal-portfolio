import { useRouter } from "next/router";
import { PastProjectsComponent } from "../../interfaces/PastProjectComponent";
import { projectList as importedProjectList } from "../../lib/projectObjects";
import ProjectHero from "../../components/ProjectHero";
import ProjectFeatures from "../../components/ProjectFeatures";

export default function Project<NextPage>() {
  const router = useRouter();
  const projectId = router.query.id;
  const projectList = importedProjectList;
  const project = projectList.filter((project) => {
    return project.id === projectId;
  });
  if (!project.at(0)) {
    return (
      <div className="w-full flex justify-center text-white ">Loading</div>
    );
  } else {
    const {
      id,
      title,
      alt,
      description,
      detailedDescription,
      featuresDescription,
      imgsrc,
      repo,
      liveDemo,
    } = project.at(0) as PastProjectsComponent;

    return (
      <div className="w-full flex flex-col">
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
}
