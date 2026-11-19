
export interface ProjectModule {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  preview: "fortress" | "compass" | "personal";
  technologies: string[];
  modules: ProjectModule[];
  contributions: string[];
  architecture: string;
}
