import curry from "./curry/index";
const forEach = (target, callback) => target.forEach(callback);
export default curry(forEach);
