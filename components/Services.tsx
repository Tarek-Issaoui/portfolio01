import { Monitor, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom web applications using React, Angular, Next.js with responsive design and modern UI/UX.',
    features: ['React & Angular Apps', 'Responsive Design', 'API Integration', 'Performance Optimization'],
    price: 'Negotiable'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with React Native and Expo for iOS and Android.',
    features: ['React Native Apps', 'Cross-Platform', 'Native Performance', 'App Store Deployment'],
    price: 'Negotiable'
  },
  {
    icon: Zap,
    title: 'Backend Development',
    description: 'Scalable backend solutions with Node.js, SpringBoot, and database design.',
    features: ['REST APIs', 'Database Design', 'Authentication', 'Cloud Deployment'],
    price: 'Negotiable'
  }
];

export function Services() {
  return (
    <section id="services" className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional development services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-white flex flex-col items-center justify-center dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 hover:scale-105">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {service.price}
                </div>
                <a
                  href="#contact"
                  className="w-full block text-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your requirements and bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-gray-100 transition-colors font-bold"
            >
              Start Project
            </a>
            <a
              href="mailto:Tarek9.9issaoui@gmail.com"
              className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-primary-600 transition-colors font-bold"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}