import React from 'react'
import PropTypes from 'prop-types'
import Linkify from 'react-linkify'

const Message = ({ type, content, user }) => (
  <div className={`message ${type}`}>
    <span className="username">{`<${user}>`}</span>
    <Linkify>
      {content}
    </Linkify>
  </div>
)

Message.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  user: PropTypes.string
}

export default Message
