import { Project, LocationItem, DeveloperPartner } from '../types';

export const projectService = {
  async getAllProjects(params?: { status?: string; city?: string; query?: string }): Promise<Project[]> {
    const queryParams = new URLSearchParams();
    if (params?.status) queryParams.set('status', params.status);
    if (params?.city) queryParams.set('city', params.city);
    if (params?.query) queryParams.set('query', params.query);

    const res = await fetch(`/api/projects?${queryParams.toString()}`);
    const data = await res.json();
    return data.data || [];
  },

  async getLocations(): Promise<LocationItem[]> {
    const res = await fetch('/api/locations');
    const data = await res.json();
    return data.data || [];
  },

  async getDevelopers(): Promise<DeveloperPartner[]> {
    const res = await fetch('/api/developers');
    const data = await res.json();
    return data.data || [];
  }
};
