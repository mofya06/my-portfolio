import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertTriangle } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // --- CODE IMPROVEMENT: Add loading and error states for better UX ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // --- CODE IMPROVEMENT: Implement actual email sending with EmailJS ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // Reset states
    setIsSubmitting(true);
    setError(null);

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
        .then((result) => {
          console.log('EmailJS Success:', result.text);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
          // Hide success message after a few seconds
          setTimeout(() => setIsSubmitted(false), 5000);
        }, (error) => {
          console.error('EmailJS Error:', error.text);
          setError('Failed to send message. Please try again later or contact me directly via email.');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mofyachisanga06@gmail.com',
      href: 'mailto:mofyachisanga06@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+260 972 786 205',
      href: 'tel:+260972786205'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lusaka, Zambia',
      href: null
    }
  ];

  return (
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimateOnScroll>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">Let's Connect</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects,
                  or just having a chat about technology and development. Feel free to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 dark:text-slate-300">{info.label}</p>
                          {info.href ? (
                              <a
                                  href={info.href}
                                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                              >
                                {info.value}
                              </a>
                          ) : (
                              <p className="text-slate-600 dark:text-slate-400">{info.value}</p>
                          )}
                        </div>
                      </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 dark:bg-slate-800 rounded-xl">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Available for:</h4>
                  <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Full-time opportunities</li>
                    <li>• Freelance projects</li>
                    <li>• Consulting & mentoring</li>
                    <li>• Open source collaboration</li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact Form */}
            <AnimateOnScroll className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">Send a Message</h3>

              {isSubmitted ? (
                  <div className="text-center py-8 transition-opacity duration-300">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Message Sent!</h4>
                    <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
              ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    {/* Form fields remain the same */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Subject
                      </label>
                      <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Message
                      </label>
                      <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Tell me about your project..."
                      />
                    </div>

                    {/* --- CODE IMPROVEMENT: Add error message display --- */}
                    {error && (
                        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                          <AlertTriangle size={20} />
                          <p className="text-sm">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            Sending...
                          </>
                      ) : (
                          <>
                            <Send size={20} />
                            Send Message
                          </>
                      )}
                    </button>
                  </form>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>
  );
};

export default Contact;