import { useChat } from '../utils/chatUtils';
import { ChatMessage } from '../components/chat/ChatMessage';
import { ChatInput } from '../components/chat/ChatInput';

const EchoAssistant = () => {
  const { messages, handleUserMessage } = useChat();

  return (
    <div className="p-6 h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Echo Assistant</h1>
      
      <div className="flex-1 bg-white rounded-lg shadow overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              text={message.text}
              isAI={message.isAI}
            />
          ))}
        </div>
        
        <ChatInput onSend={handleUserMessage} />
      </div>
    </div>
  );
};

export default EchoAssistant;