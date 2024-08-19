import React from "react";
import UserClass from "../ClassBasedComp/UserCard";
import useFetchResMenu from "../../hooks/useFetchResMenu";

const About = () => {
  const resMenu = useFetchResMenu();
  return (
    <div>
      <UserClass name="Sooraj" />
    </div>
  );
};

export default About;
