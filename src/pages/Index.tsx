
import React, { useEffect, useState } from 'react';
import { Shield, Github, Mail } from 'lucide-react';
import TypedText from '../components/TypedText';
import CodeRain from '../components/CodeRain';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSkillBar from '../components/AnimatedSkillBar';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your message. I'll get back to you soon.",
      duration: 5000,
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-hacker-dark text-white relative">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <CodeRain />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6">
            <span className="text-hacker-green animate-text-flicker">RAJAN</span> HACKER
          </h1>
          <div className="text-xl md:text-2xl mb-8 font-roboto-mono">
            <TypedText 
              text="Ethical Hacker | Security Researcher | Penetration Tester" 
              className="text-gray-300"
              loop
              delay={2000}
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="#projects">
              <Button 
                className="bg-hacker-green hover:bg-hacker-green/80 text-black font-orbitron border border-hacker-green/50 group" 
              >
                View My Work
                <Shield className="ml-2 h-4 w-4 group-hover:animate-glow-pulse" />
              </Button>
            </a>
            <a href="#contact">
              <Button 
                variant="outline" 
                className="border-hacker-green text-hacker-green hover:bg-hacker-green/10 font-orbitron"
              >
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-hacker-green">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron mb-4">ABOUT <span className="text-hacker-green">ME</span></h2>
            <div className="w-16 h-1 bg-hacker-green mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-orbitron mb-6 text-hacker-green">&lt; My Story /&gt;</h3>
              <p className="mb-4">
                I am Rajan, an ethical hacker and cybersecurity professional with a passion for finding and fixing security vulnerabilities before malicious actors can exploit them.
              </p>
              <p className="mb-4">
                With over 7 years of experience in the field, I specialize in penetration testing, vulnerability assessments, and developing secure applications. My mission is to make the digital world safer by helping organizations strengthen their security posture.
              </p>
              <p>
                I believe in responsible disclosure and follow ethical practices in all my security research work. When I'm not hunting for vulnerabilities, I'm contributing to open-source security tools and sharing knowledge with the community.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-orbitron mb-6 text-hacker-green">&lt; Technical Skills /&gt;</h3>
              <div className="space-y-5">
                <AnimatedSkillBar name="Penetration Testing" percentage={95} />
                <AnimatedSkillBar name="Python" percentage={90} />
                <AnimatedSkillBar name="Kali Linux" percentage={95} />
                <AnimatedSkillBar name="Wireshark" percentage={85} />
                <AnimatedSkillBar name="Metasploit" percentage={92} />
                <AnimatedSkillBar name="Network Security" percentage={88} />
                <AnimatedSkillBar name="Web App Security" percentage={90} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-hacker-dark-alt relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron mb-4">MY <span className="text-hacker-green">PROJECTS</span></h2>
            <div className="w-16 h-1 bg-hacker-green mx-auto"></div>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              Featured security tools and ethical hacking projects I've developed or contributed to.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="SecureScanner"
              description="An automated vulnerability scanner that checks web applications for common security flaws like XSS, SQL injection, and CSRF."
              tags={["Python", "Web Security", "Automation"]}
              repoUrl="https://github.com/rajanhacker/securescanner"
              icon="shield"
            />
            
            <ProjectCard 
              title="PacketAnalyzer"
              description="Real-time network traffic analysis tool designed to detect suspicious activities and potential intrusion attempts."
              tags={["C++", "Networking", "Forensics"]}
              repoUrl="https://github.com/rajanhacker/packetanalyzer"
              demoUrl="https://packetanalyzer-demo.rajan.dev"
              icon="globe"
            />
            
            <ProjectCard 
              title="AuthGuardian"
              description="Multi-factor authentication library with support for TOTP, FIDO2, and biometric verification."
              tags={["Java", "Security", "Authentication"]}
              repoUrl="https://github.com/rajanhacker/authguardian"
              icon="lock"
            />
            
            <ProjectCard 
              title="DataCrypt"
              description="File encryption utility with support for AES-256, ChaCha20, and multiple key derivation functions."
              tags={["Rust", "Cryptography", "CLI"]}
              repoUrl="https://github.com/rajanhacker/datacrypt"
              icon="lock"
            />
            
            <ProjectCard 
              title="SecurityScorecard"
              description="Automated security assessment tool that grades organizations based on their security posture and vulnerability exposure."
              tags={["JavaScript", "API", "Risk Assessment"]}
              repoUrl="https://github.com/rajanhacker/securityscorecard"
              icon="shield"
            />
            
            <ProjectCard 
              title="NetworkMapper"
              description="Visual network mapping tool that discovers devices, services, and vulnerabilities across enterprise networks."
              tags={["Python", "Network Security", "Visualization"]}
              repoUrl="https://github.com/rajanhacker/networkmapper"
              demoUrl="https://networkmapper-demo.rajan.dev"
              icon="globe"
            />
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="https://github.com/rajanhacker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-hacker-green hover:underline"
            >
              <Github className="mr-2 h-5 w-5" />
              View more projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron mb-4">MY <span className="text-hacker-green">SERVICES</span></h2>
            <div className="w-16 h-1 bg-hacker-green mx-auto"></div>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              Professional cybersecurity services to protect your digital assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              icon="shield"
              title="Penetration Testing"
              description="Comprehensive security assessment to identify vulnerabilities in your systems and applications. Includes detailed reports and remediation guidance."
            />
            
            <ServiceCard 
              icon="search"
              title="Vulnerability Analysis"
              description="Thorough examination of your infrastructure and applications to discover security weaknesses before attackers do."
            />
            
            <ServiceCard 
              icon="database"
              title="Network Security"
              description="Hardening your network infrastructure against threats with proper configurations, monitoring, and defensive measures."
            />
            
            <ServiceCard 
              icon="database"
              title="Custom Tools Development"
              description="Development of specialized security tools and scripts tailored to your unique environment and requirements."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-hacker-dark-alt relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron mb-4">CONTACT <span className="text-hacker-green">ME</span></h2>
            <div className="w-16 h-1 bg-hacker-green mx-auto"></div>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              Have a security concern or interested in my services? Let's get in touch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-orbitron mb-6 text-hacker-green">&lt; Get in Touch /&gt;</h3>
              <p className="mb-6">
                I'm available for freelance security work, consulting, training, and speaking engagements. Feel free to reach out using the contact form or through my social channels.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:contact@rajanhacker.com" 
                  className="flex items-center text-gray-300 hover:text-hacker-green transition-colors"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  contact@rajanhacker.com
                </a>
                
                <a 
                  href="https://github.com/rajanhacker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-hacker-green transition-colors"
                >
                  <Github className="mr-3 h-5 w-5" />
                  github.com/rajanhacker
                </a>
                
                <div className="flex items-center text-gray-300">
                  <Shield className="mr-3 h-5 w-5 text-hacker-green" />
                  <span className="terminal-text">Based in Cyber Space</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-md">
              <h3 className="text-2xl font-orbitron mb-6 text-hacker-green">&lt; Contact Form /&gt;</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    type="text"
                    placeholder="Your Name"
                    className="bg-hacker-dark border-gray-700 focus:border-hacker-green"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Input 
                    type="email"
                    placeholder="Your Email"
                    className="bg-hacker-dark border-gray-700 focus:border-hacker-green"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Your Message"
                    className="bg-hacker-dark border-gray-700 focus:border-hacker-green h-32"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-hacker-green hover:bg-hacker-green/80 text-black font-orbitron"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
