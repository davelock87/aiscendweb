import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, Linkedin, Github, MapPin, Briefcase, ExternalLink } from 'lucide-react';
import QRCode from 'qrcode.react';

interface TeamMember {
  name: string;
  position: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  image: string;
  bio: string;
}

const AboutUs: React.FC = () => {
  const { t, language } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      name: "Cristian Segura",
      position: "Senior Software Developer",
      email: "contact@example.com",
      phone: "+1 (234) 567-890",
      location: "Colombia",
      linkedin: "https://www.linkedin.com/in/cristian-segura/",
      github: "https://github.com/yourusername",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "Senior Software Developer with extensive experience in web development and AI solutions. Passionate about creating innovative solutions and helping businesses grow through technology."
    }
    // More team members can be added here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-500 to-dark-400 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Our Team' : 'Nuestro Equipo'}
          </h1>
          <p className="text-xl text-white/70">
            {language === 'en' 
              ? 'Meet the experts behind AISCEND\'s innovative solutions'
              : 'Conoce a los expertos detrás de las soluciones innovadoras de AISCEND'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-dark-300 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-48 bg-gradient-to-r from-primary to-secondary">
                <div className="absolute -bottom-16 left-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full border-4 border-dark-300 object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-20 px-8 pb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                    <p className="text-white/70 flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {member.position}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <QRCode 
                      value={member.linkedin}
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
                      <a href={`mailto:${member.email}`} className="text-white/70 hover:text-white">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-primary" />
                      <a href={`tel:${member.phone}`} className="text-white/70 hover:text-white">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-primary" />
                      <span className="text-white/70">{member.location}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Linkedin className="w-5 h-5 mr-3 text-primary" />
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white flex items-center"
                      >
                        LinkedIn <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Github className="w-5 h-5 mr-3 text-primary" />
                      <a 
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white flex items-center"
                      >
                        GitHub <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dark-200 pt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === 'en' ? 'About Me' : 'Sobre Mí'}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;