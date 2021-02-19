import curry from '@/curry'
import isEmpty from '@/isEmpty'
import magic from '@/magic'
import or from '@/or'

const always = (value) =>
  () => isEmpty(value)
    ? value
    : or(value[magic('f/always')], value)

export default curry(always)
