import curry from "./curry/index";
const map = (target, callback) => target.map(callback);
export default curry(map);
