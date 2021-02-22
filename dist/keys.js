import curry from "./curry/index";
const keys = (target) => Object.keys(target);
export default curry(keys);
