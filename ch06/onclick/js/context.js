class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0 //초기상태를 0으로 설정한다.
    };
  }

  handleClick(event) {
    this.setState({ counter: ++this.state.counter }); // 카운터 값을 1씩 증가시킨다.
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { onClick: this.handleClick.hind(this),
          className: "btn btn-primary" },
        "Don't click me ",
        this.state.counter,
        " times!"
      )
    );
  }
}