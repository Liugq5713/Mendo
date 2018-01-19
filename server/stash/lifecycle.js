constructor(props) {
    super(props)
}
componentWillMount() {
    console.log("componentWillMount", this.props.roomlist)
}
componentDidMount() {
    console.log("componentDidMount", this.props.roomlist)
}
componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props.roomlist)
}
componentWillUpdate() {
    console.log('componentWillUpdate', this.props.roomlist)
}
componentDidUpdate() {
    console.log('componentDidUpdate', this.props.roomlist)
}