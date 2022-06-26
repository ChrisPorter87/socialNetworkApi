const { Schema, model } = require("mongoose");

const userSchema = new Schema({
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
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        );
      },
    },
  },
  thoughts: [
    {
      //array of _id values referencing the Thought model
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      //array of _id values referencing the User model(self-reference)
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
const User = model("User", userSchema);
module.exports = User;
