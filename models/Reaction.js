const { Schema, Types } = require("mongoose");
const reactionSchema = new Schema(
  {
    reactionID: {
      //use Mongoose's ObjectId type
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => {
        return createdAtVal.toLocaleDateString();
      },
    },
  },
  {
    toJSON: { getters: true },
    id: false,
  }
);
module.exports = reactionSchema;
