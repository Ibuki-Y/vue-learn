// index.htmlに対応
var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
  },
});
app4.todos.push({ text: "New item" });

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!",
  },
});

new Vue({
  data: {
    a: 1,
  },
  // アロー関数はthisを持たないため使わない
  // created, mounted, updated, destroyed
  created: function () {
    // `this` は vm インスタンスを指します
    console.log("a is: " + this.a);
  },
});
