import React from "react";
import ProjectSlider from "../reuseable/ProjectSlider";
import { useNavigate } from "react-router-dom";
// Image imports
import yemenImg from "../../assets/Yemen.png";
import medicalImg from "../../assets/Medical.png";
import nutritionImg from "../../assets/bread.png";
import waterImg from "../../assets/Water.png";
import foodPackImg from "../../assets/Food.jpg";
// Fixed currency symbol
const currencySymbol = "$";

function DonationCardInternal() {
  const navigate = useNavigate();
  const [planType, setPlanType] = React.useState("one-off");
  const [amount, setAmount] = React.useState("");
  const [selectedAmount, setSelectedAmount] = React.useState(null);
  const [category, setCategory] = React.useState("");

  const predefinedAmounts = [
    { value: 50, label: "Feed a family" },
    { value: 100, label: "Medical support" },
    { value: 250, label: "Water supply" },
    { value: 500, label: "Sponsor an orphan" },
    { value: 1000, label: "Shelter support" },
    { value: 2500, label: "Major support" },
  ];

  const handleAmountClick = (amt) => {
    const finalAmount = planType === "monthly" ? amt.toFixed(2) : amt;
    setSelectedAmount(amt);
    setAmount(finalAmount);
  };

  const handleDonate = () => {
    if (!amount || !category) {
      alert("Please select amount and donation type");
      return;
    }
    navigate(`/DonationCard?amount=${amount}&category=${category}&planType=${planType}`);
  };

  return (
    <div className="bg-white border border-[#A0A0A0] p-6 rounded shadow-lg text-[#1E1E1E] w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Gaza Relief Fund</h2>

      {/* Plan Type Tabs */}
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

      {/* Predefined Amount Buttons */}
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
              {currencySymbol}{value}
            </span>
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>

      {/* Other Amount Input */}
      <div className="flex mb-4">
        <span className="bg-[#0068D9] text-white px-4 py-2 rounded-l font-semibold flex items-center">
          {currencySymbol}
        </span>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Other amount"
          className="w-full p-2 border border-[#A0A0A0] rounded-r"
          min="0"
        />
      </div>

      {/* Category Dropdown */}
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

function MalnutritionInYemen() {
  const infoCards = [
    "Millions of Yemeni children suffer from severe malnutrition due to ongoing conflict and famine.",
    "Your donations provide emergency food packs and nutritional support for vulnerable families.",
    "Help deliver life-saving medical care to malnourished children in remote villages.",
    "Support initiatives distributing clean water and essential hygiene kits in crisis-affected areas.",
  ];

  const projects = [
    {
      title: "Food Pack Yemen",
      desc: "Provide emergency food parcels.",
      img: foodPackImg,
    },
    {
      title: "Nutrition Program",
      desc: "Treat malnourished children with supplements.",
      img: nutritionImg,
    },
    {
      title: "Clean Water Project",
      desc: "Deliver safe drinking water supplies.",
      img: waterImg,
    },
    {
      title: "Medical Aid for Yemen",
      desc: "Life-saving treatment for families.",
      img: medicalImg,
    },
    {
      title: "Emergency Shelter",
      desc: "Build shelters for displaced families.",
      img: yemenImg,
    },
  ];


  return (
    <section className="relative text-[#1E1E1E] overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${yemenImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/40 to-[#6EDFF6]"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#FAFAFA]">
        {/* Hero Section */}
        <div className="h-[200px] flex items-center justify-center">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Malnutrition In Yemen
          </h1>
        </div>

        {/* Card & Image Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-0 items-start justify-center px-4 lg:px-10">
          <div className="w-full lg:w-[370px]">
            <DonationCardInternal />
          </div>
          <div className="w-full lg:w-[700px]">
            <img
              src={yemenImg}
              alt="Gaza Students Education Crisis"
              className="rounded w-full object-cover shadow h-[300px] md:h-[515px]"
            />
          </div>
        </div>

        {/* Video Section */}
        <section className="py-10 flex justify-center">
          <iframe
            className="rounded-2xl w-[90%] md:w-[1000px] h-[500px]"
            src="https://www.youtube.com/embed/F9-VTGddFGM?autoplay=1&mute=1&enablejsapi=1"
            title="GRT Appeal"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </section>

        {/* Info Cards */}
        <div className="w-full py-14 bg-gradient-to-b from-white/15 via-[#6EDFF6] to-[#6EDFF6] text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Emergency Support for Gaza</h2>
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
        </div>

        {/* Hadith Section */}
        <div className="w-full bg-[#036ea8] text-white py-14 text-center">
          <p className="text-lg italic">The Prophet ﷺ said:</p>
          <blockquote className="text-3xl font-bold my-4 leading-relaxed">
            "He is not a believer whose stomach is filled while the neighbor to his side goes hungry."
          </blockquote>
          <p className="text-md">[Muslim]</p>
        </div>

        {/* Project Slider */}
        <div className="w-full">
          <ProjectSlider projects={projects} />
        </div>
      </div>
    </section>
  );
}

export default MalnutritionInYemen;
