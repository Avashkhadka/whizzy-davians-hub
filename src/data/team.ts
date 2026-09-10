import avash from "@/assets/team/avash.jpg";
import dipesh from "@/assets/team/dipes.jpeg";
import ishta from "@/assets/team/ishta.jpeg";
import maheshwor from "@/assets/team/maheshwor.jpeg";
import milin from "@/assets/team/milin.jpeg";
import rahita from "@/assets/team/rahita.jpeg";
import sarun from "@/assets/team/sarun.jpeg";
import shabda from "@/assets/team/shabda.jpeg";
import sita from "@/assets/team/sita.jpeg";
import riya from "@/assets/team/riya.jpeg";
import anmol from "@/assets/team/anmol.jpeg";
import sajina from "@/assets/team/sajina.jpeg";
import dilasha from "@/assets/team/dilasha.jpeg";
import Ishta from "@/assets/team/ishta.jpeg";

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
        name: "Maheshor Silwal",
        role: "Former President",
        image: maheshwor,
        isAlumni: true,
        batch: "2024-2025",
    },
    {
        id: "2",
        name: "Ishta Dangol",
        role: "President",
        image: Ishta,
        isAlumni: false,
    },
    {
        id: "3",
        name: "Avash Khadka",
        role: "Vice President",
        image: avash,
        isAlumni: false,
    },
    {
        id: "6",
        name: "Anmol Ranabhat",
        role: "Social Media",
        image: anmol,
        isAlumni: false,
    },

    {
        id: "15",
        name: "Sarun Maharjan",
        role: "Designer",
        image: sarun,
        isAlumni: false,
    },
    {
        id: "4",
        name: "Shabda Maharjan",
        role: "Member",
        image: shabda,
        isAlumni: false,
    },
    {
        id: "8",
        name: "Riya Tamang",
        role: "Member",
        image: riya,
        isAlumni: false,
    },
    {
        id: "9",
        name: "Sita Thadamagar",
        role: "Member",
        image: sita,
        isAlumni: false,
    },
    {
        id: "10",
        name: "Dilasha Maharjan",
        role: "Member",
        image: dilasha,
        isAlumni: false,
    },
    {
        id: "11",
        name: "Sajina Pradhananga",
        role: "Member",
        image: sajina,
        isAlumni: false,
    },
    // Alumni
    {
        id: "12",
        name: "Milin Shakya",
        role: "Founding President",
        image: milin,
        isAlumni: true,
        batch: "2023-2024",
    },
    {
        id: "13",
        name: "Dipesh Shakya",
        role: "Former President",
        image: dipesh,
        isAlumni: true,
        batch: "2023-2024",
    },
    // {
    //     id: "15",
    //     name: "Manashree Shakya",
    //     role: "Vice President",
    //     image: manashree,
    //     isAlumni: true,
    //     batch: "2024-2025",
    // },
    {
        id: "14",
        name: "Rahita Shakya",
        role: "Former President",
        image: rahita,
        isAlumni: true,
        batch: "2024-2025",
    },
];

export const getCurrentMembers = () => teamMembers.filter((m) => !m.isAlumni);
export const getAlumni = () => teamMembers.filter((m) => m.isAlumni);
