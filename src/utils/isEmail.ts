export const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/

export default (email : string) => emailRegex.test(email)