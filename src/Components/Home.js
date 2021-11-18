import React from "react";
import styled from "styled-components";
import Section from "./Section";
import modelS from "../images/model-s.jpg"
import modelY from "../images/model-y.jpg"
import model3 from "../images/model-3.jpg"
import modelX from "../images/model-x.jpg"
import solarP from "../images/solar-panel.jpg"
import solarR from "../images/solar-roof.jpg"
import accessories from "../images/accessories.jpg"

function Home() {
  return (
    <Container>
      <Section
      id="s"
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelS}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
      id="y"

        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelY}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
      id="3"
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={model3}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
      id="x"
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelX}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lovest Cost Solar Panels in America "
        description="Money-back quarante"
        backgroundImg={solarP}
        leftBtnText=" Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs "
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg={solarR}
        leftBtnText=" Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories "
        backgroundImg={accessories}
        leftBtnText=" Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
