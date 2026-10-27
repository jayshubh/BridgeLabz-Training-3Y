const user = {
  name: "Aarav",
  showName: () => console.log(this.name),
};

user.showName();
// Arrow functions capture `this` from the surrounding scope; they do not bind
// `this` to the object that calls them.
user.showName = function showName() {
  console.log(this.name);
};
user.showName();
