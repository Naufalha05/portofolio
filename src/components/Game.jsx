import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon, faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Game = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('BgWPP.jpeg')" }}
>
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-white text-xl font-bold flex items-center space-x-2">
          <FontAwesomeIcon icon={faDragon} className="text-yellow-300 text-xl" />
          <span>Yath</span>
        </h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-white flex items-center space-x-2 hover:text-blue-200">
              <FontAwesomeIcon icon={faHome} className="text-lg" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white flex items-center space-x-2 hover:text-blue-200">
              <FontAwesomeIcon icon={faInfoCircle} className="text-lg" />
              <span>About Me</span>
            </Link>
          </li>
        </ul>
      </nav>

     <div className="bg-white/30 backdrop-blur-lg max-w-3xl w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 p-6 mx-auto mt-8 justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="md:w-1/2 w-full pt-10"
        >
          <img 
            className="w-full h-60 object-cover rounded-lg transform transition duration-500 hover:scale-105 mt-16" 
            src="/wuwa.jpg" 
            alt="Game"
          />
        </motion.div>
      
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-1/2 w-full"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 ml-22">Gamers Sejati</h2>
          <p className="text-#444444 leading-relaxed text-justify">
            Pernah gasi teman-teman mendengar orang lain mengatakan "Gue itu gamers sejati!" emang apasih gamers sejati itu?
            Jadi, gamers sejati itu bisa dikatakan seorang yang mempunyai kegemaran yang sangat besar terhadap permainan video game.
            Mereka yang mengecap dirinya "Gamers Sejati" pastinya sudah sangat mengusai lini permainan video game.
          </p>
          <p className="text-#444444 leading-relaxed mt-4 text-justify">
           Sebagai contoh, saya menguasai berbagai jenis game, seperti Counter-Strike, Wuthering Waves, Point-Blank, dll. Game-game tersebut
           termasuk ke dalam genre "FPS" (First Person Shooter) dan "RPG" (Role-Playing Game). Game tersebut juga mengasah keterampilan saya dalam
           membaca situasi permainan, sehingga menjadikan saya seorang "Gamers Sejati". 
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Game;
