

export const required = value => {
    if (value) return undefined
        // По правилам библиотеки redux-form, когда к нам 
        // возвращается undefined, значит никакой ошибки нет
        // и нам позволят совершить onSubmit
    
        return 'Field is required'
        // В противном случае onSubmit не выполнится, а в meta.error,
        // запишется текст который мы передадим. 
    }

export const maxLength = (max) => (value) => {
    if (value.length > max) return `Max length: ${max}`;
    return undefined

    
}
