import Link from 'next/link';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  translations: any;
}

export function Footer({ translations }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081320] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00c2a8] to-[#ffb86b] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ON</span>
              </div>
              <span className="font-bold text-lg">Omar Naifar</span>
            </div>
            <p className="text-gray-400">{translations.footer.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">{translations.nav.contact}</h4>
            <div className="space-y-3">
              <a
                href="mailto:omarneyfar@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#00c2a8] transition-colors"
              >
                <Mail size={18} />
                <span>omarneyfar@gmail.com</span>
              </a>
              <a
                href="tel:+21644785090"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#00c2a8] transition-colors"
              >
                <Phone size={18} />
                <span>+216 44 785 090</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">{translations.footer.social}</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/omarneyfarr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0f1724] rounded-lg hover:bg-[#00c2a8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/omarneyfar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0f1724] rounded-lg hover:bg-[#00c2a8] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>{translations.footer.rights.replace('2025', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
}
