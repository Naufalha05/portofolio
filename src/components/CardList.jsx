import Card from "./Card";
import { useEffect, useState } from "react";

const CardList = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); 
  }, []);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 
      transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {[
        {
          title: "Badminton",
          description: "Badminton merupakan salah satu olahraga yang saya minati.",
          image: "https://moondoggiesmusic.com/wp-content/uploads/2019/05/7.-Materi-Badminton-Pengertian-Peraturan-dan-Teknik-Permainannya.jpg",
          link: "/badminton"
        },
        {
          title: "Game",
          description: "Bermain game merupakan aktivitas yang menyenangkan bagi saya.",
          image: "https://i.pinimg.com/originals/ed/99/21/ed9921a46e36e9ef09e71490592ce197.jpg",
          link: "/game"
        },
        {
          title: "One Piece",
          description: "Wahai nakama, kapal kita sebentar lagi akan berlayar!",
          image: "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/08/13/one-piece-gear-5.jpeg",
          link: "/onepiece"
        }
      ].map((item, index) => (
        <div 
          key={index} 
          className="transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
        >
          <Card 
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
