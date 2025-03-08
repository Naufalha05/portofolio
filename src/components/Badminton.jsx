import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon, faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Badminton = () => {
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
            className="w-full h-60 object-cover rounded-lg transform transition duration-500 hover:scale-105 mt-16" 
            src="/G1.jpeg" 
            alt="Badminton"
          />
        </motion.div>
      
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-1/2 w-full"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 ml-3">Kenapa Harus Badminton?</h2>
          <p className="text-#444444 leading-relaxed text-justify">
            Badminton merupakan salah satu olahraga yang saya minati sejak saya masih berada di MAN. Tiap minggunya saya pasti
            berlatih di salah satu GOR di Paus. Saya sangat tergila-gila dengan olahraga ini karena dalam olahraga ini
            terdapat beberapa variasi dan trickshoot yang indah dan menawan, yang menjadikan olahraga ini sangat menarik.
          </p>
          <p className="text-#444444 leading-relaxed mt-4 text-justify">
            Oh iya, foto yang teman-teman lihat di samping, diambil beberapa hari sebelum event PORSENI dilangsungkan. Saya berlatih dengan rekan saya
            Iki, dan kami meraih kemenangan bersama. Semoga PORSENI tahun ini saya dapat membawa pulang gelar juara kepada GEXOCB tercinta.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Badminton;
