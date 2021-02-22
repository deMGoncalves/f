import curry from "../curry/index";
import or from "../or";
import symbol from "./symbol";
const magic = (key) => (magic[key] = or(magic[key], symbol(key)));
export default curry(magic);
