import Api from "./api.js";

export const createYeeps = async (sign) => {
    try {
        const response = await Api.post("/yeeps/", {
            sign
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getYeets = async () => {
    try {
        const response = await Api.get("/yeets/");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getYeeps = async () => {
    try {
        const response = await Api.get("/yeeps/")
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getStars = async (yeetId=null) => {
    try {
        if (yeetId) {
            const response = await Api.get(`/stars/?yeet_id=${yeetId}`);
            return response.data;
        } else {
            const response = await Api.get("/stars/");
            return response.data;
        }
    } catch (error) {
        console.error(error);
    }
};

export const giveStars = async (yeetId) => {
    try {
        const response = await Api.post(`/stars/yeet/${yeetId}/yaaaaaay`, {
            yeep_id: "a58b9204-3c46-49e8-8ad6-d7caaab04b83",
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const takeStars = async (yeetId) => {
    try {
        const response = await Api.post(
            `/stars/yeet/${yeetId}/booooooo`, 
            {
                yeep_id: "a58b9204-3c46-49e8-8ad6-d7caaab04b83",
            });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const postYeets = async (yeepId, title, content) => {
    try {
        const response = await Api.post("/yeets/", {
            title,
            content,
            snippet: "Trash",
            slug: title.replaceAll(' ', '-').toLowerCase(),
            yeep_id: yeepId,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}