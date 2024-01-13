import React from 'react'

interface ILifecycleProps {
    someProp: number
}

interface ILifecycleState {
    stateField: number
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
    constructor(props: ILifecycleProps) {
        super(props)

        this.state = {stateField: 0}
        /* this.handleClick = this.handleClick.bind(this) */
    }

    static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
        return { stateField: props.someProp }
    }

    public shouldComponentUpdate(  //сравнивает предыдущее и настоящее состояния 
        nextProps: Readonly<ILifecycleProps>,
        nextState: Readonly<ILifecycleState>,
        nextContext: any): boolean {
        return this.state != nextState || this.props != nextProps
    }

    public render() {
        return <div onClick={this.handleClick}>1</div>
    }

    public getSnapshotBeforeUpdate(    //запишет инфо до обновы
        prevProps: Readonly<ILifecycleProps>,
        prevState: Readonly<ILifecycleState>)
    {
        return 12312
    }

    public componentDidUpdate(   //что то сделает с записаной инфой до обновы
        prevProps: Readonly<ILifecycleProps>,
        prevState: Readonly<ILifecycleState>,
        snapshot?: any): void 
    {
        if (snapshot > 1000) {
            this.setState({})
        }
    }


    public componentDidMount(): void {
        /* document.addEventListener('resize', () => {}) */
    }

    private handleClick = () => {
        this.setState({stateField: 1 })
    }
}