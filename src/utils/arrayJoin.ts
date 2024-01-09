
export const arrayJoin = (arr: string[] | number[],separator: string = ', ') => {
  if(!arr.length) return ''
  return arr.join(separator)
}