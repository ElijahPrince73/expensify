console.log("utils.js is running");
//Prefered
//This works the same as the below export
const add = (a, b) => a + b
const square = (x) => x * x
const subtrack = (a, b) => a - b
//Can just use this one to export certain functions or just one and put in a default
// export {square, add, subtrack as default};

export {square, add};
//We can also export like the below function
// export const subtrack = (a, b) => a - b

//Another way to export a default]

export default subtrack
