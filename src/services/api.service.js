import axios from "../services/axios.service";

export const getTitleData = async () => {

    try {
        let response = await axios.get("/get_title_data");
        return response;
    } catch (error) {
        console.log(error)
        return error.response.data;
    }
}