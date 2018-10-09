class ClickCounterButton extends React.Component{
  render(){
    return <button
      onClick={this.props.handler}
      className="btn btn-danger">
      Don't touch me with your dirty hands!
    </button>
  }
}