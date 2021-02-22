import curry from "./curry/index";
const len = (x) => Object.keys(x).length;
export default curry(len);
