import axios from "../services/axios.service";

export const getInfoData = async () => {

    try {
        let response = await axios.get("/information/get_info_data");
        return response;
    } catch (error) {
        console.log(error)
        return error.response.data;
    }
}