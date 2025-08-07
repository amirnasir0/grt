import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectSlider from "../reuseable/ProjectSlider";

// Images
import wheelchairImg from "../../assets/Wheelchair.png";
import medicalImg from "../../assets/Medical.png";
import childrenImg from "../../assets/children.jpg";
import elderlyImg from "../../assets/Malawi.jpg";
import remoteAidImg from "../../assets/Syria_Housing.png";

const currencySymbols = { USD: "$" };
const predefinedAmounts = [
  { value: 50, label: "Emergency Support" },
  { value: 100, label: "Clean Water Access" },
  { value: 200, label: "Medical Supplies" },
  { value: 300, label: "Rebuild Shelter" },
  { value: 750, label: "Education Kit" },
  { value: 1750, label: "Family Relief Pack" },
];

function DonationInternal() {
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
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">WHEELCHAIR</h2>

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

function WheelchairAppeal() {
  const infoCards = [
    "Thousands of disabled individuals suffer in isolation without mobility support.",
    "Your donations help provide wheelchairs to the elderly, injured, and differently-abled.",
    "A simple wheelchair can open doors to education, employment, and dignity.",
    "Give the gift of independence and mobility to someone in need today.",
  ];

  const projects = [
    {
      title: "Donate a Wheelchair",
      desc: "Gift a wheelchair to a disabled person.",
      img: wheelchairImg,
    },
    {
      title: "Elderly Mobility Aid",
      desc: "Support mobility for elderly and frail individuals.",
      img: elderlyImg,
    },
    {
      title: "Post-Surgery Wheelchairs",
      desc: "Help patients in recovery with temporary mobility.",
      img: medicalImg,
    },
    {
      title: "Children's Mobility Aid",
      desc: "Specialized wheelchairs for children.",
      img: childrenImg,
    },
    {
      title: "Remote Area Access Support",
      desc: "Deliver wheelchairs to remote and war-torn areas.",
      img: remoteAidImg,
    },
    {
      title: "Injury & Rehab Support",
      desc: "Wheelchairs for those injured in conflict or disaster.",
      img: medicalImg,
    },
  ];

  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${wheelchairImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/90 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        {/* Hero Section */}
        <div className="h-[200px] md:h-[200px] flex items-center justify-center px-4">
          <h1 className="text-black text-3xl md:text-5xl font-bold text-center">
            WHEELCHAIR APPEAL
          </h1>
        </div>

        {/* Card & Image Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-0 items-start justify-center px-4 lg:px-10">
          <div className="w-full lg:w-[370px]">
            <DonationInternal />
          </div>
          <div className="w-full lg:w-[700px]">
            <img
              src={wheelchairImg}
              alt="Wheelchair Appeal"
              className="rounded w-full object-cover shadow h-[300px] md:h-[515px]"
            />
          </div>
        </div>

        {/* Video Section */}
        <section className="px-4 py-8 md:py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-full md:w-[1000px] h-[300px] md:h-[500px]"
            src="https://www.youtube.com/embed/tf222avq4P0?autoplay=1&enablejsapi=1"
            title="GRT Video 3"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>

        {/* Info Cards */}
        <div className="px-4 md:px-6 py-8 md:py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Restore Dignity Through Mobility</h2>
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

        {/* Hadith Section */}
        <div className="bg-[#036ea8] text-white px-4 md:px-6 py-8 md:py-14 text-center">
          <p className="text-base md:text-lg italic">The Prophet ﷺ said:</p>
          <blockquote className="text-xl md:text-2xl font-bold my-3 md:my-4 leading-relaxed">
            "Whoever helps ease the burden of a fellow Muslim, Allah will ease their burden in this life and the next."
          </blockquote>
          <p className="text-sm md:text-md">[Tirmidhi]</p>
        </div>

        {/* Project Slider */}
        <div>
          <ProjectSlider projects={projects} />
        </div>
      </div>
    </section>
  );
}

export default WheelchairAppeal;