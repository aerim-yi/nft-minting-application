import { ProjectsApi, GetProjectsResponse, signRaw, L1Signer } from "@imtbl/core-sdk";

// get projects
export const getUserProjects = async (iMXSignature: string, iMXTimestamp: string): Promise<GetProjectsResponse> => {
    const projectApi = new ProjectsApi();
    const response = await projectApi.getProjects({
        iMXSignature,
        iMXTimestamp
    })
    return response.data;
};

// create a new project
export const createProject = async (signer: L1Signer, companyName: string, email: string, projectName: string) => {
    const projectApi = new ProjectsApi();
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const signature = await signRaw(timestamp, signer);
    const response = await projectApi.createProject({
        createProjectRequest: {
            'company_name': companyName,
            'contact_email': email,
            'name': projectName
        },
        iMXSignature: signature,
        iMXTimestamp: timestamp
    })
    return response.data;
}
