import curry from "./curry/index";
const subtract = (x, y) => x - y;
export default curry(subtract);
