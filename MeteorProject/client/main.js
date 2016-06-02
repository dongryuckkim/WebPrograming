import '../imports/ui/body.js';

Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  notFoundTemplate: "notFound"
});

Router.route("/",{template: "home"});
Router.route("/Write",{template: "Write"});
Router.route("/MyCard",{template: "MyCard"});
Router.route("/Search",{template: "Search"});
Router.route("/posts/: _id",{name: "posts"});