const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const memberCommitteeSchema=new Schema({
    committeeName: {
        type: String,
        required: true,
      },
      committeeRole: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
      optionalField: {
        type: String,
        required: true,
      },
      professor_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Professor",


      }
})

module.exports=mongoose.model('MemberCommittee',memberCommitteeSchema)