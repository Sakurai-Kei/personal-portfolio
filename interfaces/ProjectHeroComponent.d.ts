import { StaticImageData } from "next/image";

export interface ProjectHeroComponent {
  imgsrc: StaticImageData;
  alt: string;
  title: string;
  detailedDescription: string;
  liveDemo: string;
}
