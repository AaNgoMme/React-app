function pipe<U>( ...fns: Function[]) {
    return <E,>(initialValue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}

function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop]
}

const some = pick('value')({value: 1}) //1

function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right
}

const comments = [{ id: 22, text: 'text One'}, { id: 44, text: 'text Two'}]

const createFilterBy = (prop: string) => 
(id: number) => pipe(pick(prop), isEqual(id), cond)

const filterWithId = createFilterBy('id')
const filterByValue = createFilterBy('value')

const filteredComments = comments.filter(filterByValue(22))

function cond(b: boolean) {   
    return !b
}    //функция не


const getValueNumber = pipe<number>(
    pick('currentTarget'),
    pick('value'),
    parseInt
)