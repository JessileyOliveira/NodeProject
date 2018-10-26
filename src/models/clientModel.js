const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _schema = {
    
		token: {
            type: String,
            required: true,
            index: {
                unique: false
            },
        },
        email: {
            type: String,
            required: true,
            default: true,
            index: {
                unique: false
            },
        },

        // groups:[{
        //         groupId:{
        //             type:String,
        //             required: true,
        //             index: {
        //                 unique: false
        //             },
        //         },
        //         groupName:{
        //             type:String,
        //             required: true,
        //             index: {
        //                 unique: false
        //             },
        //         groupStatus:{
        //             type:String,
        //             required: true,
        //             index: {
        //                 unique: false
        //             },
        //         },    
        //     }
           
        // }],

        // members: [{
    
        //     memberId:{
        //         type:String,
        //         required: true,
        //         index: {
        //             unique: false
        //         },
        //     },
        //     memberName:{
        //         type:String,
        //         required: true,
        //         index: {
        //             unique: false
        //         },
        //     }
        // }],         

        //JA TINHA ESSES DAQUI
        secret_google_auth: {
            type: String,
            default: null
        },
        two_fact_auth: {
            type: String,
            default: false
        }
    }

const ClientSchema = new Schema(_schema, { versionKey: false });
const ClientModel = db.model('Client', ClientSchema);

module.exports = ClientModel
