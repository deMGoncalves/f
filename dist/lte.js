import curry from "./curry/index";
const lte = (value, delimiter) => value <= delimiter;
export default curry(lte);
