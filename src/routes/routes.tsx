import { RouteObject } from 'react-router-dom';
import App from '../App';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Features from '../components/Features';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsOfService';
import Careers from '../components/Careers';
import Academy from '../components/Academy';
import ScheduleCTA from '../components/ScheduleCTA';
import RestaurantAutomation from '../components/RestaurantAutomation';
import MedicalHealthcare from '../components/MedicalHealthcare';
import RealEstate from '../components/RealEstate';
import CarSales from '../components/CarSales';
import Ecommerce from '../components/Ecommerce';
import DigitalMarketing from '../components/DigitalMarketing';
import WebDevelopment from '../components/WebDevelopment';
import BrandDesign from '../components/BrandDesign';
import SEOServices from '../components/SEOServices';
import ContentForgeAI from '../components/ContentForgeAI';
import HyperTailorAI from '../components/HyperTailorAI';
import AIMLAutomation from '../components/AIMLAutomation';
import HRAutomation from '../components/HRAutomation';
import FinanceAutomation from '../components/FinanceAutomation';
import SupplyChain from '../components/SupplyChain';
import SalesMarketing from '../components/SalesMarketing';
import AnalyticsReports from '../components/AnalyticsReports';
import SecurityCompliance from '../components/SecurityCompliance';
import APIManagement from '../components/APIManagement';
import MarketResearch from '../components/MarketResearch';
import UserExperience from '../components/UserExperience';
import Integrations from '../components/Integrations';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Hero />,
        handle: { title: 'Home | Soluciones de Automatización AI', description: 'Automatiza tu negocio con AISCEND' }
      },
      {
        path: '/about',
        element: <AboutUs />,
        handle: { title: 'Sobre Nosotros | AISCEND', description: 'Conoce más sobre AISCEND' }
      },
      {
        path: '/features',
        element: <Features />,
        handle: { title: 'Características | AISCEND', description: 'Características de AISCEND' }
      },
      {
        path: '/clients',
        element: <Clients />,
        handle: { title: 'Clientes | AISCEND', description: 'Nuestros clientes satisfechos' }
      },
      {
        path: '/testimonials',
        element: <Testimonials />,
        handle: { title: 'Testimonios | AISCEND', description: 'Testimonios de nuestros clientes' }
      },
      {
        path: '/faq',
        element: <FAQ />,
        handle: { title: 'Preguntas Frecuentes | AISCEND', description: 'Respuestas a preguntas frecuentes' }
      },
      {
        path: '/careers',
        element: <Careers />,
        handle: { title: 'Carreras | AISCEND', description: 'Únete a nuestro equipo' }
      },
      {
        path: '/academy',
        element: <Academy />,
        handle: { title: 'Academia | AISCEND', description: 'Formación en automatización AI' }
      },
      {
        path: '/schedule',
        element: <ScheduleCTA />,
        handle: { title: 'Agendar Consulta | AISCEND', description: 'Agenda una consulta con nosotros' }
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />,
        handle: { title: 'Política de Privacidad | AISCEND', description: 'Nuestra política de privacidad' }
      },
      {
        path: '/terms',
        element: <TermsOfService />,
        handle: { title: 'Términos de Servicio | AISCEND', description: 'Nuestros términos de servicio' }
      },
      {
        path: '/solutions/restaurants',
        element: <RestaurantAutomation />,
        handle: { title: 'Automatización de Restaurantes | AISCEND', description: 'Soluciones para restaurantes' }
      },
      {
        path: '/solutions/medical',
        element: <MedicalHealthcare />,
        handle: { title: 'Automatización Médica | AISCEND', description: 'Soluciones para healthcare' }
      },
      {
        path: '/solutions/realestate',
        element: <RealEstate />,
        handle: { title: 'Automatización Inmobiliaria | AISCEND', description: 'Soluciones para real estate' }
      },
      {
        path: '/solutions/carsales',
        element: <CarSales />,
        handle: { title: 'Automatización de Venta de Autos | AISCEND', description: 'Soluciones para vendedores de autos' }
      },
      {
        path: '/solutions/ecommerce',
        element: <Ecommerce />,
        handle: { title: 'Automatización E-commerce | AISCEND', description: 'Soluciones para e-commerce' }
      },
      {
        path: '/services/digital-marketing',
        element: <DigitalMarketing />,
        handle: { title: 'Marketing Digital | AISCEND', description: 'Servicios de marketing digital' }
      },
      {
        path: '/services/web-development',
        element: <WebDevelopment />,
        handle: { title: 'Desarrollo Web | AISCEND', description: 'Servicios de desarrollo web' }
      },
      {
        path: '/services/brand-design',
        element: <BrandDesign />,
        handle: { title: 'Diseño de Marca | AISCEND', description: 'Servicios de branding' }
      },
      {
        path: '/services/seo',
        element: <SEOServices />,
        handle: { title: 'Servicios SEO | AISCEND', description: 'Optimización SEO profesional' }
      },
      {
        path: '/ai-tools/content-forge',
        element: <ContentForgeAI />,
        handle: { title: 'ContentForge AI | AISCEND', description: 'Generador de contenido con IA' }
      },
      {
        path: '/ai-tools/hypertailor',
        element: <HyperTailorAI />,
        handle: { title: 'HyperTailor AI | AISCEND', description: 'Personalización con IA' }
      },
      {
        path: '/automation/ai-ml',
        element: <AIMLAutomation />,
        handle: { title: 'Automatización AI/ML | AISCEND', description: 'Automatización con machine learning' }
      },
      {
        path: '/automation/hr',
        element: <HRAutomation />,
        handle: { title: 'Automatización HR | AISCEND', description: 'Soluciones para recursos humanos' }
      },
      {
        path: '/automation/finance',
        element: <FinanceAutomation />,
        handle: { title: 'Automatización Financiera | AISCEND', description: 'Soluciones financieras' }
      },
      {
        path: '/automation/supply-chain',
        element: <SupplyChain />,
        handle: { title: 'Automatización Supply Chain | AISCEND', description: 'Soluciones de cadena de suministro' }
      },
      {
        path: '/automation/sales-marketing',
        element: <SalesMarketing />,
        handle: { title: 'Automatización Ventas y Marketing | AISCEND', description: 'Soluciones de ventas y marketing' }
      },
      {
        path: '/analytics',
        element: <AnalyticsReports />,
        handle: { title: 'Analytics y Reportes | AISCEND', description: 'Análisis y reportes' }
      },
      {
        path: '/security',
        element: <SecurityCompliance />,
        handle: { title: 'Seguridad y Compliance | AISCEND', description: 'Seguridad y cumplimiento normativo' }
      },
      {
        path: '/api',
        element: <APIManagement />,
        handle: { title: 'Gestión de APIs | AISCEND', description: 'Gestión de APIs' }
      },
      {
        path: '/market-research',
        element: <MarketResearch />,
        handle: { title: 'Investigación de Mercado | AISCEND', description: 'Servicios de market research' }
      },
      {
        path: '/ux',
        element: <UserExperience />,
        handle: { title: 'UX/UI Design | AISCEND', description: 'Diseño de experiencia de usuario' }
      },
      {
        path: '/integrations',
        element: <Integrations />,
        handle: { title: 'Integraciones | AISCEND', description: 'Integraciones disponibles' }
      }
    ]
  }
];
