export const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/

export default (email : string) => emailRegex.test(email)


export const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
