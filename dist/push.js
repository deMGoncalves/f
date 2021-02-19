import always from "./always/index";
import arity from "./arity";
import curry from "./curry/index";
const push = (x, ...y) => always(x)(x.push(...y));
export default curry(arity(2, push));
