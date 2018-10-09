const EnhanceButton = LoadWebsite(Button);
const EnhanceLink = LoadWebsite(Link);
const EnhanceLogo = LoadWebsite(Logo);

class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(EnhanceButton, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(EnhanceLink, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(EnhanceLogo, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement("iframe", { id: "frame", src: "", width: "600", height: "500" })
    );
  }

}