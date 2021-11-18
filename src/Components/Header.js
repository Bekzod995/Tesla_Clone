import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../images/logo.svg";
import { selectCars } from "../features/Car/CarSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(true);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src={Logo} alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href={`#${car.slice(car.length - 1, car.length).toLowerCase()}`}>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
      <CustomMenu onClick={() => setBurgerStatus(false)} />
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(true)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href={`#${car.slice(car.length - 1, car.length).toLowerCase()}`}>{car}</a>{" "}
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">CyberTruck</a>
        </li>
        <li>
          <a href="#">Roadster </a>
        </li>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    padding: 0 10px;
    text-transform: uppercase;
    font-weight: 600;
    flex-wrap: nowrap;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  a {
    margin-right: 10px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(100%)" : "translateX(0)")};
  padding: 20px;
  text-align: left;
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
