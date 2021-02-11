declare type Add = {
  __add__(): number
}

function add (...args: Array<number|Add>): number {
  return args.reduce<number>(reducer, 0)
}

function reducer (x: number, y: number | Add): number {
  return x + (y as number)
}

export default add
