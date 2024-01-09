
const removeNull = (obj: any) => {

    return Object.entries(obj)?.reduce((acc, el) =>  el[1] === null ? acc : {...acc, [el[0]]: el[1] } , {})
}
export default removeNull