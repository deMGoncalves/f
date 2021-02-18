import always from './always'
import isEmpty from '@/isEmpty'
import magic from '@/magic'
import or from '@/or'

jest.mock('@/isEmpty')
jest.mock('@/magic')
jest.mock('@/or')

describe('f.always', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('retorna uma funcao callback que sempre retorna o valor/referencia passado', function () {
    isEmpty.mockReturnValue(false)
    magic.mockReturnValue('f/always')
    or.mockImplementation((a, b) => a || b)

    const x = always('rex')

    expect(x).toBeInstanceOf(Function)
    expect(x()).toBe('rex')

    expect(isEmpty).toHaveBeenCalled()
    expect(isEmpty).toHaveBeenCalledTimes(1)
    expect(isEmpty).toHaveBeenCalledWith('rex')

    expect(magic).toHaveBeenCalled()
    expect(magic).toHaveBeenCalledTimes(1)
    expect(magic).toHaveBeenCalledWith('f/always')

    expect(or).toHaveBeenCalled()
    expect(or).toHaveBeenCalledTimes(1)
    expect(or).toHaveBeenCalledWith(undefined, 'rex')
  })

  test('retorna uma funcao callback que sempre retorna o valor/referencia do magic getter', function () {
    isEmpty.mockReturnValue(false)
    magic.mockReturnValue('f/always')
    or.mockImplementation((a, b) => a || b)

    const x = {
      get 'f/always' () {
        return 'rex'
      }
    }

    const y = always(x)

    expect(y).toBeInstanceOf(Function)
    expect(y()).toBe('rex')

    expect(isEmpty).toHaveBeenCalled()
    expect(isEmpty).toHaveBeenCalledTimes(1)
    expect(isEmpty).toHaveBeenCalledWith(x)

    expect(magic).toHaveBeenCalled()
    expect(magic).toHaveBeenCalledTimes(1)
    expect(magic).toHaveBeenCalledWith('f/always')

    expect(or).toHaveBeenCalled()
    expect(or).toHaveBeenCalledTimes(1)
    expect(or).toHaveBeenCalledWith('rex', x)
  })
})
