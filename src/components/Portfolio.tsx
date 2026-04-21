import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from "@/components/Navbar";
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import image1 from '@/graphic photo/01.jpg'
import image2 from '@/graphic photo/02.jpg'
import image3 from '@/graphic photo/03.jpg'
import image4 from '@/graphic photo/04.jpg'
import image5 from '@/graphic photo/05.jpg'
import image6 from '@/graphic photo/06.jpg'
import image7 from '@/graphic photo/07.jpg'
import image8 from '@/graphic photo/08.jpg'
import image9 from '@/graphic photo/09.jpg'
import image10 from '@/graphic photo/10.jpg'
import image11 from '@/graphic photo/11.jpg'
import image12 from '@/graphic photo/12.jpg'
import image13 from '@/graphic photo/13.jpg'
import image14 from '@/graphic photo/14.jpg'
import image15 from '@/graphic photo/15.jpg'
import image16 from '@/graphic photo/16.jpg'
import image17 from '@/graphic photo/17.jpg'
import image18 from '@/graphic photo/18.jpg'
import image19 from '@/graphic photo/19.jpg'
import image20 from '@/graphic photo/20.jpg'
import image21 from '@/graphic photo/21.jpg'
import image22 from '@/graphic photo/22.jpg'
import image23 from '@/graphic photo/23.jpg'
import image24 from '@/graphic photo/24.jpg'
import image25 from '@/graphic photo/25.jpg'
import image26 from '@/graphic photo/26.jpg'
import imagevideo1 from '@/graphic photo/video1.png'
import imagevideo2 from '@/graphic photo/video2.png'
import imagevideo3 from '@/graphic photo/video3.png'
import imagevideo4 from '@/graphic photo/video4.png'
import imagevideo5 from '@/graphic photo/video5.png'
import imagevideo6 from '@/graphic photo/video6.png'
import imagevideo7 from '@/graphic photo/video7.png'
import imagevideo8 from '@/graphic photo/video8.png'

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Users,
  Heart,
  MapPin,
  Calendar,
  Send,
  Play,
  Youtube
} from 'lucide-react';
import agrataPhoto from '@/assets/Screenshot 2024-12-22 201133.jpg';

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const skills = [
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Palette },
    { name: 'React.js', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'Excel', icon: Code },
    { name: 'Ads', icon: Palette },
    { name: 'Marketing', icon: Code },
    { name: 'Canva', icon: Palette },
    { name: 'Figma', icon: Palette },
    { name: 'Content', icon: Palette },
    { name: 'Word', icon: Code },
    { name: 'Powerpoint', icon: Code }
  ];

  const projects = [
    {
      title: 'Fair Split',
      description: 'A React-based application for splitting expenses among friends with real-time calculations for my 4th semester final project.',
      tech: ['React', 'TypeScript','PLpgSQL'],
      github: 'https://github.com/agrata051/Final-FairSplit',
      live: 'https://final-fair-split.vercel.app/'
    },
    {
      title: 'Hotel Website Design',
      description: 'hotel website with modern UI/UX design using figma and react using its front end development. it just contain the landing page for learning purpose.',
      tech: ['Figma', 'React', 'CSS', 'JavaScript','TypeScript'],
      github: 'https://github.com/agrata051/Bholenath-Hotel',
      live: 'https://bholenath-hotel.vercel.app/'
    },
    {
      title: 'GO trip website cloning',
      description: 'Clone of GoTrip website using React for learning purpose.',
      tech: [ 'React', 'CSS', 'JavaScript'],
      github: 'https://github.com/agrata051/Go-trip',
      live: 'https://go-trip-delta.vercel.app/'
    },
    {
      title: 'Photography Portfolio',
      description: 'A portfolio website i made for showcasing my photography work just for learning.',
      tech: [ 'JavaScript', 'CSS','HTML'],
      github: 'https://github.com/agrata051/portfolio-photography',
      live: 'https://portfolio-vert-five-20.vercel.app/'
    },
    {
      title: 'This Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills with modern design principles.',
      tech: ['React', 'Typescript', 'CSS'],
      github: 'https://github.com/agrata051/Main-Portfolio-',
      live: 'https://main-portfolio-m255.vercel.app/'
    }
    ,
    
    {
      title: 'BDH LAB(in development process)',
      description: 'A real world frontend based website for Builders and Devlopers Hand located in chyasal,Lalitpur.',
      tech: ['React', 'Tailwind', 'JavaScript'],
      github: '#',
      live: '#'
    }
  ];
   const graphics = [
    
    {
       image: image3
    },
    {
       image: image1,
    },
     {
       image: image2,
    },
    {
       image: image4,
    },
    {
      
       image: image5,
    },
    {
      
       image: image6,
    },
    {
      
       image: image7,
    },
    {
      
       image: image8,
    },
    {
      
       image: image9,
    },
    {
      
       image: image10,
    },
    {
      
       image: image11,
    },
    {
      
       image: image12,
    },
    {
      
       image: image13,
    },
    {
      
       image: image14,
    },
    {
      
       image: image15,
    },
    {
      
       image: image16,
    },
    {
      
       image: image17,
    },
    {
      
       image: image18,
    },
    {
      
       image: image19,
    },
    {
      
       image: image20,
    },
    {
      
       image: image21,
    },
    {
      
       image: image22,
    },
    {
      
       image: image23,
    },
    {
      
       image: image24,
    },
    {
      
       image: image25,
    },
    {
      
       image: image26,
    },
  ];

  const videos = [
    {
      title: 'Kailash Mansarovar Yatra Content',
      description: 'Content Promoting Kailash Yatra Package',
      url: 'https://www.instagram.com/p/DU534a5APdd/',
          thumbnail: imagevideo1,
      platform: 'Instagram',
    },
    {
      title: 'Product Content',
      description: 'Content for Product selling',
      url: 'https://www.facebook.com/reel/856654317064844',
          thumbnail: imagevideo2,
      platform: 'Facebook',
    },
    {
      title: 'Product Content',
      description: 'Content for Product selling',
      url: 'https://www.facebook.com/reel/871103811962671',
                thumbnail: imagevideo3,
      platform: 'Facebook',
    },
    {
      title: 'Product Content',
      description: 'Content for Product selling',
      url: 'https://www.facebook.com/reel/873963595590527',
               thumbnail: imagevideo4,
      platform: 'Facebook',
    },
    {
      title: 'Product Content',
      description: 'Content for Product selling',
      url: 'https://www.facebook.com/reel/1390705825755309',
          thumbnail: imagevideo5,
      platform: 'Facebook',
    },
    {
      title: 'Web Product',
      description: 'Content for Promoting AI assistant web product',
      url: 'https://www.linkedin.com/posts/pre-vibe_previbe-ai-productivity-activity-7394326792318132225-2Yxw/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpfdqEBmCkKsE6inqmucwZx_AwvTGqPfJ8&fbclid=IwY2xjawRUIf9leHRuA2FlbQIxMABicmlkETE0Qnd0emRmVkczNEREQ1NLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlXDAb32Gh1OEYAqld9snykpyOTvPSurhqOE6aydpvkANZAcubI8cDdiG4kp_aem_PtXNTSCI-VzedwtdlM11Qw://www.linkedin.com/posts/pre-vibe_previbe-ai-productivity-activity-7394326792318132225-2Yxw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpfdqEBmCkKsE6inqmucwZx_AwvTGqPfJ8&fbclid=IwY2xjawRUIdxleHRuA2FlbQIxMABicmlkETE0Qnd0emRmVkczNEREQ1NLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlXDAb32Gh1OEYAqld9snykpyOTvPSurhqOE6aydpvkANZAcubI8cDdiG4kp_aem_PtXNTSCI-VzedwtdlM11Qw',
          thumbnail: imagevideo6,
      platform: 'LinkedIn',
    },
    {
      title: 'Web product ',
      description: 'Content for Promoting AI assistant web product',
      url: 'https://www.linkedin.com/posts/pre-vibe_ai-productivity-developers-activity-7395130538552102912-B8vw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpfdqEBmCkKsE6inqmucwZx_AwvTGqPfJ8&fbclid=IwY2xjawRUIZhleHRuA2FlbQIxMABicmlkETE0Qnd0emRmVkczNEREQ1NLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHq91pGSrtZlRMKfxKqUbi9b0ZMLqXOL7sLC0Mz_65rDN6MSdbxZ3PXksN6te_aem_pxjdd4gOtXOe8y2HdHj37gleHRuA2FlbQIxMABicmlkETE0Qnd0emRmVkczNEREQ1NLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlXDAb32Gh1OEYAqld9snykpyOTvPSurhqOE6aydpvkANZAcubI8cDdiG4kp_aem_PtXNTSCI',
          thumbnail: imagevideo7,
      platform: 'LinkedIn',
    },
  ];


  const experiences = [
    {
      title: ' Digital Marketing Manager (Hybrid)',
      organization: 'Horizon Trade Solution Pvt. Ltd.',
      period: 'December/2025 - Present',
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Created scripts and content for product promotions.</li>
          <li>Produced, edited, and posted reel videos for marketing campaigns.</li>
          <li>Managed and ran paid advertisements on social media.</li>
          <li>Communicated with customers and handled order coordination.</li>
          <li>Processed and arranged product deliveries</li>
        </ul>
      )
    },
    {
      title: ' Business Development Intern (Remote)',
      organization: 'iFly Nepal.',
      period: 'January/2026 - March/2026',
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Managed social media across platforms(Instagram, LinkedIn, TikTok, etc.)</li>
          <li>Created and published reviews on Google, TripAdvisor, and other third-party sites.</li>
          <li>Developed and uploaded travel/retreat content, blogs, and packages on websites and marketplaces.</li>
          <li>Managed listings on platforms such as Viator, GetYourGuide, TourHQ, and PG World.</li>
          <li>Supported content creation including ads, scripts, blogs, proposals, and email templates</li>
          <li>Conducted B2B research, built email databases, and assisted with outreach campaigns</li>
          <li>Maintained product data, pricing, and partner records</li>
        </ul>
      )
    },
     {
      title: ' Business Development Intern (Remote)',
      organization: 'iFly Nepal.',
      period: 'January/2026 - March/2026',
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Managed social media across platforms(Instagram, LinkedIn, TikTok, etc.)</li>
          <li>Created and published reviews on Google, TripAdvisor, and other third-party sites.</li>
          <li>Developed and uploaded travel/retreat content, blogs, and packages on websites and marketplaces.</li>
          <li>Managed listings on platforms such as Viator, GetYourGuide, TourHQ, and PG World.</li>
          <li>Supported content creation including ads, scripts, blogs, proposals, and email templates</li>
          <li>Conducted B2B research, built email databases, and assisted with outreach campaigns</li>
          <li>Maintained product data, pricing, and partner records</li>
        </ul>
      )
    },
    {
      title: ' Digital Marketing Analyst (Remote)',
      organization: 'Fizanto',
      period: 'October/2025 - January/2026',
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Contributed to digital marketing strategies for the AI-based SaaS product Pre-vibe, driving user sign-ups and engagement.</li>
          <li>Created and optimized content for LinkedIn, Meta, and Reddit to increase brand awareness.</li>
          <li>Analyzed key metrics(CTR, CPC, engagement rate) to improve campaign performance and ROI.</li>
          <li>Collaborated with product and design teams to ensure consistent branding and messaging.</li>
          <li>Conducted competitor and audience research to refine targeting strategies.</li>
        </ul>
      )
    },
    {
      title: 'React Devloper -Internship ',
      organization: 'Sarbatra Inc',
      period: 'April/2025 - june/2025',
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Learned React.js from core by working on real-world projects and cloning multiple websites.</li>
          <li>Acquired GitHub skills for version control and collaborative development.</li>
          <li>Designed a hotel website in Figma and developed it using React.js.</li>
          <li>Worked on various projects involving front-end development and UI/UX design.</li>
          <li>Gained confidence and communication skills through field activities, including photoshoots and video shoots for client projects.</li>
          <li>Participated in on-site tasks, enhancing teamwork and creative problem-solving abilities.</li>
        </ul>
      )
    },
    
    {
      title: 'Model United Nations ',
      organization: 'Various MUN Conferences',
      period: '2021 - 2022',
      description: 'Participated in multiple MUN conferences representing different countries and volunteering the Mun team.'
    },
    {
      title: 'Nepal Red Cross Volunteer',
      organization: 'Nepal Red Cross Society',
      period: 'March/2023 - july/2023',
      description: 'Community service and disaster response activities'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

const scrollToProjects = () => {
  // The section for projects is under "works", not "projects"
  const worksSection = document.getElementById("works");
  if (worksSection) {
    worksSection.scrollIntoView({ behavior: "smooth" });
  }
};
 return (
    <div className="min-h-screen bg-background">
      <Navbar />
 
  
      {/* Hero Section */}
      <section  id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
              <span className="text-gradient">Agrata Humagain</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 fade-in fade-in-delay-1">
              IT student with a passion for graphic design and digital marketing, beginner frontend developer.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in fade-in-delay-2">
Learning React, graphic design, and digital marketing while building simple, user-friendly projects.            </p>
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg rounded-xl fade-in fade-in-delay-3"
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section  id="about" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 fade-in">
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  I’m an IT student with a growing passion for frontend development, graphic design, and digital marketing, focused on building meaningful digital experiences. My journey in technology is driven by curiosity and a strong desire to solve real-world problems through creative and practical solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Beyond academics, I have actively volunteered with the Nepal Red Cross, where I developed strong leadership, teamwork, and communication skills.

                </p>
                <p className="text-lg text-muted-foreground">
I believe in the power of technology to create a positive impact, and I’m always eager to learn whether it’s React, design principles, marketing strategies, or new tools and frameworks that help me grow as an aspiring developerand digital marketer.                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center fade-in fade-in-delay-1">
                <div className="relative">
                  <img
                    src={agrataPhoto}
                    alt="Agrata Humagain"
                    className="w-64 h-64 rounded-full object-cover shadow-portfolio-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section  id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 fade-in">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in fade-in-delay-1">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="skill-badge group cursor-pointer">
                    <Icon className="w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Works (Graphics + Projects) */}
      <section id="works" className="py-20 section-gradient">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12">My Works</h2>

          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="flex justify-center mb-8 gap-1">
              <TabsTrigger value="graphics">Graphics</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>

            {/* Graphics */}
            <TabsContent value="graphics" className="grid md:grid-cols-2 gap-8">
              {graphics.map((item) => (
                <Card>
                  {item.image && (
                    <div className="w-full flex justify-center items-center bg-muted rounded-lg mb-4 border" style={{ minHeight: '200px', maxHeight: '400px', height: 'auto' }}>
                      <img
                        src={item.image}
                        className="max-w-full max-h-96 object-contain"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  )}
                </Card>
              ))}
            </TabsContent>

            {/* Projects */}
            <TabsContent value="projects" className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.title} className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>

            {/* Videos */}
            <TabsContent value="videos">
              {videos.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                    <Youtube className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">No videos yet</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Add videos to showcase your content here.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {videos.map((video, index) => (
                    <a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-portfolio-lg">

                        {/* Thumbnail */}
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-56 object-cover"
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                              <Play className="w-6 h-6 text-black ml-0.5" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 text-left">
                          <h3 className="font-semibold text-base mb-1">{video.title}</h3>
                          <p className="text-sm text-muted-foreground">{video.description}</p>
                        </div>
<div className="mb-2">
  <span className="text-xs text-muted-foreground">
    {video.platform}
  </span>
</div>
                      </Card>
                    </a>
                  ))}
                </div>
              )}
            </TabsContent>

          </Tabs>
        </div>
      </section>
      {/* Experience Section */}
<section id="experience" className="py-20">
  <div className="container mx-auto px-6 max-w-5xl">
    <h2 className="text-4xl font-bold text-center mb-12">
      Experience
    </h2>

    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card key={index} className="p-6 text-left">

          <h3 className="text-xl font-semibold">
            {exp.title}
          </h3>

          <p className="text-primary font-medium">
            {exp.organization}
          </p>

          <p className="text-sm text-muted-foreground mb-3">
            {exp.period}
          </p>

          <div className="text-muted-foreground text-sm">
            {exp.description}
          </div>

        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section  id="contact" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 fade-in">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="fade-in">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in discussing new opportunities, 
                  projects.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>agratahumagain111@gmail.com</span>
                     <span>+977-9762420429</span>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://www.linkedin.com/in/agrata-humagain-05472433a/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/agrata051" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
             
               
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
            </p>
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              Made by Agrata Humagain
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;