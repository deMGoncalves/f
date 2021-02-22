import curry from "./curry/index";
const replace = (x, y, z) => x.replace(y, z);
export default curry(replace);
