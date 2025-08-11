import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mofya06', label: 'GitHub' },
    { icon: Mail, href: 'mailto:mofyachisanga06@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Chisanga Mofya</h3>
              <p className="text-slate-400 leading-relaxed">
                Computer Science Graduate passionate about creating innovative digital solutions
                that make a positive impact on users and businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {/* --- IMPROVEMENT: Changed to `a` tags for accessibility --- */}
                {quickLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className="block text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                        aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Chisanga Mofya
              <span className="mx-2">•</span>
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;