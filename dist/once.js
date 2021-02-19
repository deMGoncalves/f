import always from "./always/index";
import curry from "./curry/index";
const once = (target) => (...args) => always(target(...args))(target = always(undefined));
export default curry(once);
