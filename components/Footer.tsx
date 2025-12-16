import { Github, Linkedin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Tarek-Issaoui/', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/tarek-issaoui99/', icon: Linkedin },
    { name: 'Phone', url: 'tel:+21654422280', icon: Phone },
    { name: 'Email', url: 'mailto:Tarek9.9issaoui@gmail.com', icon: Mail }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {currentYear} Tarek Issaoui.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}