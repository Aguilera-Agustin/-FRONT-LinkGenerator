import moment from "moment";

export const getDateDiff = (createdAt) => {

    const a = moment(createdAt)
    const b = moment()
    return b.diff(a,'hours')

} 