import zeroParameter from "./zeroParameter/index";
import oneParameter from "./oneParameter/index";
import twoParameters from "./twoParameters/index";
import threeParameters from "./threeParameters/index";
import throwParameters from "./throwParameters/index";
export default (target) => ([zeroParameter, oneParameter, twoParameters, threeParameters][target.length] || throwParameters)(target);
