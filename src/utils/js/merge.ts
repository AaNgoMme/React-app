export function merge(obj: Object) {
    return (obj2: Object) => ({
        ...obj,
        ...obj2
    })
}