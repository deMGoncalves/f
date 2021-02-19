import curry from "./curry/index";
const reduce = (x, y, z) => x.reduce(y, z);
export default curry(reduce);
