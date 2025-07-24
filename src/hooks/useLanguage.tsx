import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  // Header
  'nav.home': {
    es: 'Inicio',
    en: 'Home'
  },
  'nav.about': {
    es: 'Nosotros',
    en: 'About'
  },
  'nav.services': {
    es: 'Servicios',
    en: 'Services'
  },
  'nav.platform': {
    es: 'Plataforma',
    en: 'Platform'
  },
  'nav.results': {
    es: 'Resultados',
    en: 'Results'
  },
  'nav.contact': {
    es: 'Contacto',
    en: 'Contact'
  },

  // Hero Section
  'hero.badge': {
    es: 'Consultoría Líder en Tecnología de Construcción',
    en: 'Leading Construction Technology Consulting'
  },
  'hero.title1': {
    es: 'Transformamos la Gestión',
    en: 'Transforming Construction'
  },
  'hero.title2': {
    es: 'de Proyectos de Construcción',
    en: 'Project Management'
  },
  'hero.subtitle': {
    es: 'BIM · IA · AWP integrados para una gestión de proyectos ágil, eficiente y colaborativa — desde el diseño hasta la construcción.',
    en: 'BIM · AI · AWP integrated for agile, efficient and collaborative project management — from design to construction.'
  },
  'hero.cta1': {
    es: 'Contactar',
    en: 'Contact Us'
  },
  'hero.stat1': {
    es: 'Reducción en Órdenes de Cambio',
    en: 'Reduction in Change Orders'
  },
  'hero.stat2': {
    es: 'Presupuestos Más Precisos',
    en: 'More Accurate Budgets'
  },
  'hero.stat3': {
    es: 'Ejecución de Proyectos Más Rápida',
    en: 'Faster Project Execution'
  },

  // About Section
  'about.title': {
    es: 'Acerca de BIMPLIFICA',
    en: 'About BIMPLIFICA'
  },
  'about.description1': {
    es: 'BIMPLIFICA es una consultora especializada en gestión digital de proyectos para la industria de la construcción. Integramos cubicaciones precisas, modelado BIM 3D/4D/5D y metodología AWP para reducir costos, optimizar recursos y acortar plazos.',
    en: 'BIMPLIFICA is a consulting firm specialized in digital project management for the construction industry. We integrate precise quantity take-offs, 3D/4D/5D BIM modeling, and AWP methodology to reduce costs, optimize resources, and shorten timelines.'
  },
  'about.description2': {
    es: 'Nuestro equipo de ingenieros expertos y especialistas digitales transforma los procesos tradicionales de construcción a través de soluciones tecnológicas innovadoras, entregando resultados medibles para nuestros clientes en toda América Latina.',
    en: 'Our team of expert engineers and digital specialists transform traditional construction processes through innovative technology solutions, delivering measurable results for our clients across Latin America.'
  },
  'about.location': {
    es: 'Ubicación',
    en: 'Location'
  },
  'about.email': {
    es: 'Correo',
    en: 'Email'
  },
  'about.website': {
    es: 'Sitio Web',
    en: 'Website'
  },
  'about.mission.title': {
    es: 'Nuestra Misión',
    en: 'Our Mission'
  },
  'about.mission.description': {
    es: 'Revolucionar la industria de la construcción a través de la innovación digital, precisión técnica y metodologías colaborativas que entregan valor excepcional a nuestros clientes mientras avanzamos las prácticas de construcción sostenible.',
    en: 'To revolutionize the construction industry through digital innovation, technical precision, and collaborative methodologies that deliver exceptional value to our clients while advancing sustainable building practices.'
  },

  // Services Section
  'services.title': {
    es: 'Nuestros Servicios Especializados',
    en: 'Our Specialized Services'
  },
  'services.subtitle': {
    es: 'Soluciones integrales diseñadas para transformar la gestión de sus proyectos de construcción a través de innovación digital y metodologías probadas.',
    en: 'Comprehensive solutions designed to transform your construction project management through digital innovation and proven methodologies.'
  },
  'services.service1.title': {
    es: 'Cubicaciones y Presupuestos',
    en: 'Quantity Take-offs & Estimations'
  },
  'services.service1.description': {
    es: 'Mediciones digitales precisas utilizando herramientas avanzadas para presupuesto, seguimiento de avance y documentación con máxima confiabilidad.',
    en: 'Accurate digital measurements using advanced tools for budgeting, progress tracking, and documentation with maximum reliability.'
  },
  'services.service2.title': {
    es: 'Modelado y Coordinación BIM',
    en: 'BIM Modeling & Coordination'
  },
  'services.service2.description': {
    es: 'Desarrollo e integración de modelos BIM 3D, 4D y 5D que optimizan la planificación, construcción y control de proyectos, facilitando la colaboración entre todas las disciplinas.',
    en: 'Development and integration of 3D, 4D, and 5D BIM models that optimize planning, construction, and project control, facilitating collaboration between all disciplines.'
  },
  'services.service3.title': {
    es: 'Consultoría en Metodología AWP',
    en: 'AWP Methodology Consulting'
  },
  'services.service3.description': {
    es: 'Implementación de metodología Advanced Work Packaging para ejecución eficiente y organizada en terreno, mejorando significativamente la productividad y control de trabajo.',
    en: 'Implementation of Advanced Work Packaging methodology for efficient and organized site execution, significantly improving productivity and work control.'
  },
  'services.service4.title': {
    es: 'Desarrollo de Soluciones Tecnológicas',
    en: 'Tech Solutions Development'
  },
  'services.service4.description': {
    es: 'Adaptación personalizada de software y herramientas digitales para gestión integral de cubicaciones, modelado BIM y control efectivo del trabajo.',
    en: 'Personalized adaptation of software and digital tools for integral management of take-offs, BIM modeling, and effective work control.'
  },
  'services.cta.title': {
    es: '¿Listo para Transformar sus Proyectos?',
    en: 'Ready to Transform Your Projects?'
  },
  'services.cta.description': {
    es: 'Descubra cómo nuestros servicios especializados pueden optimizar sus procesos de construcción y entregar resultados medibles.',
    en: 'Discover how our specialized services can optimize your construction processes and deliver measurable results.'
  },
  'services.cta.button': {
    es: 'Agendar Consulta',
    en: 'Schedule Consultation'
  },

  // System Section
  'system.title1': {
    es: 'Sistema de Gestión de Proyectos',
    en: 'Project Management System'
  },
  'system.title2': {
    es: 'por BIMPLIFICA',
    en: 'by BIMPLIFICA'
  },
  'system.subtitle': {
    es: 'Nuestra plataforma digital integrada centraliza todos los aspectos de su proyecto de construcción, permitiendo colaboración fluida y control de proyecto en tiempo real.',
    en: 'Our integrated digital platform centralizes all aspects of your construction project, enabling seamless collaboration and real-time project control.'
  },
  'system.feature1.title': {
    es: 'Acceso 360°',
    en: '360° Access'
  },
  'system.feature1.description': {
    es: 'Visualización completa de modelos, cronogramas y documentos del proyecto desde un portal centralizado único.',
    en: 'Complete visualization of models, schedules, and project documents from a single centralized portal.'
  },
  'system.feature2.title': {
    es: 'Colaboración Centralizada',
    en: 'Centralized Collaboration'
  },
  'system.feature2.description': {
    es: 'Chat integrado y sistema de comentarios contextuales con nuestro equipo BIM para resolver dudas inmediatamente.',
    en: 'Integrated chat and contextual comment system with our BIM team to resolve doubts immediately.'
  },
  'system.feature3.title': {
    es: 'Enfoque Digital',
    en: 'Digital Approach'
  },
  'system.feature3.description': {
    es: 'Validación en tiempo real de entregables y KPIs para tomar decisiones más rápidas e informadas.',
    en: 'Real-time validation of deliverables and KPIs to make faster and more informed decisions.'
  },
  'system.feature4.title': {
    es: 'Historial Trazable',
    en: 'Traceable History'
  },
  'system.feature4.description': {
    es: 'Almacenamiento seguro en la nube de todas las versiones, RFIs y documentación técnica con control de acceso personalizado para cada stakeholder.',
    en: 'Secure cloud storage of all versions, RFIs, and technical documentation with personalized access control for each stakeholder.'
  },
  'system.feature5.title': {
    es: 'Soporte BIM Experto',
    en: 'Expert BIM Support'
  },
  'system.feature5.description': {
    es: 'Equipo técnico especializado con tiempo de respuesta menor a 24 horas. Soporte remoto y en terreno según las necesidades específicas de su proyecto.',
    en: 'Specialized technical team with response time under 24 hours. Remote and on-site support according to your project\'s specific needs.'
  },
  'system.feature6.title': {
    es: 'Flexibilidad y Personalización',
    en: 'Flexibility & Customization'
  },
  'system.feature6.description': {
    es: 'Adaptamos campos, reportes y flujos de trabajo a sus procesos existentes, facilitando la adopción y maximizando el valor desde el día uno.',
    en: 'We adapt fields, reports, and workflows to your existing processes, facilitating adoption and maximizing value from day one.'
  },
  'system.platform.title': {
    es: 'Plataforma Digital Centralizada',
    en: 'Centralized Digital Platform'
  },

  // Results Section
  'results.title': {
    es: 'Resultados Tangibles para su Empresa',
    en: 'Tangible Results for Your Company'
  },
  'results.subtitle': {
    es: 'Mejoras medibles que transforman el rendimiento de proyectos de construcción y entregan valor excepcional a su organización.',
    en: 'Measurable improvements that transform construction project performance and deliver exceptional value to your organization.'
  },
  'results.transparency.title': {
    es: 'Transparencia Total',
    en: 'Total Transparency'
  },
  'results.transparency.description': {
    es: 'Visibilidad completa 24/7 del progreso real del proyecto desde cualquier dispositivo.',
    en: 'Complete 24/7 visibility of real project progress from any device.'
  },
  'results.risks.title': {
    es: 'Menos Riesgos de Construcción',
    en: 'Less Construction Risks'
  },
  'results.risks.description': {
    es: 'Detección temprana de interferencias (clashes) antes de llegar a terreno.',
    en: 'Early detection of interferences (clashes) before reaching the site.'
  },
  'results.optimization.title': {
    es: 'Optimización de Recursos',
    en: 'Resource Optimization'
  },
  'results.optimization.description': {
    es: 'Planificación precisa de mano de obra y materiales basada en modelos BIM.',
    en: 'Precise planning of labor and materials based on BIM models.'
  },
  'results.differential.title': {
    es: 'Valor Diferencial: Integración Tecnológica Completa',
    en: 'Differential Value: Complete Technological Integration'
  },

  // Process Section
  'process.title': {
    es: '¿Cómo Trabajamos?',
    en: 'How We Work?'
  },
  'process.subtitle': {
    es: 'Nuestra metodología probada asegura implementación exitosa y resultados medibles a través de un enfoque estructurado y colaborativo.',
    en: 'Our proven methodology ensures successful implementation and measurable results through a structured, collaborative approach.'
  },
  'process.step1.title': {
    es: 'Diagnóstico Inicial',
    en: 'Initial Diagnosis'
  },
  'process.step1.description': {
    es: 'Evaluación integral de sus procesos actuales, identificando puntos críticos y oportunidades de mejora.',
    en: 'Comprehensive evaluation of your current processes, identifying critical points and improvement opportunities.'
  },
  'process.step2.title': {
    es: 'Propuesta Personalizada',
    en: 'Personalized Proposal'
  },
  'process.step2.description': {
    es: 'Plan de implementación detallado con objetivos claros y cronogramas realistas adaptados a sus necesidades específicas.',
    en: 'Detailed implementation plan with clear objectives and realistic timelines tailored to your specific needs.'
  },
  'process.step3.title': {
    es: 'Implementación Progresiva',
    en: 'Progressive Implementation'
  },
  'process.step3.description': {
    es: 'Integración gradual de soluciones con capacitación continua del equipo y soporte técnico permanente durante todo el proceso.',
    en: 'Gradual solution integration with continuous team training and permanent technical support throughout the process.'
  },
  'process.step4.title': {
    es: 'Medición de Resultados',
    en: 'Results Measurement'
  },
  'process.step4.description': {
    es: 'Seguimiento de KPIs establecidos, evaluación del impacto en proyectos y optimización constante de procesos para asegurar el éxito.',
    en: 'Established KPI tracking, project impact evaluation, and constant process optimization to ensure success.'
  },
  'process.timeline.title': {
    es: 'Cronograma Típico de Implementación',
    en: 'Typical Implementation Timeline'
  },

  // Process Section - Details
  'process.step1.detail1': {
    es: 'Evaluación de procesos actuales',
    en: 'Current process evaluation'
  },
  'process.step1.detail2': {
    es: 'Identificación de puntos críticos',
    en: 'Critical point identification'
  },
  'process.step1.detail3': {
    es: 'Análisis de oportunidades de mejora',
    en: 'Improvement opportunity analysis'
  },
  'process.step2.detail1': {
    es: 'Plan de implementación detallado',
    en: 'Detailed implementation plan'
  },
  'process.step2.detail2': {
    es: 'Definición clara de objetivos',
    en: 'Clear objective definition'
  },
  'process.step2.detail3': {
    es: 'Establecimiento de cronograma realista',
    en: 'Realistic timeline establishment'
  },
  'process.step3.detail1': {
    es: 'Integración gradual de soluciones',
    en: 'Gradual solution integration'
  },
  'process.step3.detail2': {
    es: 'Capacitación continua del equipo',
    en: 'Continuous team training'
  },
  'process.step3.detail3': {
    es: 'Soporte técnico permanente',
    en: 'Permanent technical support'
  },
  'process.step4.detail1': {
    es: 'Seguimiento de KPI establecidos',
    en: 'Established KPI tracking'
  },
  'process.step4.detail2': {
    es: 'Evaluación de impacto del proyecto',
    en: 'Project impact evaluation'
  },
  'process.step4.detail3': {
    es: 'Optimización constante de procesos',
    en: 'Constant process optimization'
  },
  'process.step.label': {
    es: 'Paso',
    en: 'Step'
  },

  // Services Section - Features
  'services.service1.feature1': {
    es: 'Mediciones digitales precisas',
    en: 'Precision digital measurements'
  },
  'services.service1.feature2': {
    es: 'Herramientas avanzadas de presupuestación',
    en: 'Advanced budgeting tools'
  },
  'services.service1.feature3': {
    es: 'Sistemas de seguimiento de progreso',
    en: 'Progress tracking systems'
  },
  'services.service1.feature4': {
    es: 'Gestión de documentación',
    en: 'Documentation management'
  },
  'services.service2.feature1': {
    es: 'Modelado BIM 3D/4D/5D',
    en: '3D/4D/5D BIM modeling'
  },
  'services.service2.feature2': {
    es: 'Coordinación entre disciplinas',
    en: 'Cross-discipline coordination'
  },
  'services.service2.feature3': {
    es: 'Sistemas de detección de conflictos',
    en: 'Clash detection systems'
  },
  'services.service2.feature4': {
    es: 'Optimización de modelos',
    en: 'Model optimization'
  },
  'services.service3.feature1': {
    es: 'Implementación AWP',
    en: 'AWP implementation'
  },
  'services.service3.feature2': {
    es: 'Optimización de flujos de trabajo',
    en: 'Workflow optimization'
  },
  'services.service3.feature3': {
    es: 'Mejora de productividad',
    en: 'Productivity enhancement'
  },
  'services.service3.feature4': {
    es: 'Planificación de ejecución en sitio',
    en: 'Site execution planning'
  },
  'services.service4.feature1': {
    es: 'Soluciones de software personalizadas',
    en: 'Custom software solutions'
  },
  'services.service4.feature2': {
    es: 'Integración de herramientas digitales',
    en: 'Digital tool integration'
  },
  'services.service4.feature3': {
    es: 'Automatización de flujos de trabajo',
    en: 'Workflow automation'
  },
  'services.service4.feature4': {
    es: 'Optimización de sistemas',
    en: 'System optimization'
  },
  'services.service.label': {
    es: 'Servicio',
    en: 'Service'
  },

  // Results Section - Details and Benefits
  'results.transparency.details': {
    es: 'Reportes automáticos de progreso comparados con cronogramas planificados.',
    en: 'Automatic progress reports compared to planned schedules.'
  },
  'results.risks.details': {
    es: 'Promedio de 30% de reducción en órdenes de cambio durante construcción.',
    en: 'Average 30% reduction in change orders during construction.'
  },
  'results.optimization.details': {
    es: 'Reducción de desperdicios y optimización de adquisiciones.',
    en: 'Waste reduction and procurement optimization.'
  },
  'results.benefit1.title': {
    es: 'Flujo Continuo de Información',
    en: 'Continuous Information Flow'
  },
  'results.benefit1.description': {
    es: 'Flujo ininterrumpido de información entre cubicaciones, modelos BIM y paquetes de trabajo.',
    en: 'Uninterrupted information flow between take-offs, BIM models, and work packages.'
  },
  'results.benefit2.title': {
    es: 'Visualización en Tiempo Real',
    en: 'Real-time Visualization'
  },
  'results.benefit2.description': {
    es: 'Impactos de cambios en costos y cronograma visibles instantáneamente.',
    en: 'Cost and schedule change impacts visible instantly.'
  },
  'results.benefit3.title': {
    es: 'Aumento de Precisión 40%',
    en: '40% Precision Increase'
  },
  'results.benefit3.description': {
    es: 'Presupuestos 40% más precisos comparados con métodos tradicionales.',
    en: 'Budgets 40% more accurate compared to traditional methods.'
  },
  'results.benefit4.title': {
    es: 'Reducción de Tiempo 25%',
    en: '25% Time Reduction'
  },
  'results.benefit4.description': {
    es: 'Ejecución 25% más rápida mediante planificación AWP optimizada.',
    en: '25% faster execution through optimized AWP planning.'
  },
  'results.differential.description': {
    es: 'Conectamos la precisión técnica de las cubicaciones con la innovación del modelado BIM y la disciplina metodológica AWP, garantizando resultados más rápidos, confiables y colaborativos en cada fase de su proyecto.',
    en: 'We connect the technical precision of take-offs with BIM modeling innovation and AWP methodology discipline, guaranteeing faster, more reliable, and collaborative results in every phase of your project.'
  },

  'process.timeline.week1': {
    es: 'Semana 1-2: Descubrimiento y Análisis',
    en: 'Week 1-2: Discovery & Analysis'
  },
  'process.timeline.week1.desc': {
    es: 'Evaluación completa y desarrollo de propuesta',
    en: 'Complete assessment and proposal development'
  },
  'process.timeline.week3': {
    es: 'Semana 3-6: Configuración y Capacitación',
    en: 'Week 3-6: Setup & Training'
  },
  'process.timeline.week3.desc': {
    es: 'Configuración de plataforma e incorporación del equipo',
    en: 'Platform configuration and team onboarding'
  },
  'process.timeline.week7': {
    es: 'Semana 7-12: Implementación',
    en: 'Week 7-12: Implementation'
  },
  'process.timeline.week7.desc': {
    es: 'Despliegue gradual con soporte continuo',
    en: 'Gradual rollout with continuous support'
  },
  'process.timeline.ongoing': {
    es: 'Continuo: Optimización',
    en: 'Ongoing: Optimization'
  },
  'process.timeline.ongoing.desc': {
    es: 'Mejora continua y soporte',
    en: 'Continuous improvement and support'
  },

  // Contact Section
  'contact.title': {
    es: '¿Listo para Transformar sus Proyectos?',
    en: 'Ready to Transform Your Projects?'
  },
  'contact.subtitle': {
    es: 'En BIMPLIFICA, estamos preparados para llevar sus proyectos de construcción al siguiente nivel con soluciones innovadoras y soporte experto.',
    en: 'At BIMPLIFICA, we\'re prepared to take your construction projects to the next level with innovative solutions and expert support.'
  },
  'contact.info.email': {
    es: 'Correo',
    en: 'Email'
  },
  'contact.info.location': {
    es: 'Ubicación',
    en: 'Location'
  },
  'contact.info.website': {
    es: 'Sitio Web',
    en: 'Website'
  },
  'contact.benefits.title': {
    es: 'Lo Que Obtiene:',
    en: 'What You Get:'
  },
  'contact.benefits.plan': {
    es: 'Plan de mejora personalizado',
    en: 'Customized improvement plan'
  },
  'contact.benefits.consultation': {
    es: 'Consulta sin compromiso',
    en: 'No commitment consultation'
  },
  'contact.form.title': {
    es: 'Solicite su Consulta Gratuita',
    en: 'Request Your Free Consultation'
  },
  'contact.form.subtitle': {
    es: 'Complete el formulario y le contactaremos en 24 horas',
    en: 'Complete the form and we\'ll contact you within 24 hours'
  },
  'contact.form.name': {
    es: 'Nombre Completo *',
    en: 'Full Name *'
  },
  'contact.form.name.placeholder': {
    es: 'Su nombre completo',
    en: 'Your full name'
  },
  'contact.form.email': {
    es: 'Correo Electrónico *',
    en: 'Email *'
  },
  'contact.form.email.placeholder': {
    es: 'su@correo.com',
    en: 'your@email.com'
  },
  'contact.form.company': {
    es: 'Empresa',
    en: 'Company'
  },
  'contact.form.company.placeholder': {
    es: 'Nombre de su empresa',
    en: 'Your company name'
  },
  'contact.form.phone': {
    es: 'Teléfono',
    en: 'Phone'
  },
  'contact.form.phone.placeholder': {
    es: '+56 9 xxxx xxxx',
    en: '+56 9 xxxx xxxx'
  },
  'contact.form.message': {
    es: 'Mensaje',
    en: 'Message'
  },
  'contact.form.message.placeholder': {
    es: 'Cuéntanos sobre su proyecto y cómo podemos ayudarle...',
    en: 'Tell us about your project and how we can help you...'
  },
  'contact.form.submit': {
    es: 'Enviar Mensaje',
    en: 'Send Message'
  },
  'contact.form.sending': {
    es: 'Enviando...',
    en: 'Sending...'
  },
  'contact.form.success.title': {
    es: '¡Mensaje Enviado Exitosamente!',
    en: 'Message Sent Successfully!'
  },
  'contact.form.success.description': {
    es: 'Le contactaremos en 24 horas.',
    en: 'We\'ll contact you within 24 hours.'
  },
  'contact.form.privacy': {
    es: 'Al enviar este formulario, acepta recibir comunicaciones de BIMPLIFICA. Respetamos su privacidad y nunca compartiremos su información.',
    en: 'By submitting this form, you agree to receive communications from BIMPLIFICA. We respect your privacy and will never share your information.'
  },

  // Footer
  'footer.description': {
    es: 'Transformando la industria de la construcción a través de innovación digital y precisión técnica en cada proyecto.',
    en: 'Transforming the construction industry through digital innovation and technical precision in every project.'
  },
  'footer.specialization': {
    es: 'Especializados en modelado BIM, cubicaciones y metodología AWP para la excelencia en construcción.',
    en: 'Specializing in BIM modeling, quantity take-offs, and AWP methodology for construction excellence.'
  },
  'footer.contact.title': {
    es: 'Contacto',
    en: 'Contact'
  },
  'footer.services.title': {
    es: 'Servicios',
    en: 'Services'
  },
  'footer.services.takeoffs': {
    es: 'Cubicaciones',
    en: 'Quantity Take-offs'
  },
  'footer.services.bim': {
    es: 'Modelado BIM',
    en: 'BIM Modeling'
  },
  'footer.services.awp': {
    es: 'Consultoría AWP',
    en: 'AWP Consulting'
  },
  'footer.services.tech': {
    es: 'Soluciones Tecnológicas',
    en: 'Tech Solutions'
  },
  'footer.services.management': {
    es: 'Gestión de Proyectos',
    en: 'Project Management'
  },
  'footer.copyright': {
    es: 'Todos los derechos reservados.',
    en: 'All rights reserved.'
  },
  'footer.tagline': {
    es: 'Transformando la construcción a través de innovación digital y precisión técnica.',
    en: 'Transforming construction through digital innovation and technical precision.'
  },
  // BIM Section
  'bim.title': {
    es: 'MODELADO Y COORDINACIÓN BIM (3D, 4D, 5D)',
    en: 'BIM MODELING AND COORDINATION (3D, 4D, 5D)'
  },
  'bim.modeling3d.title': {
    es: 'MODELADO 3D',
    en: '3D MODELING'
  },
  'bim.modeling3d.description': {
    es: 'Representación digital completa del proyecto con detección automatizada de interferencias entre disciplinas.',
    en: 'Complete digital representation of the project with automated interference detection between disciplines.'
  },
  'bim.planning4d.title': {
    es: 'PLANIFICACIÓN 4D',
    en: '4D PLANNING'
  },
  'bim.planning4d.description': {
    es: 'Vinculación del modelo con cronogramas para simular la secuencia constructiva y optimizar plazos.',
    en: 'Linking the model with schedules to simulate construction sequence and optimize timelines.'
  },
  'bim.control5d.title': {
    es: 'CONTROL 5D',
    en: '5D CONTROL'
  },
  'bim.control5d.description': {
    es: 'Integración de costos al modelo para seguimiento presupuestario y proyecciones financieras precisas.',
    en: 'Integration of costs to the model for budget tracking and precise financial projections.'
  },
  'bim.expertise': {
    es: 'Nuestro conocimiento profundo de la dinámica de obra civil nos permite crear modelos que realmente anticipan conflictos y mejoran la coordinación entre especialidades.',
    en: 'Our deep knowledge of civil works dynamics allows us to create models that truly anticipate conflicts and improve coordination between specialties.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('bimplifica-language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bimplifica-language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translation[language] || translation.es || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};