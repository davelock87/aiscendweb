import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Briefcase } from 'lucide-react';
import QRCode from 'qrcode.react';

const VCard: React.FC = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/cristian-segura/';

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-500 to-dark-400 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-dark-300 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-48 bg-gradient-to-r from-primary to-secondary">
            <div className="absolute -bottom-16 left-8">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-dark-300 object-cover"
              />
            </div>
          </div>
          
          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Cristian Segura</h1>
                <p className="text-white/70 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Senior Software Developer
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <QRCode 
                  value={linkedInUrl}
                  size={120}
                  level="H"
                  includeMargin={true}
                  className="bg-white p-2 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <a href="mailto:contact@example.com" className="text-white/70 hover:text-white">
                    contact@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <a href="tel:+1234567890" className="text-white/70 hover:text-white">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-white/70">Colombia</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 mr-3 text-primary" />
                  <a 
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-3 text-primary" />
                  <a 
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-dark-200 pt-8">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p className="text-white/70 leading-relaxed">
                Senior Software Developer with extensive experience in web development and AI solutions. 
                Passionate about creating innovative solutions and helping businesses grow through technology. 
                Specialized in React, Node.js, and cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCard;