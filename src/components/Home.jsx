import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon, faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import CardList from "./CardList";

const Home = () => {
  return (
    <div className="h-screen bg-cover bg-center"  style={{ backgroundImage: "url('/portofolio/BgWPP.jpeg')" }}


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

      <div className="p-18 flex justify-center">
        <CardList />
      </div>
    </div>
  );
};

export default Home;
