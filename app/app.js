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
  tagName: "p",
  render: function () {
    this.el.innerHTML = this.template(this.model.toJSON());
    return this;
  },
  template: ({ done, title }) => `
    <my-component checked="${done}">${title}</my-component>
  `,
});

var todos = new TodoList([
  { done: true, title: "Example 1" },
  { title: "Example 2" },
  { title: "Example 3" },
]);

const AppView = Backbone.View.extend({
  el: $("#app"),
  initialize: function () {
    todos.each(function (todo) {
      var view = new TodoView({ model: todo });
      this.el.append(view.render().el);
    }, this);
  },
});

new AppView();
