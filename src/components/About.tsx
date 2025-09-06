import { Code, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend Development', description: 'React, TypeScript, Next.js' },
    { icon: Database, name: 'Backend Development', description: 'Node.js, Express, MongoDB, Mysql' },
    { icon: Palette, name: 'UI/UX Design', description: 'Figma, Adobe Creative Suite' },
    { icon: Smartphone, name: 'Mobile Development', description: 'React Native, Flutter' },
    { icon: Globe, name: 'Web Technologies', description: 'HTML5, CSS3, JavaScript' },
    { icon: Zap, name: 'Performance Optimization', description: ' Core Web Vitals' }
  ];

  return (
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">About Me</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              I'm a Computer Science graduate, Who enjoys Networking, Mobile App Development and full-stack developer with experience creating digital solutions
              that make a difference. I love turning complex problems into elegant, efficient code.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimateOnScroll>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">My Journey</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Started my journey in computer science at the Mulungushi University in Zambia, where I Learned
                  software development and problem-solving. I've worked on various projects ranging from web applications
                  to mobile solutions, always focusing on clean code and user experience.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  I believe in continuous learning and staying up-to-date with the latest technologies
                  and development practices. When I'm not coding, I usually do some other hobbies such as,
                  Drawing, Playing Soccer or Gaming sometimes.
                  I am not only passionate about the technological world alone but I am also passionate about
                  Spiritual matters, I enjoy being in a quiet place studying the Bible, I believe the greatest gift
                  is not only to have wealth or assets in possession but also the ability to communicate with nature and
                  understanding how this life works, but that can only happen when we become spiritual.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'MongoDB'].map((tech) => (
                      <span key={tech} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll style={{ transitionDelay: '200ms' }}>
              {/* --- ✅ IMPROVEMENT: Added an animated gradient glow effect to the profile picture --- */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-75 animate-gradient-rotate bg-[length:200%_200%]"></div>
                <img
                    src="/profile.jpg"
                    alt="Chisanga Mofya"
                    className="relative rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <div>
            <AnimateOnScroll className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Skills & Expertise</h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                  <AnimateOnScroll key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                      <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">{skill.name}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{skill.description}</p>
                  </div>
                  </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;