import arity from "./arity";
import curry from "./curry/index";
const frame = (target, ...args) => 
// window.requestAnimationFrame(() => target(...args))
target(...args);
export default curry(arity(2, frame));
