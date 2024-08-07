let obj = {
    name: "Sameer",
    age: 19,
    greet: function () {
        console.log("Hello " + this.name);
    }
}
module.exports = obj