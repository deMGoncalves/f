import curry from "./curry/index";
const find = (target, predicate) => target.find(predicate);
export default curry(find);
