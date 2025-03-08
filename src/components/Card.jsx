import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Card = ({ image, title, description, link }) => {
  return (
    <div className=" max-w-sm bg-white shadow-lg rounded-lg overflow-hidden" >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 text-center">{title}</h2>
        <p className="text-gray-600 mt-2 text-center">{description}</p>
        <div className="flex justify-center mt-4">
          <Link to={link} className="text-blue-500 flex items-center">
            <FontAwesomeIcon icon={faShareFromSquare} className="text-lg mr-2" />
            <span>Check It Out!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
