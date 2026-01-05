import heroSportsImage from "@/assets/hero-sports.jpg";
import culturalFestImage from "@/assets/sportsCarnival.jpeg";
import hackathonImage from "@/assets/hackathon.jpg";
import bcasup2026 from "@/assets/bcacup2026.jpg";

export interface Event {
    id: string;
    slug: string;
    name: string;
    date: string;
    time: string;
    align: string;
    venue: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    registrationInfo: string;
    sponsors: { name: string; tier: "Title Sponsor" | "Co-Sponsor" | "Medical Partner" | "" | "Partner"; logo?: string }[];
    rules: string[];
    status: "upcoming" | "current" | "past";
}

export const events: Event[] = [
    {
        id: "1",
        slug: "bca-cup-2026",
        name: "BCA Cup 2026",
        date: "2026-01-23",
        align: " h-[52rem]",
        time: "8:00 AM - 6:00 PM",
        venue: "DAV College, Futsal Ground",
        shortDescription: "The ultimate inter-college sports tournament featuring cricket, football, and basketball.",
        fullDescription:
            "The Fourth BCA Cup – Men’s Inter-College Futsal Tournament 2025 is being organized by Whizzy DAVians on Magh 9–10, 2082 (Jan 23–24, 2026) at the DAV College Futsal Court, Dhobighat, Lalitpur. The tournament is exclusively for BCA students, featuring 32 teams selected from 80+ colleges across Kathmandu Valley. With an expected audience of 4,000+ spectators, the event promises two days of high-energy competition and sportsmanship.",
        image: bcasup2026,
        registrationInfo: "Registration is open until January 21, 2026. Teams must consist of 10 players for football. Entry fee: Rs.12000 per team.",
        sponsors: [
            { name: "Coming Soon", tier: "Title Sponsor" },
            { name: "Coming Soon", tier: "Co-Sponsor" },
            { name: "Coming Soon", tier: "Partner" },
            { name: "Coming Soon", tier: "Partner" },
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
            "Rs. 12,000 per team, including a Rs. 2,000 refundable security deposit",
            "Must submit valid ID",
            "Cannot play for multiple teams",
            "Players from A-Division, National League, similar levels, or those who have represented the country internationally are ineligible. If such players are found on a team, the team will be disqualified and the registration fee will not be refunded",
            "Recently passed 8th semester students can also take part in the Tournament",
            "Minimum 7, maximum 9 players per team",
            "All players must be from the same college",
            "Players must wear identical jerseys with jersey number",
            "No smoking, drinking, drug use, or abusive language inside college premises",
            "Referee's decision is final",
            "Maintain sportsmanship",
            "Match Duration: 15 minutes (2 x 7 minutes + 1-minute break)",
            "6 Aside Match",
            "Semi-Final & Final: 20 minutes",
            "Win: 3 points",
            "Draw: 1 point each",
            "Tiebreaker: Goal difference, cards, head-to-head",
            "Penalty Shootout: Free kicks",
            "Team Registration: Submit required documents by January 21, 2026",
            "Tie-Sheet Draw: January 22, 2026, 10:00 AM",
            "Refereeing: ANFA-authorized referees",
            "Card Penalties: Yellow Card: Rs. 250 fine per card, double yellow card 2-minute suspension; Red Card: Rs. 500 fine per card, 2-minute suspension",
            "Medical: First-aid provided by organizers; Teams responsible for major injuries",
            "Protests: Must be filed in writing within 1 hour of the match along with fee of Rs. 2000/-; accepted only until the quarterfinals; must include concrete evidence supporting the claim; referee’s decision is final; Rs. 1000 refundable if protest is successful",
            "In case of students from 1st Semester, college official letter must be submitted",
            "Organizers can demand any documentation at any time",
            "To be announced by organizers",
        ],
        status: "current",
    },
    {
        id: "2",
        slug: "cultural-fest-2026",
        name: "Sports Carnival",
        date: "2026-02-28",
        time: "4:00 PM - 10:00 PM",
        align: "-translate-y-12",
        venue: "DAV Complex",
        shortDescription: "A celebration of art, music, dance, and creativity featuring student performances.",
        fullDescription:
            "The Sports Carnival is a vibrant celebration of energy, teamwork, and sportsmanship, bringing together students from all semesters to compete, connect, and showcase their talents. The event promotes physical fitness, unity, and healthy competition through a variety of exciting sports activities, creating an inclusive platform where every student gets the opportunity to participate and celebrate the spirit of sports.",
        image: culturalFestImage,
        registrationInfo: "Solo and group registrations.",
        sponsors: [
            { name: "Coming Soon", tier: "Title Sponsor" },
            { name: "Coming Soon", tier: "Co-Sponsor" },
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
        name: "DAV Codefest 2025",
        date: "2025-07-25",
        time: "10:00 AM - 10:00 PM",
        align: " h-[59rem]",
        venue: "DAV Complex",
        shortDescription: "A 12-hour coding marathon solving real-world problems with innovative solutions.",
        fullDescription:
            "Cognito DAV IT Club of DAV College is a vibrant community of tech enthusiasts that organizes various events, including Capture the Flag challenges and its flagship Hackathon. The club brings together students passionate about technology, coding, and innovation. Their recent 48-hour Hackathon attracted 150+ participants from all over Nepal and was hailed as a major success, showcasing creativity, teamwork, and technical skills on a national level.",
        image: hackathonImage,
        registrationInfo: "This event has concluded.",
        sponsors: [
            { name: "T-shirt Nepal", tier: "Title Sponsor" },
            { name: "BloodHospital", tier: "Medical Partner" },
            { name: "Xtreme Energy Drink", tier: "Partner" },
            { name: "R-tech Solutions", tier: "Partner" },
            { name: "TechAxis Pvt.Ltd", tier: "Partner" },
            { name: "Nectar Digit", tier: "Partner" },
            { name: "Vianet Communication Pvt.Ltd", tier: "Partner" },
            { name: "ICT Samachar", tier: "Partner" },
            { name: "Nepal Research and Collabaration Center(NRCC)", tier: "Partner" },
            { name: "Active Computer Traders", tier: "Partner" },
            { name: "ICT Foundation Nepal", tier: "Partner" },
            { name: "Parewa Labs Pvt.Ltd (Programiz)", tier: "Partner" },
            { name: "Women In Information Technology (WIIT)", tier: "Partner" },
        ],
        rules: ["Teams of 2-4 members only", "All code must be written during the hackathon", "Use of pre-existing libraries and frameworks is allowed", "Projects must be presented within 5 minutes"],
        status: "past",
    },
];

export const getCurrentEvent = () => events.find((e) => e.status === "current");
export const getUpcomingEvents = () => events.filter((e) => e.status === "upcoming");
export const getPastEvents = () => events.filter((e) => e.status === "past");
export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug);
