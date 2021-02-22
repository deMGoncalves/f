import curry from "./curry/index";
const exec = (pattern, target) => pattern.exec(target);
export default curry(exec);
