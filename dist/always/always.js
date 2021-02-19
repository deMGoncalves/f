import curry from "../curry/index";
import isEmpty from "../isEmpty";
import magic from "../magic/index";
import or from "../or";
const always = (x) => () => isEmpty(x)
    ? x
    : or(x[magic('f/always')], x);
export default curry(always);
