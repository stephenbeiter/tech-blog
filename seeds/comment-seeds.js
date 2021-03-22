const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Excellent post!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Couldn't agree more!",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "So cool!",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: "Thanks for sharing!",
    user_id: 2,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);
module.exports = seedComments;
