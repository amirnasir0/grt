import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectSlider from "../reuseable/ProjectSlider";

// ✅ Images
import rohingyaImg from "../../assets/Rohingya.jpg";
import foodPackImg from "../../assets/Food.jpg";
import waterWellImg from "../../assets/Water.png";
import shelterImg from "../../assets/Syria_Housing.png";
import medicalImg from "../../assets/Most_Urgent_Fund.jpg";
import educationImg from "../../assets/Students_of_Gaza.jpg";

// ✅ Static configs
const currencySymbols = { USD: "$" };
const predefinedAmounts = [
  { value: 50, label: "Food Pack support" },
  { value: 100, label: "Water Support" },
  { value: 250, label: "Medical Aid" },
  { value: 500, label: "Shelter Support" },
  { value: 1000, label: "Education Program" },
  { value: 2500, label: "Full Family Relief" },
];

function DonationCardInternal() {
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
    <div className="bg-white border border-[#A0A0A0] p-6 rounded shadow-lg text-[#1E1E1E] w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Rohingya Relief Fund</h2>

      {/* One-off / Monthly toggle */}
      <div className="flex border rounded overflow-hidden mb-4">
        {["one-off", "monthly"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setPlanType(type);
              setSelectedAmount(null);
              setAmount("");
            }}
            className={`flex-1 py-2 font-semibold transition ${planType === type
              ? "bg-[#0068D9] text-white"
              : "bg-white text-[#0068D9] border-r last:border-r-0"
              }`}
          >
            {type === "one-off" ? "One-off" : "Monthly"}
          </button>
        ))}
      </div>

      {/* Predefined amounts */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {predefinedAmounts.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => handleAmountClick(value)}
            className={`p-2 rounded border text-center flex flex-col items-center justify-center ${selectedAmount === value
              ? "bg-[#0068D9] text-white border-[#0068D9]"
              : "bg-[#FAFAFA] border-[#A0A0A0] text-[#1E1E1E]"
              }`}
          >
            <span className="text-lg font-bold">
              {currencySymbols[currency]}
              {value}
            </span>
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>

      {/* Custom amount input */}
      <div className="flex mb-4">
        <span className="bg-[#0068D9] text-white px-4 py-2 rounded-l font-semibold flex items-center">
          {currencySymbols[currency]}
        </span>
        <input
          type="number"
          value={amount}
          onChange={handleCustomAmountChange}
          placeholder="Other amount"
          className="w-full p-2 border border-[#A0A0A0] rounded-r"
          min="0"
        />
      </div>

      {/* Donation type dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-5 p-3 rounded border border-[#A0A0A0] bg-[#FAFAFA] text-[#0068D9]"
      >
        <option value="" disabled>Select Donation Type</option>
        <option>Most Urgent</option>
        <option>Lillah</option>
        <option>Sadaqah</option>
        <option>Zakat</option>
      </select>

      {/* Donate Button */}
      <button
        onClick={handleDonate}
        className="w-full bg-[#0068D9] text-white font-bold py-3 rounded hover:bg-blue-700 transition"
      >
        ❤️ DONATE NOW
      </button>
    </div>
  );
}

function Rohingya() {
  const infoCards = [
    "Over one million Rohingya refugees live in overcrowded camps facing hunger, disease, and violence.",
    "Your donations supply food packs, clean water, and hygiene kits to displaced families.",
    "Help us build shelters and distribute warm clothing to protect families during monsoon and winter seasons.",
    "Support educational programs for Rohingya children deprived of formal schooling opportunities.",
  ];

  const projects = [
    { title: "Rohingya Food Pack", desc: "Deliver emergency food rations to families.", img: foodPackImg },
    { title: "Water Wells for Camps", desc: "Install safe water access points in camps.", img: waterWellImg },
    { title: "Refugee Shelter Construction", desc: "Build durable shelters for families.", img: shelterImg },
    { title: "Medical Aid for Refugees", desc: "Provide treatment and medicines.", img: medicalImg },
    { title: "Education for Rohingya Children", desc: "Set up informal schools and classes.", img: educationImg },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${rohingyaImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        <div className="h-[200px] md:h-[200px] flex items-center justify-center px-4">

          <h1 className="text-black text-4xl md:text-5xl font-bold text-center">
            ROHINGYA APPEAL
          </h1>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-0 items-start justify-center px-4 lg:px-10">
          <div className="w-full lg:w-[370px]">
            <DonationCardInternal />
          </div>
          <div className="w-full lg:w-[700px]">
            <img
              src={rohingyaImg}
              alt="Most Urgent Fund"
              className="rounded w-full object-cover shadow h-[300px] md:h-[515px]"
            />
          </div>
        </div>

        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/TRw_fVbRwEU?autoplay=1&enablejsapi=1"
            title="GRT Rohingya Appeal"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>

        <div className="px-6 py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-3xl font-bold mb-8">Emergency Support for Rohingya Refugees</h2>
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

        <div className="bg-[#036ea8] text-white px-6 py-14 text-center">
          <p className="text-lg italic">The Prophet ﷺ said:</p>
          <blockquote className="text-3xl font-bold my-4 leading-relaxed">
            "He who helps his brother in his time of need, Allah will be there in his time of need."
          </blockquote>
          <p className="text-md">[Muslim]</p>
        </div>

        <ProjectSlider projects={projects} />
      </div>
    </section>
  );
}

export default Rohingya;
