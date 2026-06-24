export type ProjectCategory =
  | "Film"
  | "3D & Animation"
  | "Motion & Ads"
  | "Graphic & Brand"
  | "UI/UX"
  | "Content & Media";

export type ImageAspect = "landscape" | "portrait" | "square";

export interface ProjectImage {
  src: string;
  alt?: string;
  caption?: string;
  aspect?: ImageAspect;
  size?: "normal" | "large";
}

export interface ProjectImageSection {
  title: string;
  description?: string;
  images: ProjectImage[];
}

export interface ProjectVideo {
  url: string;
  title?: string;
}

export interface Project {
  id: string;
  title: string;
  categories: ProjectCategory[];
  subtitle: string;
  year: string;
  image: string;
  poster?: string;
  youtube?: string;
  youtubeVideos?: ProjectVideo[];
  watchLink?: string;
  watchLabel?: string;
  watchNote?: string;
  imageSections?: ProjectImageSection[];
  role: string;
  description: string;
  details?: {
    overview: string;
    specs: string;
    tools: string[];
    credits: { role: string; name: string }[];
  };
}

export interface Achievement {
  title: string;
  award: string;
  project: string;
  year: string;
}
