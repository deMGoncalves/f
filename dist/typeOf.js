import curry from "./curry/index";
const typeOf = (target) => typeof target;
export default curry(typeOf);
