import Api from "./api.js";
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
        const response = await Api.get("/yeeps/");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getStars = async () => {
    try {
        const response = await Api.get("/stars/");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};