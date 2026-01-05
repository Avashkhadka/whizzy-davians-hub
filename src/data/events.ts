import heroSportsImage from "@/assets/hero-sports.jpg";
import culturalFestImage from "@/assets/cultural-fest.jpg";
import hackathonImage from "@/assets/hackathon.jpg";

export interface Event {
  id: string;
  slug: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  registrationInfo: string;
  sponsors: { name: string; tier: "Title Sponsor" | "Co-Sponsor" | "Partner"; logo?: string }[];
  rules: string[];
  status: "upcoming" | "current" | "past";
}

export const events: Event[] = [
  {
    id: "1",
    slug: "bca-cup-2026",
    name: "BCA Cup 2026",
    date: "2026-02-15",
    time: "9:00 AM - 6:00 PM",
    venue: "College Sports Complex, Main Campus",
    shortDescription: "The ultimate inter-college sports tournament featuring cricket, football, and basketball.",
    fullDescription: "BCA Cup 2026 is our flagship annual sports tournament bringing together the best athletes from colleges across the region. This year's edition promises intense competition in cricket, football, and basketball. With over 500 participants expected, this is set to be the biggest BCA Cup yet. Join us for a day of sportsmanship, teamwork, and unforgettable moments.",
    image: heroSportsImage,
    registrationInfo: "Registration is open until February 10, 2026. Teams must consist of 11 players for cricket, 11 for football, and 5 for basketball. Entry fee: ₹500 per team.",
    sponsors: [
      { name: "TechCorp India", tier: "Title Sponsor" },
      { name: "SportZone", tier: "Co-Sponsor" },
      { name: "EduFirst", tier: "Partner" },
      { name: "FitLife", tier: "Partner" },
    ],
    rules: [
      "All participants must be currently enrolled college students with valid ID",
      "Teams must arrive 30 minutes before their scheduled match time",
      "Standard international rules apply for all sports",
      "The organizing committee's decision is final in case of disputes",
      "Any form of misconduct will result in immediate disqualification",
      "Proper sports attire is mandatory for all participants",
      "Mobile phones are not allowed on the playing field",
      "Each team must have a designated captain for communication",
    ],
    status: "current",
  },
  {
    id: "2",
    slug: "cultural-fest-2026",
    name: "Cultural Fest 2026",
    date: "2026-03-20",
    time: "4:00 PM - 10:00 PM",
    venue: "College Auditorium & Open Air Theatre",
    shortDescription: "A celebration of art, music, dance, and creativity featuring student performances.",
    fullDescription: "Cultural Fest 2026 is our annual celebration of artistic expression and cultural diversity. Experience mesmerizing dance performances, soulful music, theatrical productions, and art exhibitions all in one spectacular evening. This is your chance to showcase your talent or simply enjoy the incredible performances by fellow students.",
    image: culturalFestImage,
    registrationInfo: "Solo and group registrations open until March 15, 2026. Categories include: Dance, Music, Drama, Art Exhibition, and Fashion Show.",
    sponsors: [
      { name: "ArtSpace Gallery", tier: "Title Sponsor" },
      { name: "MusicWorld", tier: "Co-Sponsor" },
    ],
    rules: [
      "Performance time limits: Solo acts - 5 minutes, Group acts - 10 minutes",
      "Pre-recorded backing tracks only; no live instruments unless registered",
      "Content must be appropriate for all audiences",
      "Props and costumes must be arranged by participants",
      "Participants must attend the technical rehearsal on March 19",
    ],
    status: "upcoming",
  },
  {
    id: "3",
    slug: "hackathon-2025",
    name: "Code Sprint Hackathon",
    date: "2025-11-15",
    time: "10:00 AM - 10:00 PM",
    venue: "Computer Science Lab Building",
    shortDescription: "A 12-hour coding marathon solving real-world problems with innovative solutions.",
    fullDescription: "Code Sprint Hackathon was an intense 12-hour coding competition where teams of developers came together to build innovative solutions for real-world problems. From AI-powered apps to sustainability solutions, our participants showcased incredible creativity and technical prowess.",
    image: hackathonImage,
    registrationInfo: "This event has concluded.",
    sponsors: [
      { name: "Google Developer Groups", tier: "Title Sponsor" },
      { name: "GitHub", tier: "Co-Sponsor" },
      { name: "AWS", tier: "Partner" },
    ],
    rules: [
      "Teams of 2-4 members only",
      "All code must be written during the hackathon",
      "Use of pre-existing libraries and frameworks is allowed",
      "Projects must be presented within 5 minutes",
    ],
    status: "past",
  },
  {
    id: "4",
    slug: "leadership-workshop-2025",
    name: "Leadership Summit 2025",
    date: "2025-10-05",
    time: "2:00 PM - 5:00 PM",
    venue: "Conference Hall, Block A",
    shortDescription: "Interactive workshop on developing leadership skills with industry experts.",
    fullDescription: "Leadership Summit 2025 was an enriching workshop featuring talks from industry leaders, interactive sessions on effective communication, and team-building activities. Participants learned valuable skills in decision-making, conflict resolution, and inspiring teams.",
    image: hackathonImage,
    registrationInfo: "This event has concluded.",
    sponsors: [
      { name: "LeaderMind Institute", tier: "Title Sponsor" },
    ],
    rules: [
      "Open to all students",
      "Active participation required",
      "Certificates provided upon completion",
    ],
    status: "past",
  },
];

export const getCurrentEvent = () => events.find((e) => e.status === "current");
export const getUpcomingEvents = () => events.filter((e) => e.status === "upcoming");
export const getPastEvents = () => events.filter((e) => e.status === "past");
export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug);
