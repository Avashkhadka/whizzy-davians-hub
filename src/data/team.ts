export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  isAlumni: boolean;
  batch?: string;
  contribution?: string;
}

export const teamMembers: TeamMember[] = [
  // Current Members
  {
    id: "1",
    name: "Rahul Sharma",
    role: "President",
    image: "/placeholder.svg",
    isAlumni: false,
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "Vice President",
    image: "/placeholder.svg",
    isAlumni: false,
  },
  {
    id: "3",
    name: "Amit Kumar",
    role: "Secretary",
    image: "/placeholder.svg",
    isAlumni: false,
  },
  {
    id: "4",
    name: "Sneha Gupta",
    role: "Treasurer",
    image: "/placeholder.svg",
    isAlumni: false,
  },
  {
    id: "5",
    name: "Vikram Singh",
    role: "Sports Coordinator",
    image: "/placeholder.svg",
    isAlumni: false,
  },
  {
    id: "6",
    name: "Ananya Reddy",
    role: "Cultural Head",
    image: "/placeholder.svg",
    isAlumni: false,
  },
  {
    id: "7",
    name: "Rohan Mehta",
    role: "Tech Lead",
    image: "/placeholder.svg",
    isAlumni: false,
  },
  {
    id: "8",
    name: "Kavya Joshi",
    role: "PR & Marketing",
    image: "/placeholder.svg",
    isAlumni: false,
  },
  // Alumni
  {
    id: "9",
    name: "Arjun Nair",
    role: "Founding President",
    image: "/placeholder.svg",
    isAlumni: true,
    batch: "2020-2023",
    contribution: "Established the club and organized first BCA Cup",
  },
  {
    id: "10",
    name: "Meera Krishnan",
    role: "Former Vice President",
    image: "/placeholder.svg",
    isAlumni: true,
    batch: "2020-2023",
    contribution: "Led cultural initiatives and community outreach",
  },
  {
    id: "11",
    name: "Siddharth Rao",
    role: "Former Secretary",
    image: "/placeholder.svg",
    isAlumni: true,
    batch: "2021-2024",
    contribution: "Streamlined operations and member management",
  },
  {
    id: "12",
    name: "Divya Sharma",
    role: "Former Tech Lead",
    image: "/placeholder.svg",
    isAlumni: true,
    batch: "2021-2024",
    contribution: "Built the first club website and digital presence",
  },
];

export const getCurrentMembers = () => teamMembers.filter((m) => !m.isAlumni);
export const getAlumni = () => teamMembers.filter((m) => m.isAlumni);
