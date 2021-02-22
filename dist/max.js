import arity from "./arity";
import curry from "./curry/index";
const max = (...args) => Math.max(...args);
export default curry(arity(2, max));
