import React from "react";

export function MyHooks({ title }: {title: string}) {
    React.useEffect(() => {
        console.log('commponentDidMount')
        console.log('componentWillUpdate')
    })

    React.useEffect(() => {
        console.log('commponentDidMount')
        return () => {
            console.log('componentWillUnmount')
        }
    }, [])

    React.useEffect(() => {
        console.log('componentWillReceiveProps', title)
    }, [title])

    return (
        <div>{title}</div>
    )
}


//Свой хук 

function useIsMounted() {
    const [isMounted, setIsmounted] = React.useState(false)

    React.useEffect(() => {
        setIsmounted(true)
    }, [])

    return [isMounted]
}