import { Box, Typography } from "@mui/material";
import React from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";
import myimage from '../assets/images/zenda.jpeg'
const Home = () => {
  // ... (rest of your Home component logic)
  return (
    <div className='w-[100%]'>
		<div className="flex  px-10 py-10">
		<form  className="bg-white shadow-md rounded pl-0  w-[100%] mb-4">
		<div className=" ml-60">
		<img
                className="flex items-center pl-10"
                src={myimage}
                alt=""style={{ width: '300px', height: 'auto' }}
              />
</div>
              <Typography paragraph className="pt-4 flex items-center">
                Sugarcane is a tall, perennial grass ( Saccharum spp.)
                cultivated in tropical and subtropical regions for its stalk,
                which contains a high content of sucrose (table sugar). It is
                one of the most important commercial crops in the world, and is
                used to produce sugar, ethanol fuel, and other products.
              </Typography>
              <p paragraph>
                <strong>
                  Here's a more detailed breakdown of sugarcane information:
                </strong>
                <strong>Origin and history:</strong> Sugarcane is believed to
                have originated in New Guinea or Southeast Asia thousands of
                years ago. It was then introduced to India, China, and other
                parts of Asia, and later to the Middle East, North Africa, and
                the Americas. <br />
                <br />
                <strong>Cultivation:</strong> Sugarcane is a C4 plant, which
                means it is very efficient at photosynthesis. It is grown in
                tropical and subtropical climates with plenty of sunshine and
                rainfall. Sugarcane is propagated by planting stalks from mature
                plants. The stalks are cut into sections and planted in rows.
                The sugarcane plant grows tall and slender, with long,
                sword-shaped leaves. It can take 12 to 18 months for sugarcane
                to mature. <br />
                <br />
                <strong>Processing:</strong> Once the sugarcane has matured, it
                is harvested and transported to a mill. At the mill, the
                sugarcane is crushed to extract the juice. The juice is then
                boiled and clarified to remove impurities. The clarified juice
                is then concentrated to form a syrup, which is further
                crystallized to produce sugar. <br />
                <br />
                <strong>Uses:</strong> Sugarcane is primarily used to produce
                sugar. Sugar is a common sweetener that is used in a wide
                variety of foods and beverages. Sugarcane can also be used to
                produce ethanol fuel, which is a renewable fuel source. Ethanol
                fuel can be used to power cars and other vehicles. In addition,
                sugarcane can be used to produce a variety of other products,
                such as paper, wax, and building materials. <br />
                <br />
                <strong>Economic importance:</strong> Sugarcane is an important
                crop for many countries around the world. It is a major source
                of income for farmers and a source of foreign exchange for
                developing countries. The sugarcane industry also provides jobs
                for millions of people around the world.
                <br />
                <br />
                <strong>
                  Here are some interesting facts about sugarcane:
                </strong>
                <ul>
                  <li>Sugarcane is one of the most efficient producers of biomass on Earth.</li>
                  <li>Sugarcane can grow up to 6 meters (20 feet) tall.</li>
                  <li>A single stalk of sugarcane can produce up to 1 kg (2.2 lbs) of sugar.</li>
                  <li>Sugarcane is a renewable resource.</li>
                </ul>
              </p>
            
		</form>
	  </div>
	</div>
  );
};

export default Home;
