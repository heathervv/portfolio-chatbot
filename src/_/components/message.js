import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
  constructor() {
    super();

    this.openInNewTab = this.openInNewTab.bind(this);
  }
  
  openInNewTab(e) {
    const nodes = Array.prototype.slice.call( e.currentTarget.children );
    const index = nodes.indexOf( e.target );
    const linkValue = nodes[index].href;

    this.props.openInNewTab(linkValue);
  }

  render() {
    const name = (this.props.type === 'sent') ? "<" + this.props.guest + ">" : (this.props.type !== '') ? "<Heather>" : "";
    const content = {__html: this.props.content};

    return (
      <div className={"message " + this.props.type}>
        <span>{name}</span>
        {
          this.props.type !== '' &&
          this.props.type !== 'sent' &&
          <p dangerouslySetInnerHTML={content} onClick={this.openInNewTab} />
        }
        {
          this.props.type === 'sent' &&
          this.props.content
        }
      </div>
    );
  }
}

Message.propTypes = {
  openInNewTab: PropTypes.func,
  type: PropTypes.string,
  content: PropTypes.string,
  guest: PropTypes.string
};

export default Message;
