const { Post } = require("../models");

const postdata = [
  {
    title: "Javascript for pizza lovers",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: 1,
  },
  {
    title: "CSS for the impatient",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec. Sapien pellentesque habitant morbi tristique senectus et netus et. Ac felis donec et odio pellentesque diam volutpat commodo sed. Viverra mauris in aliquam sem. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Fames ac turpis egestas sed tempus. Iaculis urna id volutpat lacus laoreet non curabitur. Sed id semper risus in hendrerit. Lorem ipsum dolor sit amet consectetur adipiscing. Turpis egestas sed tempus urna et pharetra. Sollicitudin ac orci phasellus egestas. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Varius vel pharetra vel turpis nunc eget lorem. In hac habitasse platea dictumst quisque sagittis purus.",
    user_id: 2,
  },
  {
    title: "How to build a lightsaber with common household items",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed. Duis tristique sollicitudin nibh sit amet commodo. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Facilisis mauris sit amet massa. Nec sagittis aliquam malesuada bibendum arcu. Aenean et tortor at risus viverra adipiscing at in. At quis risus sed vulputate odio ut enim. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.",
    user_id: 3,
  },
  {
    title: "Computers of the future will honor their past",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Velit aliquet sagittis id consectetur purus ut. Mi eget mauris pharetra et. In metus vulputate eu scelerisque. Tellus molestie nunc non blandit massa enim nec dui nunc. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Dictum sit amet justo donec. Gravida dictum fusce ut placerat orci. Porttitor lacus luctus accumsan tortor posuere ac. Et ultrices neque ornare aenean euismod elementum nisi. Pulvinar mattis nunc sed blandit libero volutpat sed. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Vel pharetra vel turpis nunc.",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
