import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon, faHome, faInfoCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/portofolio/BgWPP.jpeg')" }}


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
      <div className="bg-white/30 backdrop-blur-lg max-w-3xl w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 mx-auto mt-12 justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="md:w-1/2 w-full flex justify-center relative"
        >
          <motion.img 
            className="w-52 h-80 object-cover rounded-lg shadow-lg filter brightness-86"
            src="/portofolio/fotodiri.png" 
            alt="Foto Diri"
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
   
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-1/2 w-full"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 ml-8">Tak Kenal Maka Ta'aruf</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Lahir dan besar di Kota Bertuah, Pekanbaru, 20 tahun yang lalu. Naufal Hidayatul Aulia atau yang akrab dikenal Naufal
            merupakan mahasiswa aktif jurusan Teknik Informatika di Universitas Islam Negeri Sultan Syarif Kasim Riau. Memiliki hobi seperti yang telah teman-teman saksikan 
            pada laman sebelumnya. Jika teman-teman ingin berbincang lebih dalam bersama beliau, cuzz kepoin akun sosial media nya! 
          </p>

          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://www.instagram.com/nhidayatul_a?igsh=MTM3ZWl3Zmo0Zjhraw==" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-3xl hover:text-blue-800 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/6281276051073" target="_blank" rel="noopener noreferrer" className="text-green-600 text-3xl hover:text-blue-800 transition duration-300">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="mailto:nhidayatulaulia@gmail.com" target="_blank" rel="noopener noreferrer" className="text-yellow text-3xl hover:text-blue-800 transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
         
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
