const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    //make length between 1 and 280 characters
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //use getter method to format the timestamp on query
    get: (createdAtVal) => {
      return createdAtVal.toLocaleDateString();
    },
  },
  username: {
    type: String,
    required: true,
  },
  //array of nested documents created with the reactionSchema
  reaction: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reaction",
    },
  ],
});
