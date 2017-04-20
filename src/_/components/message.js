import React, { Component } from 'react';

class Message extends Component {
    componentDidUpdate() {
        const links = document.querySelectorAll('.message a:not(.tracked)');

        for(let i = 0; i < links.length; i++) {
            links[i].classList.add('tracked');
            links[i].addEventListener('click', () => {
                this.props.openInNewTab(links[i].getAttribute('href'));
            });
        }
    }

    render() {
        let name = "";
        let staticContent = true;
        if(this.props.type === 'sent') {
            name = "<" + this.props.guest + ">";
            staticContent = true;
        } else if(this.props.type !== '') {
            name = "<Heather>";
            staticContent = false;
        }
        let content = {__html: this.props.content};

        return (
            <div className={"message " + this.props.type}>
                <span>{name}</span>
                {!staticContent &&
                    <p dangerouslySetInnerHTML={content}></p>
                }
                {staticContent && this.props.content}
            </div>
        );
    }
}

export default Message;
