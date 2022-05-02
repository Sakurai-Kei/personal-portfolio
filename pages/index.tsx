import Features from "../components/Features";
import Hero from "../components/Hero";
import PastProjects from "../components/PastProjects";

export default function Home<NextPage>() {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-gray-800 dark:text-white">
      <Hero />
      <Features />
      <PastProjects />
    </div>
  );
}
