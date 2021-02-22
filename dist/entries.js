import curry from "./curry/index";
const entries = (target) => Object.entries(target);
export default curry(entries);
