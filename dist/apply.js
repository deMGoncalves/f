import curry from "./curry/index";
const apply = (target, args) => target(...args);
export default curry(apply);
