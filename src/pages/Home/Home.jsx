import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

import Concern from "./Concern/Concern";

const Home = () => {

  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((result) => result.json())
      .then((data) => setEvents(data))

      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header></Header>

      <div className="">
        <Banner></Banner>

        <Concern></Concern>

      </div>
    </div>
  );
};

export default Home;
