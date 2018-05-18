import {Schema} from 'mongoose';



export const Community = {
    name : {
        type : String,
        required : true
    },
    parentCommunityId: Schema.Types.ObjectId,

    // TODO: geolocation type

    // constants.COMMUNITY_TYPE - COUNTRY, STATE, REGION, SCHOOL
    type : String,

    leaderId: Schema.Types.ObjectId,

    createdBy: Schema.Types.ObjectId
};

export const User_Community = {
    userId : {
        required : true,
        type : Schema.Types.ObjectId
    },
    communityId : {
        required : true,
        type : Schema.Types.ObjectId
    }
};