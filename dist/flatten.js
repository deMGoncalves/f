import curry from "./curry/index";
const flatten = (array) => array.flat(Infinity);
export default curry(flatten);
