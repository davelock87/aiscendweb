import React, { useEffect } from 'react';
import { Phone, Mail, Globe, MapPin, Linkedin, Github } from 'lucide-react';
import QRCode from 'qrcode';

const VCard: React.FC = () => {
  useEffect(() => {
    const generateQR = async () => {
      const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
      if (canvas) {
        const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Cristian Segura
TITLE:CEO at AISCEND
ORG:AISCEND
TEL:+573228391374
EMAIL:cristian@automatizacionesaiscend.com
URL:https://www.linkedin.com/in/cristian-segura/
URL:https://github.com/cristiansegura
ADR:;;Bogotá;Colombia
NOTE:Experto en automatización y desarrollo de software con más de 10 años de experiencia.
END:VCARD`;

        await QRCode.toCanvas(canvas, vCardData, {
          width: 200,
          margin: 2,
          color: {
            dark: '#6C63FF',
            light: '#ffffff'
          }
        });
      }
    };

    generateQR();
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto pt-32 pb-16">
          <div className="bg-dark-300 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Cristian Segura</h1>
                <p className="text-primary mb-6">CEO at AISCEND</p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <a href="tel:+573228391374" className="hover:text-primary transition-colors">
                      +57 322 839 1374
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-primary" />
                    <a href="mailto:cristian@automatizacionesaiscend.com" className="hover:text-primary transition-colors">
                      cristian@automatizacionesaiscend.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-3 text-primary" />
                    <a href="https://automatizacionesaiscend.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      automatizacionesaiscend.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>Bogotá, Colombia</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 mr-3 text-primary" />
                    <a href="https://www.linkedin.com/in/cristian-segura/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      linkedin.com/in/cristian-segura
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Github className="w-5 h-5 mr-3 text-primary" />
                    <a href="https://github.com/cristiansegura" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      github.com/cristiansegura
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-3">About</h2>
                  <p className="text-white/70">
                    Experto en automatización y desarrollo de software con más de 10 años de experiencia.
                    Especializado en crear soluciones innovadoras que transforman procesos empresariales
                    y mejoran la eficiencia operativa.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <canvas id="qr-code" className="mb-4"></canvas>
                <p className="text-sm text-white/70 text-center">
                  Scan to add contact information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCard;