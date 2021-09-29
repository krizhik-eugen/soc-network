export const requiredField = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLength = (length: number) => (value: string) => {
    if (value.length > length) return `Max value is ${length} symbols`;
    return undefined
}