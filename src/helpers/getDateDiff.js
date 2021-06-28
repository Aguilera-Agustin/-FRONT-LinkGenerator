import moment from "moment";

export const isDateAvailable = (createdAt, duration) => {
    return(moment().isSameOrBefore(moment(createdAt).add(duration,'hour')))    
} 