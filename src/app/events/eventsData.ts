import { Event } from '@/types/event';

export const eventsData: { active: Event[]; past: Event[] } = {
  active: [

  ],
  past: [
    {
      id: 1,
      name: "GDG ANDC Onboarding 2025-26",
      description: "Join us for the grand onboarding event of Google Developer Groups (GDG) On-Campus ANDC! Get to know the community, explore opportunities, and discover how you can learn, build, and grow with GDG.",
      date: "September 25, 2025",
      time: "2:00 PM",
      location: "Conference Room, Acharya Narendra Dev College, University of Delhi",
      signUpLink: "https://gdg-andc.vercel.app/",
      category: "Orientation" ,
      attendees: "All Students and Tech Enthusiasts Welcome",
      attendeesCount: null
    },
    {
      id: 2,
      name: "GDG ANDC Onboarding 2024-25",
      description: "The launch of Google Developer Groups (GDG) On-Campus ANDC, introducing students to the community’s vision, structure, and upcoming activities. The session featured the recruitment roadmap, sneak peek into Gen AI Study Jams, and live registration via QR code.",
      date: "September 26, 2024",
      time: "11:00 AM",
      location: "Conference Room, Acharya Narendra Dev College",
      signUpLink: "https://gdg-andc.vercel.app/",
      category: "Orientation" ,
      attendees: "Around 70 students",
      attendeesCount: 70
    },
    {
      id: 3,
      name: "Gen AI Study Jams - Information Session",
      description: "Kickstarting the Gen AI Study Jams campaign with a guided walkthrough of the timeline, registration steps, and key points to remember. A live registration demo and Q&A ensured students could confidently start their learning journey with Google Cloud and earn certifications.",
      date: "October 6, 2024",
      time: "11:00 AM",
      location: "Virtual (Google Meet)",
      signUpLink: "https://gdg-andc.vercel.app/",
      category: "Workshop",
      attendees: "Around 100 students enrolled",
      attendeesCount: 100
    },
    {
      id: 4,
      name: "Gen AI Unveiled - Build with AI",
      description: "A peer-led session exploring Study Jams' best practices and hands-on use of next-gen tools like Google AI Studio, Project IDX, and PictoCode. Live demos and interactive discussions gave participants the confidence to dive deeper into AI development.",
      date: "October 20, 2024",
      time: "7:00 PM",
      location: "Virtual (Google Meet)",
      signUpLink: "https://gdg-andc.vercel.app/",
      category: "Bootcamp",
      attendees: "Around 50 students",
      attendeesCount: 50
    },
    {
      id: 5,
      name: "GDG Got Latent",
      description: "An in-person event featuring web development insights, idea pitching, and a career talk by Mr. Priyansh Goel. Students learned best practices for growth, explored MAANG interview prep strategies, and discovered the value of hackathons and networking.",
      date: "November 14, 2024",
      time: "11:00 AM",
      location: "Conference Room, Acharya Narendra Dev College",
      signUpLink: "https://gdg-andc.vercel.app/",
      category: "Seminar",
      attendees: "Over 60 students",
      attendeesCount: 60
    },
    {
      id: 6,
      name: "Winter Tech Break – Inter-GDG Collaboration",
      description: "A nationwide Winter Tech Break session uniting 7 GDG chapters across India. A 2024 Google Solution Challenge Finalist shared a roadmap for identifying problems, building MVPs, and pitching impactful solutions, motivating students to begin their Challenge journey.",
      date: "December 9, 2024",
      time: "7:00 PM",
      location: "Virtual (Google Meet)",
      signUpLink: "https://gdg-andc.vercel.app/",
      category: "Workshop",
      attendees: "Students from 7+ institutions across India",
      attendeesCount: 100
    },
    {
      id: 7,
      name: "Build with AI – LLM & RAG Speaker Session",
      description: "An industry expert delivered insights on real-world applications of LLMs and RAG, including a hands-on demo that highlighted their role in building intelligent, real-time AI solutions.",
      date: "February 18, 2025",
      time: "7:00 PM",
      location: "Virtual (Google Meet)",
      signUpLink: "https://gdg-andc.vercel.app/",
      category: "Workshop",
      attendees: "Around 50 students",
      attendeesCount: 50
    },
    {
      id: 8,
      name: "Build with AI – Securing the Cloud",
      description: "A focused webinar with Google Cloud Security researchers Luvneesh Mugrai and Aadarsh Karumathil, covering bug resolution, vulnerability management, and career paths in cybersecurity. The session highlighted the importance of cloud defense in today’s evolving tech landscape.",
      date: "March 27, 2025",
      time: "8:15 PM",
      location: "Virtual (Google Meet)",
      signUpLink: "https://gdg-andc.vercel.app/",
      category: "Seminar",
      attendees: "Around 40 students",
      attendeesCount: 40
    }
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as Event[],
};
