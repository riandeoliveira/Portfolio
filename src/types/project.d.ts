import type { SkillType } from "./skill";

export interface IProjectRepository {
  url?: string;
  isPrivate: boolean;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  skillList: SkillType[];
  websiteUrl: string;
  repository: IProjectRepository;
}
