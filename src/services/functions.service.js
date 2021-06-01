export const dataExtractor = (data) => {

    const getPerson = (order) => {
        return {
            person_name: data[data.findIndex(item => item.type == "team_person_name" && item.order == order)],
            person_linkedin: data[data.findIndex(item => item.type == "team_person_linkedin" && item.order == order)],
            person_function: data[data.findIndex(item => item.type == "team_person_function" && item.order == order)],
            person_photo_url: data[data.findIndex(item => item.type == "team_person_photo_url" && item.order == order)],
            person_photo_is_loaded: false,
        }
    }

    return {
        main_title_h1: data[data.findIndex(item => item.type == "main_title_h1")],
        main_title_h2: data[data.findIndex(item => item.type == "main_title_h2")],
        be_facilitator_title: data[data.findIndex(item => item.type == "be_facilitator_title")],
        be_facilitator_description: data[data.findIndex(item => item.type == "be_facilitator_description")],
        be_mentor_title: data[data.findIndex(item => item.type == "be_mentor_title")],
        be_mentor_description: data[data.findIndex(item => item.type == "be_mentor_description")],
        be_facilitator_benefits: data.filter(item => item.type == "be_facilitator_benefits"),
        be_mentor_benefits: data.filter(item => item.type == "be_mentor_benefits"),
        step_facilitator: data.filter(item => item.type == "step_facilitator"),
        step_mentor: data.filter(item => item.type == "step_mentor"),
        step_facilitator_video_url: data[data.findIndex(item => item.type == "step_facilitator_video_url")],
        softskills_title: data[data.findIndex(item => item.type == "softskills_title")],
        softskills_description: data[data.findIndex(item => item.type == "softskills_description")],
        hardskills_title: data[data.findIndex(item => item.type == "hardskills_title")],
        hardskills_description: data[data.findIndex(item => item.type == "hardskills_description")],
        softskills_item: data.filter(item => item.type == "softskills_item"),
        hardskills_item: data.filter(item => item.type == "hardskills_item"),
        team_persons: data.filter(item => item.type == "team_person_name"),
        getPerson
    }
}