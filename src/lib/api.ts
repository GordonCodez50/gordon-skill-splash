import { Project } from "@/types/project";

const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/api/projects?populate=*`);
  const data = await response.json();
  return data.data.map((item: any) => ({
    id: item.id,
    ...item.attributes,
  }));
}

export async function fetchProjectById(id: string): Promise<Project> {
  const response = await fetch(`${API_URL}/api/projects/${id}?populate=*`);
  const data = await response.json();
  return {
    id: data.data.id,
    ...data.data.attributes,
  };
}