import React from "react";
import scrollToElement from "scroll-to-element";

class ScrollToElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: ""
    }
  }

  componentDidMount() {
    this.scroll();
  }

  scroll = () => {
    if (this.props && this.props.location) {
      const { hash } = this.props.location;
      if (hash && this.state.hash !== hash) {
        this.setState({ hash }, () => {
          scrollToElement(hash, { duration: 100 } )
        })
      }
    }
  }

  render = (props) => {
    this.scroll();
    return <div/>;
  }
}

export default ScrollToElement;
