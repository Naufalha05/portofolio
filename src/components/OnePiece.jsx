import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon, faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const OnePiece = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/BgWPP.jpeg')" }}>
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
            className="w-full h-60 object-cover rounded-lg transform transition duration-500 hover:scale-105 mt-6" 
            src="/luffy.jpg" 
            alt="One Piece"
          />
        </motion.div>
      
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-1/2 w-full"
        >
          <h2 className="text-2l font-bold text-gray-800 mb-4 ml-4">Hisaburi, Mugiwara (久しぶり, 麦わら) </h2>
          <p className="text-#444444 leading-relaxed text-justify">
          Hisaburi, Mugiwara (久しぶり, 麦わら) atau yang kalau diterjemahkan artinya "Lama tak bertemu Topi Jerami" adalah salah satu
          kata-kata ikonik yang diucapkan oleh mantan yonkou crocodile ketika bertemu dengan calon Raja Bajak laut ini di One Piece. 
          </p>
          <p className="text-#444444 leading-relaxed mt-4 text-justify">
            Nakama pasti bertanya-tanya kenapa saya memasukkan One Piece kedalam salah satu bahasan website saya, alasannya simple sih, karena
            dari serial one piece saya mendapatkan banyak pelajaran, baik itu tentang pertemanan, kesetiaan, rasa sakit, canda tawa, dan lainnya.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OnePiece;
