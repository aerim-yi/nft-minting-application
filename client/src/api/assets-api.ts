import { AssetsApi, ListAssetsResponse } from "@imtbl/core-sdk";

// get a list of assets
export const getUserAssets = async (user: string): Promise<ListAssetsResponse> => {
    const assetApi = new AssetsApi();
    const response = await assetApi.listAssets({
        user
    })
    return response.data;
};
