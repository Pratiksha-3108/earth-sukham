import { projectService } from '../services/project.service';

export async function fetchProjectsAction(params?: { status?: string; city?: string; query?: string }) {
  return await projectService.getAllProjects(params);
}
