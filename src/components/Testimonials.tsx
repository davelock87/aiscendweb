import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  quote: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: t('testimonials.1.name'),
      position: t('testimonials.1.position'),
      quote: t('testimonials.1.quote'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: t('testimonials.2.name'),
      position: t('testimonials.2.position'),
      quote: t('testimonials.2.quote'),
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: t('testimonials.3.name'),
      position: t('testimonials.3.position'),
      quote: t('testimonials.3.quote'),
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      const translateValue = `translateX(-${currentSlide * (100 / testimonials.length)}%)`;
      slideRef.current.style.transform = translateValue;
    }
  }, [currentSlide, testimonials.length]);

  return (
    <section className="py-20 bg-dark-500/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              ref={slideRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full px-4"
                  style={{ flex: `0 0 ${100 / testimonials.length}%` }}
                >
                  <div className="bg-dark-300 rounded-xl p-6 md:p-8 testimonial-card">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-white/80 mb-4 text-lg italic">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-white/60 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-dark-300 hover:bg-dark-200 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 focus:outline-none transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-dark-300 hover:bg-dark-200 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 focus:outline-none transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-dark-200 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;