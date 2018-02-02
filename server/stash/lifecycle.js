constructor(props) {
    super(props)
}
// 生命周期检测开始
componentWillMount() {
    console.log("componentWillMount", this.props.username)
}
componentDidMount() {
    console.log("componentDidMount", this.props.username)
}
componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props.username)
}
componentWillUpdate() {
    console.log('componentWillUpdate', this.props.username)
}
componentDidUpdate() {
    console.log('componentDidUpdate', this.props.username)
}

  // 生命周期检测结束