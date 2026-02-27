import Linkify from 'react-linkify';

interface MessageProps {
  type?: string;
  content?: string;
  user?: string;
}

const Message = ({ type = '', content = '', user = '' }: MessageProps) => (
  <div className={`message ${type}`}>
    <span className="username">{`<${user}>`}</span>
    <Linkify>{content}</Linkify>
  </div>
);

export default Message;
