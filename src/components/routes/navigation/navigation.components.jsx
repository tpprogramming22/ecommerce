import { Fragment, useContext } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ReactComponent as TedLogo } from "../../../assets/myownlogo.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";
import { CartContext } from "../../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)
  console.log(currentUser);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <TedLogo/>
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}

          <CartIcon />
          
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
        </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
