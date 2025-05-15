import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  time: string;
}

const ChatDemo: React.FC = () => {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const webhookUrl = 'https://n8nwebhook.automatizacionesaiscend.com/webhook/landing';

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const formatTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!input.trim() || loading) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user' as const,
      time: formatTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("📬 webhook respondió:", data);
      // Si viene un array, toma el primer elemento
+ const payload = Array.isArray(data) ? data[0] : data;
+ const botResponse = {
+   id: messages.length + 2,
+   text: payload.response ?? payload.output ?? "I'm processing your request. Please allow me a moment.",
+   sender: 'assistant',
+   time: formatTime(),
+ };
      setMessages((prev) => [...prev, botResponse]);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      const botResponse = {
        id: messages.length + 2,
        text: "I apologize, but I'm having trouble connecting to the server. Please try again later.",
        sender: 'assistant' as const,
        time: formatTime(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl p-1 chat-container bg-dark-400 shadow-2xl">
          <div className="rounded-2xl overflow-hidden bg-dark-400 p-0">
            <div className="flex flex-col h-[500px]">
              <div className="bg-dark-300 px-4 py-3 flex items-center border-b border-dark-200">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                  <Bot size={24} className="gradient-icon" />
                </div>
                <div>
                  <h3 className="font-medium">AISCEND AI</h3>
                  <p className="text-xs text-white/60">Online</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    } message-appear`}
                  >
                    {message.sender === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0">
                        <Bot size={20} className="gradient-icon" />
                      </div>
                    )}
                    <div 
                      className={`rounded-2xl px-4 py-2 max-w-[80%] ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-dark-300 text-white'
                      }`}
                    >
                      <div className="flex items-center mb-1">
                        <span className="font-medium text-sm">
                          {message.sender === 'user' ? t('demo.you') : 'AISCEND'}
                        </span>
                        <span className="text-xs opacity-70 ml-2">{message.time}</span>
                      </div>
                      <p>{message.text}</p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary ml-2 flex-shrink-0">
                        <User size={20} className="gradient-icon" />
                      </div>
                    )}
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start message-appear">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2 flex-shrink-0">
                      <Bot size={20} className="gradient-icon" />
                    </div>
                    <div className="rounded-2xl px-4 py-3 max-w-[80%] bg-dark-300 text-white">
                      <div className="typing-animation flex space-x-1">
                        <span className="w-2 h-2 rounded-full bg-white/60"></span>
                        <span className="w-2 h-2 rounded-full bg-white/60"></span>
                        <span className="w-2 h-2 rounded-full bg-white/60"></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-dark-200">
                <form onSubmit={handleSendMessage} className="flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder={t('demo.placeholder')}
                    className="flex-1 bg-dark-300 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary text-white placeholder-white/50"
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className={`ml-2 w-10 h-10 rounded-full flex items-center justify-center ${
                      loading || !input.trim()
                        ? 'bg-primary/50 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary/90'
                    } text-white transition-colors`}
                  >
                    <Send size={18} className="gradient-icon" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;