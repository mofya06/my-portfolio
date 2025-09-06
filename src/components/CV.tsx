import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase, Mail, Phone, LucideIcon } from 'lucide-react';

// --- CODE IMPROVEMENT: Add interfaces for type safety ---
interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string; // Optional property
  relevant: string[];
}

interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

const CV = () => {
  // --- CODE IMPROVEMENT: Apply the new types ---
  const experience: Experience[] = [
    {
      title: 'Software Developer',
      company: 'Kelstico Innovations and Agencies',
      location: 'Remote',
      period: '2025 - Present',
      description: 'Developing web applications and mobile solutions for various clients. Specializing in React, Node.js, and modern web technologies.',
      achievements: ['Built 5+ client applications', 'Improved application performance by 40%', 'Implemented responsive designs']
    },
    {
      title: 'Junior Networking Specialist',
      company: 'Mulungushi University',
      location: 'Kapiri Mposhi, Zambia',
      period: 'June 2024 - December 2024',
      description: 'Worked on various Tasks, collaborating with other Students and learning industry best practices.',
      achievements: ['Contributed to solving major problems', 'Learned some networking applications']
    }
  ];

  const education: Education[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Mulungushi University',
      location: 'Lusaka, Zambia',
      period: '2021 - 2025',
      gpa: '3.7/4.0',
      relevant: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Web Development', 'Mobile App Development', 'Computer Networks']
    },
    {
      degree: 'High School Certificate',
      school: 'Libala High School',
      location: 'Lusaka, Zambia',
      period: '2017 - 2020',
      relevant: ['Mathematics', 'Physics', 'Computer Studies', 'English']
    }
  ];

  const skills: string[] = [
    'JavaScript/TypeScript',
    'React & React Native',
    'Node.js & Express',
    'Python',
    'HTML5 & CSS3',
    'MongoDB',
    'Git & GitHub',
    'Cloud Services',
    'Dart',
  ];

  const certifications: string[] = [
    'Networking- CISCO',
    'Internet of Things-huawei',
    'Artificial Intelligence-huawei',
    'Cloud Computing-huawei'
  ];

  const contactInfo: ContactDetail[] = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mofyachisanga@gmail.com',
      href: 'mailto:mofyachisanga06@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+260 727 862 05',
      href: 'tel:+260972786205'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lusaka, Zambia',
      href: null
    },

  ];

  return (
      <section id="cv" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">Curriculum Vitae</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              A comprehensive overview of my professional journey, education, and achievements in software development.
            </p>
            {/* --- CODE IMPROVEMENT: Make the download button a functional link --- */}
            <a
                href="/Chisanga_CV.pdf" // IMPORTANT: Place your resume PDF in the `public` folder and update this path
                download="Chisanga-Resume.pdf" // This suggests the filename to the user's browser
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              Download PDF Resume
            </a>
          </div>

          {/* Contact Information */}
          <div className="mb-16 bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* --- CODE IMPROVEMENT: Use a stable key --- */}
              {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-300 text-sm">{info.label}</p>
                      {info.href ? (
                          <a
                              href={info.href}
                              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                          >
                            {info.value}
                          </a>
                      ) : (
                          <p className="text-slate-600 dark:text-slate-400 text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Professional Summary (no changes needed here) */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold">CS</span>
              </div>
              Professional Summary
            </h3>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Passionate and dedicated Computer Science graduate with a strong foundation Networking and Software development
                and web technologies. Experienced in building responsive web applications using modern frameworks
                like React and Node.js. Committed to writing clean, efficient code and continuously learning new
                technologies to solve complex problems. Seeking opportunities to contribute to innovative projects
                and grow as a professional developer.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-lg">⚡</span>
              </div>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {skills.map((skill) => (
                  <div key={skill} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border border-blue-200 dark:border-slate-700 rounded-lg p-3 text-center hover:shadow-md transition-all duration-300">
                    <span className="font-medium text-slate-800 dark:text-slate-300 text-sm">{skill}</span>
                  </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experience.map((job) => (
                  <div key={job.title} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{job.title}</h4>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <Calendar size={16} />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{job.description}</p>
                    <div>
                      <h5 className="font-semibold text-slate-800 dark:text-slate-300 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1">
                        {job.achievements.map((achievement) => (
                            <li key={achievement} className="text-slate-600 dark:text-slate-400">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
              Education
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {education.map((edu) => (
                  <div key={edu.degree} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.school}</p>
                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    {edu.gpa && <p className="text-slate-600 dark:text-slate-400 mb-3">GPA: {edu.gpa}</p>}
                    <div>
                      <h5 className="font-medium text-slate-800 dark:text-slate-300 mb-2">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((course) => (
                            <span key={course} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        {course}
                      </span>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
              <Award className="text-blue-600 dark:text-blue-400" size={24} />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                  <div key={cert} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border border-blue-200 dark:border-slate-700 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      <span className="font-medium text-slate-800 dark:text-slate-300">{cert}</span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default CV;