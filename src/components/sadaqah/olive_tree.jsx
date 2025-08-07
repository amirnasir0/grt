import React, { useState } from "react";
import ProjectSlider from "../reuseable/ProjectSlider";
import { useNavigate } from "react-router-dom";
// ✅ Image Imports
import oliveTreeImage from "../../assets/Olive_Tree.jpg";
import oliveRestorationImg from "../../assets/olive.png";
import farmerSupportImg from "../../assets/livelihood.png";
import oliveOilImg from "../../assets/Food.jpg";
import treeMaintenanceImg from "../../assets/Water.png";
import gazaFarmersImg from "../../assets/Gaza.png";

const currencySymbols = { USD: "$" };
const predefinedAmounts = [
  { value: 50, label: "Emergency Support" },
  { value: 100, label: "Clean Water Access" },
  { value: 250, label: "Medical Supplies" },
  { value: 500, label: "Rebuild Shelter" },
  { value: 1000, label: "Education Kit" },
  { value: 1100, label: "Family Relief Pack" },
];

function Donation() {
  const navigate = useNavigate();
  const [planType, setPlanType] = useState("one-off");
  const [amount, setAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [currency] = useState("USD");
  const [category, setCategory] = useState("");

  const handleAmountClick = (amt) => {
    setSelectedAmount(amt);
    setAmount(amt);
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || (!isNaN(value) && Number(value) >= 0)) {
      setAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleDonate = () => {
    if (!amount || !category) {
      alert("Please select amount and donation type");
      return;
    }
    navigate(`/DonationCard?amount=${amount}&category=${category}&planType=${planType}`);
  };


  return (
    <div className="bg-white border border-[#A0A0A0] p-4 md:p-6 rounded shadow-lg text-[#1E1E1E] w-full">
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">Education Fund</h2>

      <div className="flex border rounded overflow-hidden mb-3 md:mb-4">
        {["one-off", "monthly"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setPlanType(type);
              setSelectedAmount(null);
              setAmount("");
            }}
            className={`flex-1 py-2 text-sm md:text-base font-semibold transition ${planType === type
                ? "bg-[#0068D9] text-white"
                : "bg-white text-[#0068D9] border-r last:border-r-0"
              }`}
          >
            {type === "one-off" ? "One-off" : "Monthly"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
        {predefinedAmounts.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => handleAmountClick(value)}
            className={`p-2 rounded border text-center flex flex-col items-center justify-center ${selectedAmount === value
                ? "bg-[#0068D9] text-white border-[#0068D9]"
                : "bg-[#FAFAFA] border-[#A0A0A0] text-[#1E1E1E]"
              }`}
          >
            <span className="text-base md:text-lg font-bold">
              {currencySymbols[currency]}
              {value}
            </span>
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>

      <div className="flex mb-3 md:mb-4">
        <span className="bg-[#0068D9] text-white px-3 md:px-4 py-2 rounded-l font-semibold flex items-center text-sm md:text-base">
          {currencySymbols[currency]}
        </span>
        <input
          type="number"
          value={amount}
          onChange={handleCustomAmountChange}
          placeholder="Other amount"
          className="w-full p-2 border border-[#A0A0A0] rounded-r text-sm md:text-base"
          min="0"
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-4 md:mb-5 p-2 md:p-3 rounded border border-[#A0A0A0] bg-[#FAFAFA] text-[#0068D9] text-sm md:text-base"
      >
        <option value="" disabled>Select Donation Type</option>
        <option>Most Urgent</option>
        <option>Lillah</option>
        <option>Sadaqah</option>
        <option>Zakat</option>
      </select>

      <button
        onClick={handleDonate}
        className="w-full bg-[#0068D9] text-white font-bold py-2 md:py-3 rounded hover:bg-blue-700 transition text-sm md:text-base"
      >
        ❤️ DONATE NOW
      </button>
    </div>
  );
}

function OliveTree() {
  const infoCards = [
    "Thousands of Palestinian families rely on olive farming for their livelihoods and nutrition.",
    "Your donation plants olive trees that will sustain families for generations through their harvest.",
    "Help restore destroyed olive groves and support farmers impacted by conflict and occupation.",
    "A single olive tree can bear fruit for over 100 years — a lasting charity (Sadaqah Jariyah) in your name.",
  ];

  const projects = [
    {
      title: "Plant an Olive Tree",
      desc: "Support Palestinian farmers with a fresh sapling.",
      img: oliveTreeImage,
    },
    {
      title: "Olive Grove Restoration",
      desc: "Replant uprooted trees in destroyed farmlands.",
      img: oliveRestorationImg,
    },
    {
      title: "Farmer Tools & Support",
      desc: "Provide tools and irrigation kits to olive growers.",
      img: farmerSupportImg,
    },
    {
      title: "Olive Oil Distribution",
      desc: "Help families earn income by distributing oil.",
      img: oliveOilImg,
    },
    {
      title: "Tree Maintenance Aid",
      desc: "Fund fertiliser, watering, and soil health tools.",
      img: treeMaintenanceImg,
    },
    {
      title: "Gaza Farmers Aid",
      desc: "Support olive agriculture in war-torn Gaza.",
      img: gazaFarmersImg,
    },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${oliveTreeImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/25 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        {/* Hero Heading */}
        <div className="h-[200px] md:h-[200px] flex items-center justify-center px-4">

          <h1 className="text-black text-4xl md:text-5xl font-bold">OLIVE TREE</h1>
        </div>

        {/* Donation + Image */}
        <div className="flex flex-col-reverse lg:flex-row gap-0 items-start justify-center px-4 lg:px-10">
          <div className="w-full lg:w-[370px]">
            <Donation />
          </div>
          <div className="w-full lg:w-[700px]">
            <img
              src={oliveTreeImage}
              alt="Education Support Programs"
              className="rounded w-full object-cover shadow h-[300px] md:h-[515px]"
            />
          </div>
        </div>

        {/* Video */}
        <section className="px-4 py-8 md:py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-full md:w-[1000px] h-[300px] md:h-[500px]"
            src="https://www.youtube.com/embed/oaaneEyQJa0?autoplay=1&enablejsapi=1"
            title="GRT Olive Tree Appeal"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>

        {/* Info Cards */}
        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Plant a Tree, Leave a Legacy</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {infoCards.map((text, i) => (
              <div key={i} className="rounded-xl p-6 shadow hover:shadow-md transition text-left">
                <ul className="list-disc list-inside space-y-2 text-base md:text-2xl text-[#1E1E1E]">
                  {text.split("\n").map((point, idx) => (
                    <li key={idx}>{point.replace(/^•\s?/, "")}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hadith */}
        <div className="bg-[#1f98c4] text-white px-6 py-14 text-center">
          <p className="text-lg italic">The Prophet ﷺ said:</p>
          <blockquote className="text-2xl font-bold my-4 leading-relaxed">
            "If the Final Hour comes while you have a seedling in your hand, plant it."
          </blockquote>
          <p className="text-md">[Musnad Ahmad]</p>
        </div>

        {/* Project Slider */}
        <div>
          <ProjectSlider projects={projects} />
        </div>      </div>
    </section>
  );
}

export default OliveTree;
