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

export const postYeets = async (title, content) => {
    try {
        console.log(title);
        console.log(content);
        const response = await Api.post("/yeets/", {
            title,
            content,
            snippet: "Trash",
            slug: title.replaceAll(' ', '-').toLowerCase(),
            yeep_id: "a58b9204-3c46-49e8-8ad6-d7caaab04b83",
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}