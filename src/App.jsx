import { useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global components
import Nav from "./components/nav";
import Footer from "./components/footer";
import DonationCard from "./components/reuseable/DonationCard";
import Success from "./Pages/success";
import Cancel from "./Pages/cancel";

// Country pages
import Bangladesh from "./components/countries/bangladesh";
import Malaysia from "./components/countries/malaysia";
import India from "./components/countries/india";
import Pakistan from "./components/countries/pakistan";
import Palestine from "./components/countries/palestine";
import Yemen from "./components/countries/yemen";
import Uganda from "./components/countries/uganda";
import Malawi from "./components/countries/malawi";



// Emergency pages
import GazaEmergency from "./components/emergency/gaza_emergency";
import MalnutritionInYemen from "./components/emergency/malnutrition_in_yemen";
import Mosturgentfund from "./components/emergency/most_urgent_fund";
import Rohingya from "./components/emergency/rohingya";
import StudentGaza from "./components/emergency/students_of_gaza";
import SyriaHousing from "./components/emergency/syria_housing_appeal";

// Sadaqah pages
import BuildHome from "./components/sadaqah/build_home";
import HifaSponsorship from "./components/sadaqah/hifa_sponsorship";
import MasjitAppeal from "./components/sadaqah/masjid_appeal";
import Education from "./components/sadaqah/Education";
import OliveTree from "./components/sadaqah/olive_tree";
import SponsorOrphan from "./components/sadaqah/sponsor_an_orphan";
import Water from "./components/sadaqah/water";
import Cataract from "./components/sadaqah/cataracts";

// Special Appeals
import Aqeeqah from "./components/Special_Appeals/aqeeqah";
import Food from "./components/Special_Appeals/food";
import Livelihood from "./components/Special_Appeals/livelihood";
import Medical from "./components/Special_Appeals/medical";
import WheelchairAppeal from "./components/Special_Appeals/wheelchair_appeal";
import WomenCarePack from "./components/Special_Appeals/women_Care_Pack";
import YemenSyriaBreadAppeal from "./components/Special_Appeals/yemen_syria_bread_appeal";

// Home page
import Home from "./components/home";

function App() {
  return (
   
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Nav />

        <main className="flex-grow container mx-auto">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            <Route path="/DonationCard" element={<DonationCard />} />
            
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />


            {/* Countries */}
            <Route path="/bangladesh" element={<Bangladesh />} />
            <Route path="/malaysia" element={<Malaysia />} />
            <Route path="/india" element={<India />} />
            <Route path="/pakistan" element={<Pakistan />} />
            <Route path="/palestine" element={<Palestine />} />
            <Route path="/yemen" element={<Yemen />} />
            <Route path="/uganda" element={<Uganda />} />
            <Route path="/malawi" element={<Malawi />} />

            {/* Emergency */}
            <Route path="/gaza-emergency" element={<GazaEmergency />} />
            <Route path="/malnutrition-in-yemen" element={<MalnutritionInYemen />} />
            <Route path="/most-urgent" element={<Mosturgentfund />} />
            <Route path="/rohingya" element={<Rohingya />} />
            <Route path="/students-gaza" element={<StudentGaza />} />
            <Route path="/syria-house" element={<SyriaHousing />} />

            {/* Sadaqah */}
            <Route path="/build-home" element={<BuildHome />} />
            <Route path="/hifa-sponsorship" element={<HifaSponsorship />} />
            <Route path="/masjid-appeal" element={<MasjitAppeal />} />
            <Route path="/education" element={<Education />} />
            <Route path="/olive-tree" element={<OliveTree />} />
            <Route path="/sponsor-orphan" element={<SponsorOrphan />} />
            <Route path="/water" element={<Water />} />
            <Route path="/cataracts" element={<Cataract />} />

            {/* Special Appeals */}
            <Route path="/aqeeqah" element={<Aqeeqah />} />
            <Route path="/food" element={<Food />} />
            <Route path="/livelihood" element={<Livelihood />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/wheelchair" element={<WheelchairAppeal />} />
            <Route path="/women-care-pack" element={<WomenCarePack />} />
            <Route path="/bread-appeal" element={<YemenSyriaBreadAppeal />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
