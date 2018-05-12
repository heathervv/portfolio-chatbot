import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ type, content, user }) => (
  <div className={"message " + type}>
    <span>{`<${user}>`}</span>
    {content}
  </div>
)

Message.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  user: PropTypes.string
}

export default Message
