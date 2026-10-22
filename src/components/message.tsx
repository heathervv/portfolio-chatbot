interface MessageProps {
  type?: string;
  content?: string;
  user?: string;
}

const Message = ({ type = '', content = '', user = '' }: MessageProps) => (
  <div className={`message ${type}`}>
    <span className="username">{`<${user}>`}</span>
    <div>{content}</div>
  </div>
);

export default Message;
