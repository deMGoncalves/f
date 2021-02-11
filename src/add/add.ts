declare type Add = {
  __add__(): number
}

function add (x: number | Add, y: number | Add): number {
  return (x as number) + (y as number)
}

export default add
