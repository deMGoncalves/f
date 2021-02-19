import curry from "./curry/index";
const filter = (target, predicate) => target.filter(predicate);
export default curry(filter);
