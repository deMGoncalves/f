import curry from "./curry/index";
const indexOf = (x, y) => x.indexOf(y);
export default curry(indexOf);
