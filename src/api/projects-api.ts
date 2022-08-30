import { ProjectsApi, GetProjectsResponse } from "@imtbl/core-sdk";

// get projects
export const getUserProjects = async (iMXSignature: string, iMXTimestamp: string): Promise<GetProjectsResponse> => {
    const projectApi = new ProjectsApi();
    const response = await projectApi.getProjects({
        iMXSignature,
        iMXTimestamp
    })
    return response.data;
};
