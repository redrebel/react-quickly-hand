const EnhanceButton = LoadWebsite(Button)
const EnhanceLink = LoadWebsite(Link)
const EnhanceLogo = LoadWebsite(Logo)

class Content extends React.Component {
  render() {
    return (
      <div>
        <EnhanceButton />
        <br />
        <br />
        <EnhanceLink />
        <br />
        <br />
        <EnhanceLogo />
        <br />
        <br />
        <iframe id="frame" src="" width="600" height="500" />
      </div>
    )
  }

}