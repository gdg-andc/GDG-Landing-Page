import gdgLogo from '../assets/gdg.png';

export interface AgendaItem {
  time: string;
  activity: string;
}

export interface Speaker {
  name: string;
  role: string;
  image: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  status: 'Upcoming' | 'Past';
  description: string;
  prize?: string;
  maxEntries?: string;
  registrationLink?: string;
  agenda?: AgendaItem[];
  speakers?: Speaker[];
}

export const events: Event[] = [
  {
    id: 1,
    title: "GDG ANDC Onboarding 2025-26",
    date: "September 25, 2025",
    time: "2:00 PM",
    location: "Conference Room",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773772351/kickstart_ai_ry4rx5.jpg",
    category: "Orientation",
    status: "Past",
    description: "Join us for the grand onboarding event of Google Developer Groups (GDG) On-Campus ANDC! Get to know the community, explore opportunities, and discover how you can learn, build, and grow with GDG.",
    agenda: [
      { time: "02:00 PM", activity: "Welcome & Introduction" },
      { time: "02:30 PM", activity: "Community Vision & Goals" },
      { time: "03:15 PM", activity: "Networking Session" }
    ],
    speakers: []
  },
  {
    id: 2,
    title: "Build with AI – Securing the Cloud",
    date: "March 27, 2025",
    time: "8:15 PM",
    location: "Virtual (Google Meet)",
    image: gdgLogo,
    category: "Seminar",
    status: "Past",
    description: "A focused webinar with Google Cloud Security researchers Luvneesh Mugrai and Aadarsh Karumathil, covering bug resolution, vulnerability management, and career paths in cybersecurity. The session highlighted the importance of cloud defense in today’s evolving tech landscape.",
    agenda: [
      { time: "08:15 PM", activity: "Introduction to Cloud Security" },
      { time: "08:45 PM", activity: "Vulnerability Management" },
      { time: "09:30 PM", activity: "Q&A with Researchers" }
    ],
    speakers: [
      { name: "Luvneesh Mugrai", role: "Google Cloud Security Researcher", image: "https://picsum.photos/seed/luvneesh/100" },
      { name: "Aadarsh Karumathil", role: "Google Cloud Security Researcher", image: "https://picsum.photos/seed/aadarsh/100" }
    ]
  },
  {
    id: 3,
    title: "Build with AI – LLM & RAG Speaker Session",
    date: "February 18, 2025",
    time: "7:00 PM",
    location: "Virtual (Google Meet)",
    image: gdgLogo,
    category: "Workshop",
    status: "Past",
    description: "An industry expert delivered insights on real-world applications of LLMs and RAG, including a hands-on demo that highlighted their role in building intelligent, real-time AI solutions.",
    agenda: [
      { time: "07:00 PM", activity: "Understanding LLMs & RAG" },
      { time: "07:45 PM", activity: "Live Demo: Building AI Solutions" },
      { time: "08:30 PM", activity: "Interactive Q&A" }
    ],
    speakers: []
  },
  {
    id: 4,
    title: "Winter Tech Break – Inter-GDG Collaboration",
    date: "December 9, 2024",
    time: "7:00 PM",
    location: "Virtual (Google Meet)",
    image: gdgLogo,
    category: "Workshop",
    status: "Past",
    description: "A nationwide Winter Tech Break session uniting 7 GDG chapters across India. A 2024 Google Solution Challenge Finalist shared a roadmap for identifying problems, building MVPs, and pitching impactful solutions, motivating students to begin their Challenge journey.",
    agenda: [
      { time: "07:00 PM", activity: "Introduction & Welcome" },
      { time: "07:30 PM", activity: "Solution Challenge Roadmap" },
      { time: "08:15 PM", activity: "Idea Pitching Tips" }
    ],
    speakers: []
  },
  {
    id: 5,
    title: "GDG Got Latent",
    date: "November 14, 2024",
    time: "11:00 AM",
    location: "Conference Room",
    image: gdgLogo,
    category: "Seminar",
    status: "Past",
    description: "An in-person event featuring web development insights, idea pitching, and a career talk by Mr. Priyansh Goel. Students learned best practices for growth, explored MAANG interview prep strategies, and discovered the value of hackathons and networking.",
    agenda: [
      { time: "11:00 AM", activity: "Web Dev Insights" },
      { time: "12:00 PM", activity: "Career Talk: MAANG Prep" },
      { time: "01:00 PM", activity: "Idea Pitching Session" }
    ],
    speakers: [
      { name: "Mr. Priyansh Goel", role: "Speaker", image: "https://picsum.photos/seed/priyansh/100" }
    ]
  },
  {
    id: 6,
    title: "Gen AI Unveiled - Build with AI",
    date: "October 20, 2024",
    time: "7:00 PM",
    location: "Virtual (Google Meet)",
    image: gdgLogo,
    category: "Bootcamp",
    status: "Past",
    description: "A peer-led session exploring Study Jams' best practices and hands-on use of next-gen tools like Google AI Studio, Project IDX, and PictoCode. Live demos and interactive discussions gave participants the confidence to dive deeper into AI development.",
    agenda: [
      { time: "07:00 PM", activity: "Study Jams Best Practices" },
      { time: "07:45 PM", activity: "Hands-on: Google AI Studio" },
      { time: "08:30 PM", activity: "Project IDX & PictoCode Demo" }
    ],
    speakers: []
  },
  {
    id: 7,
    title: "Gen AI Study Jams - Information Session",
    date: "October 6, 2024",
    time: "11:00 AM",
    location: "Virtual (Google Meet)",
    image: gdgLogo,
    category: "Workshop",
    status: "Past",
    description: "Kickstarting the Gen AI Study Jams campaign with a guided walkthrough of the timeline, registration steps, and key points to remember. A live registration demo and Q&A ensured students could confidently start their learning journey with Google Cloud and earn certifications.",
    agenda: [
      { time: "11:00 AM", activity: "Campaign Timeline Walkthrough" },
      { time: "11:45 AM", activity: "Live Registration Demo" },
      { time: "12:15 PM", activity: "Q&A Session" }
    ],
    speakers: []
  },
  {
    id: 8,
    title: "GDG ANDC Onboarding 2024-25",
    date: "September 26, 2024",
    time: "11:00 AM",
    location: "Conference Room",
    image: gdgLogo,
    category: "Orientation",
    status: "Past",
    description: "The launch of Google Developer Groups (GDG) On-Campus ANDC, introducing students to the community’s vision, structure, and upcoming activities. The session featured the recruitment roadmap, sneak peek into Gen AI Study Jams, and live registration via QR code.",
    agenda: [
      { time: "11:00 AM", activity: "Community Introduction" },
      { time: "11:45 AM", activity: "Recruitment Roadmap" },
      { time: "12:30 PM", activity: "Gen AI Study Jams Sneak Peek" }
    ],
    speakers: []
  },
  {
    id: 9,
    title: "Kickstart AI with Google Developer Groups!",
    date: "November 4, 2025",
    time: "1:00 PM",
    location: "Conference Room, Acharya Narendra Dev College",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773772344/orientation_25_k14mll.jpg",
    category: "Bootcamp",
    status: "Past",
    description: "Kickstart AI with Google Developer Groups! Join us for a great session on AI.",
    agenda: [
      { time: "01:00 PM", activity: "Kickstart AI with Google Developer Groups!" },
      { time: "03:00 PM", activity: "Closing" }
    ],
    speakers: [
      { name: "Adi Maqsood", role: "Speaker", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910247/WhatsApp_Image_2026-03-07_at_11.51.41_PM_dx55c5.jpg" },
      { name: "Jayesh Raj Neti", role: "Speaker", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910247/WhatsApp_Image_2026-03-07_at_11.51.42_PM_1_lxmfnd.jpg" },
      { name: "Simran Bartwal", role: "Speaker", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910247/WhatsApp_Image_2026-03-07_at_11.51.47_PM_spe4ms.jpg" }
    ]
  },
  {
    id: 10,
    title: "TechSprint Hackathon: Introductory Session",
    date: "January 2, 2026",
    time: "6:00 PM",
    location: "Virtual (Google Meet)",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773772347/techsprint_wpmo80.jpg",
    category: "Info Session",
    status: "Past",
    description: "Get complete hackathon details and resolve queries related to registration, rules, team formation & submissions.",
    agenda: [
      { time: "06:00 PM", activity: "Introductory Session & Hackathon Details" }
    ],
    speakers: [
      { name: "Vidhushi", role: "Speaker", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910905/WhatsApp_Image_2026-03-07_at_11.51.53_PM_pptwvx.jpg" }
    ]
  },
  {
    id: 11,
    title: "Explore Google Technologies: A Hands-On Workshop",
    date: "January 7, 2026",
    time: "4:00 PM",
    location: "Virtual",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773772347/techsprint_wpmo80.jpg",
    category: "Workshop",
    status: "Past",
    description: "Learn about the tools needed for the hackathon. We will cover Stitch, Firebase Studio, AI Studio, and Teachable Machine.",
    agenda: [
      { time: "06:00 PM", activity: "Tools and Technologies Workshop" }
    ],
    speakers: [
      { name: "Pranav", role: "Speaker", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910582/WhatsApp_Image_2026-03-07_at_11.51.45_PM_1_j0utwf.jpg" },
      { name: "Ishan Srivastava", role: "Speaker", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910252/WhatsApp_Image_2026-03-07_at_11.51.52_PM_2_gtpfbl.jpg" }
    ]
  },
  {
    id: 12,
    title: "TechSprint Hackathon - Finale",
    date: "January 28, 2026",
    time: "10:00 AM",
    location: "Acharya Narendra Dev College",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773772347/techsprint_wpmo80.jpg",
    category: "Hackathon",
    status: "Past",
    description: "The grand finale of the TechSprint Hackathon! Join us for the final project presentations and evaluations.",
    agenda: [
      { time: "10:00 AM", activity: "Final Project Presentations" },
      { time: "01:00 PM", activity: "Evaluation and Closing" }
    ],
    speakers: []
  },
  {
    id: 13,
    title: "Trace Overflow - Problem Solving",
    date: "March 23, 2026",
    time: "11:00 AM",
    location: "Conference Room",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773773025/2_tvvwod.jpg",
    category: "Competition",
    status: "Past",
    prize: "Winner: Rs. 700 + Certificate | Runner Up: Rs. 300 + Certificate",
    maxEntries: "40",
    description: "A high-stakes problem-solving challenge. Join us for a battle of logic and speed. In collaboration with Turing Society, Department of Computer Science ANDC.",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfJTYl6CIOgITmx_QR19bOktPVgpEYIbvxUrvtITJcYbQDZeQ/viewform",
    agenda: [
      { time: "11:00 AM", activity: "Competition Start" },
      { time: "12:30 PM", activity: "Winner Announcement" }
    ],
    speakers: [
      { name: "Ishan Srivastava", role: "Coordinator", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910252/WhatsApp_Image_2026-03-07_at_11.51.52_PM_2_gtpfbl.jpg" },
      { name: "Jayesh Raj Neti", role: "Coordinator", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910247/WhatsApp_Image_2026-03-07_at_11.51.42_PM_1_lxmfnd.jpg" },
      { name: "Utkarsh Shekhar", role: "Registration Volunteer", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910466/WhatsApp_Image_2026-03-07_at_11.51.42_PM_fevlpe.jpg" },
      { name: "Shristi Singh", role: "Registration Volunteer", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910537/WhatsApp_Image_2026-03-07_at_11.51.40_PM_swufxw.jpg" }
    ]
  },
  {
    id: 14,
    title: "Tech Quest - Technical Quiz",
    date: "March 23, 2026",
    time: "11:00 AM",
    location: "Room 09",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773772977/3_ktbgvj.png",
    category: "Competition",
    status: "Past",
    prize: "Winner: Rs. 700 + Certificate | Runner Up: Rs. 300 + Certificate",
    maxEntries: "30",
    description: "Test your knowledge in the ultimate technical quiz. In collaboration with Turing Society, Department of Computer Science ANDC.",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScKNzYYT2RtOiFg_Sudr9bMEiR6YihLKYQvxrU72xWxiLfysw/viewform?usp=header",
    agenda: [
      { time: "11:00 AM", activity: "Quiz Round 1" },
      { time: "12:30 PM", activity: "Winner Announcement" }
    ],
    speakers: [
      { name: "Udita Puri", role: "Coordinator", image: "" },
      { name: "Manushri Mandal", role: "Coordinator", image: "" },
      { name: "Sanjay Sharma", role: "Coordinator", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910880/WhatsApp_Image_2026-03-07_at_11.51.53_PM_1_ikspjy.jpg" },
      { name: "Suraj Ganju", role: "Registration Volunteer", image: "" }
    ]
  },
  {
    id: 15,
    title: "HuntX - Treasure Hunt",
    date: "March 23, 2026",
    time: "12:00 PM",
    location: "College Campus",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773773021/1_lnuht3.png",
    category: "Competition",
    prize: "Winner: Rs. 700 + Certificate | Runner Up: Rs. 300 + Certificate",
    maxEntries: "10 Teams",
    status: "Past",
    description: "An adventurous treasure hunt across the campus. Team up and solve clues to win. In collaboration with Turing Society, Department of Computer Science ANDC.",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfxCJimIOzWsQGZZYliQMI0icV8TgUY0PSd7YJLAkRKIN07sg/viewform?usp=header",
    agenda: [
      { time: "12:00 PM", activity: "Clue Distribution" },
      { time: "01:30 PM", activity: "Winner Announcement" }
    ],
    speakers: [
      { name: "Mahi Jain", role: "Coordinator", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910518/WhatsApp_Image_2026-03-07_at_11.51.41_PM_1_vlm3tm.jpg" },
      { name: "Muskan Deswal", role: "Coordinator", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910466/WhatsApp_Image_2026-03-07_at_11.51.44_PM_1_uhwjrm.jpg" },
      { name: "Subham", role: "Coordinator", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910323/WhatsApp_Image_2026-03-07_at_11.51.43_PM_h6f0m9.jpg" },
      { name: "Angel", role: "Registration Volunteer", image: "" },
      { name: "Aryan Mehta", role: "Registration Volunteer", image: "" }
    ]
  },
  {
    id: 16,
    title: "Fall Guys - PC Gaming",
    date: "March 23, 2026",
    time: "12:30 PM",
    location: "Conference Room",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773772996/7_zrqo9p.jpg",
    category: "Gaming",
    prize: "Winner: Rs. 1000 + Certificate | Runner Up: Certificate",
    maxEntries: "60",
    status: "Past",
    description: "Ultimate PC gaming showdown with Fall Guys. In collaboration with Turing Society, Department of Computer Science ANDC.",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe2jwjvlqeSlXnD-qdx2YLOMD6pR4qyBNLPYx6UOAKxrfuLqw/viewform?usp=dialog",
    agenda: [
      { time: "12:30 PM", activity: "Qualifying Rounds" },
      { time: "02:00 PM", activity: "Winner Announcement" }
    ],
    speakers: [
      { name: "Ankur Bag", role: "Coordinator", image: "" },
      { name: "Suraj Kumar", role: "Coordinator", image: "" },
      { name: "Sejal Gupta", role: "Registration Volunteer", image: "" },
      { name: "Vidhishree", role: "Registration Volunteer", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910905/WhatsApp_Image_2026-03-07_at_11.51.53_PM_pptwvx.jpg" }
    ]
  },
  {
    id: 17,
    title: "Flag The Code - Puzzle",
    date: "March 23, 2026",
    time: "12:30 PM",
    location: "Room 09",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773772984/5_w89k70.jpg",
    category: "Competition",
    prize: "Winner: Rs. 1000 + Certificate | Runner Up: Certificate",
    maxEntries: "40",
    status: "Past",
    registrationLink: "https://forms.gle/WKMQES5n4J98ig1z8",
    description: "A cryptic puzzle-solving event for the brightest minds. In collaboration with Turing Society, Department of Computer Science ANDC.",
    agenda: [
      { time: "12:30 PM", activity: "Puzzle Unveiling" },
      { time: "01:30 PM", activity: "Winner Announcement" }
    ],
    speakers: [
      { name: "Aditya Kumar Chaudhary", role: "Coordinator", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910284/WhatsApp_Image_2026-03-07_at_11.51.44_PM_i0rdux.jpg" },
      { name: "Pranav", role: "Coordinator", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910582/WhatsApp_Image_2026-03-07_at_11.51.45_PM_1_j0utwf.jpg" },
      { name: "Ishitva Joshi", role: "Coordinator", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772911025/WhatsApp_Image_2026-03-07_at_11.51.52_PM_1_wkuhxj.jpg" },
      { name: "Shubhi Srivastava", role: "Registration Volunteer", image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1772910940/WhatsApp_Image_2026-03-07_at_11.51.51_PM_f6w6v3.jpg" },
      { name: "Nayan Roy", role: "Registration Volunteer", image: "" }
    ]
  },
  {
    id: 18,
    title: "Tekken Showdown - Console Gaming",
    date: "March 23, 2026",
    time: "2:30 PM",
    location: "Conference Room",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773772981/4_spcfdp.jpg",
    prize: "Winner: Rs. 1000 + Certificate | Runner Up: Certificate",
    maxEntries: "40",
    category: "Gaming",
    status: "Past",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSecpt07a3jlJpg4RspCjMfoGpvmi35wRkUzdtduScLL6lKYmA/viewform?usp=publish-editor",
    description: "Classic console gaming battle with Tekken Showdown. In collaboration with Turing Society, Department of Computer Science ANDC.",
    agenda: [
      { time: "02:30 PM", activity: "Match Bracket Start" },
      { time: "03:30 PM", activity: "Winner Announcement" }
    ],
    speakers: [
      { name: "Yuganshu", role: "Coordinator", image: "" },
      { name: "Yashraj", role: "Coordinator", image: "" },
      { name: "Priyanshu", role: "Coordinator", image: "" },
      { name: "Sarthak", role: "Registration Volunteer", image: "" },
      { name: "Mradul", role: "Registration Volunteer", image: "" }
    ]
  },
  {
    id: 19,
    title: "Free Fire - Mobile Gaming",
    date: "March 23, 2026",
    time: "2:30 PM",
    prize: "Winner: Rs. 1000 + Certificate | Runner Up: Certificate",
    maxEntries: "48",
    location: "Room 09",
    image: "https://res.cloudinary.com/dzraj49fe/image/upload/v1773772991/6_gks2bx.jpg",
    category: "Gaming",
    status: "Past",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfYkK8vMNAghG6s-syj4zhxxcZLHUa59wXArpsepKLbPZA6Sg/viewform?usp=header",
    description: "Intense mobile gaming competition with Free Fire. In collaboration with Turing Society, Department of Computer Science ANDC.",
    agenda: [
      { time: "02:30 PM", activity: "Squad Battles" },
      { time: "04:00 PM", activity: "Winner Announcement" }
    ],
    speakers: [
      { name: "Plabon Roy", role: "Coordinator", image: "" },
      { name: "Abdullah Nasim", role: "Coordinator", image: "" },
      { name: "Aryan Raj", role: "Coordinator", image: "" },
      { name: "Yuvraj", role: "Registration Volunteer", image: "" },
      { name: "Abhi kumar", role: "Registration Volunteer", image: "" }
    ]
  }
];

