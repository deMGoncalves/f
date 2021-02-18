import _and from './_and'
import arity from '@/arity'
import curry from '@/curry'
import reduce from '@/reduce'

const and = (x, ...y) =>
  reduce(y, _and, x)

export default curry(arity(2, and))
