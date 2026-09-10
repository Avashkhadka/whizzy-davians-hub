import img1 from "../assets/memories/1.jpg";
import img2 from "../assets/memories/2.jpg";
import img3 from "../assets/memories/3.jpg";
import img4 from "../assets/memories/4.jpg";
import img5 from "../assets/memories/5.jpg";
import img6 from "../assets/memories/6.jpg";
import img7 from "../assets/memories/7.jpg";
import img8 from "../assets/memories/8.jpg";
import img9 from "../assets/memories/9.jpg";
import img10 from "../assets/memories/10.jpg";
import img11 from "../assets/memories/11.jpg";
import img12 from "../assets/memories/12.jpg";
import img13 from "../assets/memories/13.jpg";
import img14 from "../assets/memories/14.jpg";
import img15 from "../assets/memories/15.jpg";
import img16 from "../assets/memories/16.jpg";
import img17 from "../assets/memories/17.jpeg";

export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    event: string;
}

export const galleryImages: GalleryImage[] = [
    { id: "1", src: img1, alt: "BCA Cup 2025 Cricket Final", event: "Pubg Tournament 2025" },
    { id: "2", src: img2, alt: "Cultural Fest Dance Performance", event: "Sports Carnival 2025" },
    { id: "3", src: img3, alt: "Hackathon Team Working", event: "Sports Carnival 2025" },
    { id: "4", src: img4, alt: "Leadership Workshop Session", event: "Sports Carnival 2025" },
    { id: "17", src: img17, alt: "Finale Celebration", event: "Sports Carnival 2025" },
    { id: "5", src: img5, alt: "Award Ceremony", event: "Sports Carnival 2025" },
    { id: "6", src: img6, alt: "Music Night Performance", event: "Sports Carnival 2025" },
    { id: "7", src: img7, alt: "Team Celebration", event: "Saraswati Puja 2025" },
    { id: "8", src: img8, alt: "Art Exhibition", event: "BCA Cup 2025" },
    { id: "9", src: img9, alt: "Volunteer Team", event: "BCA Cup 2025" },
    { id: "10", src: img10, alt: "Sports Day Opening", event: "BCA Cup 2025" },
    { id: "11", src: img11, alt: "Drama Performance", event: "Pubg Tournament 2025" },
    { id: "12", src: img12, alt: "Winners Podium", event: "Pubg Tournament 2025" },
    { id: "13", src: img13, alt: "Coding Workshop", event: "Pubg Tournament 2025" },
    { id: "14", src: img14, alt: "Photography Contest", event: "Sports Carnival 2025" },
    { id: "15", src: img15, alt: "Finale Celebration", event: "Sports Carnival 2025" },
    { id: "16", src: img16, alt: "Finale Celebration", event: "Sports Carnival 2025" },
];
