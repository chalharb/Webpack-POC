var WebpackConfiguration = require('./WebpackConfiguration');
const blogConfig = new WebpackConfiguration("blog", "./blog/js/blog.js", "./blog/js/", "../less/");
const newsroomConfig = new WebpackConfiguration("newsroom", "./newsroom/js/newsroom.js", "./newsroom/js/", "../less/");

module.exports = [
	blogConfig.getConfiguration,
	newsroomConfig.getConfiguration
];