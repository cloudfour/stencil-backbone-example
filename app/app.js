var Todo = Backbone.Model.extend({
  defaults: function () {
    return {
      done: false,
      title: "Label text",
    };
  },
});

var TodoList = Backbone.Collection.extend({
  model: Todo,
});

var TodoView = Backbone.View.extend({
  tagName: "div",
  //   render: function () {
  //     // this.el.innerHTML = this.template(this.model.toJSON());
  //     return this;
  //   },
});

var todos = new TodoList([
  { done: true, title: "Example 1" },
  { title: "Example 2" },
  { title: "Example 3" },
]);

var todoViews = todos.map((model) => {
  const view = new TodoView({ model });
  console.log(view);
  return view;
});

// (╯°□°）╯︵ ┻━┻
