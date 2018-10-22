const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Hedellen', {useMongoClient: true});
const Schema = mongoose.Schema

const _schema = {
    
		language: {
            type: String,
            required: true,
            index: {
                unique: false
            },
        },
        status: {
            type: Boolean,
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

const PersonSchema = new Schema(_schema, { versionKey: false });
const PersonModel = mongoose.model('Person', PersonSchema);

module.exports = PersonModel
