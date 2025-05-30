import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageSquare, MapPin, Image, ShoppingCart, CreditCard, ChefHat, Database, Bot, Send, User } from 'lucide-react';
import Particles from './Particles';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-dark-300 p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <div className="gradient-icon">{icon}</div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  hours: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ title, price, description, features, hours }) => (
  <div className="bg-dark-300 p-6 rounded-xl">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="text-2xl font-bold text-primary mb-2">{price}</div>
    <p className="text-sm text-white/70 mb-4">{hours}</p>
    <p className="mb-4 text-white/70">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm">
          <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-2">✓</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  time: string;
}

const RestaurantAutomation: React.FC = () => {
  const { t } = useLanguage();
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [loading, setLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const webhookUrl = 'https://n8nwebhook.automatizacionesaiscend.com/webhook/restaurant';

  React.useEffect(() => {
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

      const payload = Array.isArray(data) ? data[0] : data;
      const botResponse = {
        id: messages.length + 2,
        text: payload.response ?? payload.output ?? "I'm processing your request. Please allow me a moment.",
        sender: 'assistant',
        time: formatTime(),
      };
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

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: t('restaurant.feature1.title'),
      description: t('restaurant.feature1.desc')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('restaurant.feature2.title'),
      description: t('restaurant.feature2.desc')
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: t('restaurant.feature3.title'),
      description: t('restaurant.feature3.desc')
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: t('restaurant.feature4.title'),
      description: t('restaurant.feature4.desc')
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: t('restaurant.feature5.title'),
      description: t('restaurant.feature5.desc')
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: t('restaurant.feature6.title'),
      description: t('restaurant.feature6.desc')
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: t('restaurant.feature7.title'),
      description: t('restaurant.feature7.desc')
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: t('restaurant.feature8.title'),
      description: t('restaurant.feature8.desc')
    }
  ];

  const supportTiers = [
    {
      title: t('restaurant.basic.title'),
      price: t('restaurant.basic.price'),
      hours: t('restaurant.basic.hours'),
      description: t('restaurant.basic.desc'),
      features: t('restaurant.basic.features')
    },
    {
      title: t('restaurant.technical.title'),
      price: t('restaurant.technical.price'),
      hours: t('restaurant.technical.hours'),
      description: t('restaurant.technical.desc'),
      features: t('restaurant.technical.features')
    },
    {
      title: t('restaurant.specialized.title'),
      price: t('restaurant.specialized.price'),
      hours: t('restaurant.specialized.hours'),
      description: t('restaurant.specialized.desc'),
      features: t('restaurant.specialized.features')
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-32 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('restaurant.title')}
            <span className="gradient-text block mt-4">{t('restaurant.subtitle')}</span>
          </h1>
          <p className="text-xl text-white/70">
            {t('restaurant.description')}
          </p>
        </div>

        <section className="py-8 mb-32">
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

        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="bg-dark-400 rounded-2xl p-8 mb-32">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('restaurant.madeWithLove.title')}</h2>
            <p className="text-lg text-white/70">
              {t('restaurant.madeWithLove.desc')}
            </p>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-12">{t('restaurant.support.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>
        </div>

        <div className="bg-dark-400 rounded-2xl p-8 text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">{t('restaurant.cta.title')}</h2>
          <p className="text-lg text-white/70 mb-8">
            {t('restaurant.cta.desc')}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {t('restaurant.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantAutomation;