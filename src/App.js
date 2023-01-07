import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";
import Cart from "./Components/Cart/Cart";
import Dishes from "./Components/DishesComponents/Dishes";
import AllCategories from "./Components/Filter/AllCategories";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import MyAccount from "./MyAccount";
import StripeContainer from "./Stripe/StripeContainer";

function App() {
  const { isLoading } = useAuth0;

  if (isLoading) return <h2>Wait a few seconds...</h2>;

  return (
    <div className="App">
      <div className="block">
        <AllCategories />
        <Cart />
      </div>

      <div className="block">
        <Dishes />
      </div>
      <div className="block info">
        <LoginButton />
        <LogoutButton />
        <MyAccount />
        <StripeContainer />
      </div>
    </div>
  );
}

export default App;
