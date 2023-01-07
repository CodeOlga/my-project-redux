import { useAuth0 } from "@auth0/auth0-react";
import image from "./flower-icon.png";

const Secret = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <h2 className="secret">YOU LOOKS GREAT TODAY!</h2>
        <img src={image} alt="flower-icon" className="secret-icon" />
      </div>
    )
  );
};
export default Secret;
