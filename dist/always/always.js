import curry from "../curry/index";
import isEmpty from "../isEmpty";
import magic from "../magic/index";
import or from "../or";
const always = (value) => () => isEmpty(value)
    ? value
    : or(value[magic('f/always')], value);
export default curry(always);
