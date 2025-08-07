import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import all images
import HeroImage1 from "../assets/Malaysia.jpg";
import HeroImage2 from "../assets/bread.png";
import HeroImage3 from "../assets/Gaza_Food.JPG";
import HeroImage4 from "../assets/Malnutrition2.png";
import Project1 from "../assets/Pakistan.jpg";
import Project2 from "../assets/Water.png";
import Project3 from "../assets/Drink_water.png";
import Project4 from "../assets/ORPHANS.png";
import Project5 from "../assets/Food.jpg";
import Project6 from "../assets/Medical.png";
import Campaign1 from "../assets/Gaza_Appeal.png";
import Campaign2 from "../assets/Malaysia.jpg";
import Campaign3 from "../assets/Water.png";
import Campaign4 from "../assets/ORPHANS.png";
import Campaign5 from "../assets/Hifz_Sponsorship.png";
import Campaign6 from "../assets/Food.jpg";
import InfoCard1 from "../assets/Education.jpg";
import InfoCard2 from "../assets/Medical.png";
import InfoCard3 from "../assets/Water.png";
import InfoCard4 from "../assets/Livelihood.jpg";
import BGbtn from "../assets/Malaysia.jpg";

const Home = () => {
  // Hero slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroInterval = useRef(null);
  
  // Project slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectInterval = useRef(null);
  const sliderRef = useRef(null);

  // Hero content data
  const heroImages = [HeroImage1, HeroImage2, HeroImage3, HeroImage4];
  const heroContent = [
    {
      heading: "GAZA APPEAL",
      subheading: "With over 40,000 dead. The time to act is now.",
    },
    {
      heading: "FEED THE HUNGRY",
      subheading: "Provide daily meals to those starving for survival.",
    },
    {
      heading: "SUPPORT GAZA FOOD AID",
      subheading: "Your donation feeds families and saves lives.",
    },
    {
      heading: "MALNUTRITION CRISIS",
      subheading: "Children are dying due to lack of food. Help now.",
    },
  ];

  // Projects data
  const projects = [
  {
    title: "Most Needy by Country",
    desc: "Support people in the most vulnerable countries where poverty, conflict, and natural disasters have made basic necessities like food, water, and shelter a daily struggle. Your donation goes directly to where the need is most urgent.",
    img: Project1,
  },
  {
    title: "Water Irrigation Projects",
    desc: "Bring long-term solutions to farming communities through reliable water irrigation systems that help grow food, sustain livestock, and reduce hunger. These projects empower entire villages by boosting agriculture and creating sustainable sources of clean water.",
    img: Project2,
  },
  {
    title: "Give Water",
    desc: "Millions lack access to clean drinking water. Help us install wells and water filtration systems to provide safe, clean water and prevent waterborne diseases in remote and drought-affected areas. Every drop you give saves lives.",
    img: Project3,
  },
  {
    title: "Sponsor an Orphan",
    desc: "Transform a child’s life by supporting their education, food, clothing, and healthcare. Your sponsorship ensures orphaned children feel safe, cared for, and empowered to pursue a brighter, self-reliant future with hope and dignity.",
    img: Project4,
  },
  {
    title: "Ramadan Food Pack",
    desc: "Provide essential food parcels to families during the holy month of Ramadan. These packs ensure that vulnerable families can break their fasts with dignity and nourishment, bringing them relief and joy during this sacred time.",
    img: Project5,
  },
  {
    title: "Medical Aid Fund",
    desc: "Your support helps deliver critical medicines, equipment, and treatments to those suffering in poverty, disaster zones, or conflict-affected regions. Provide hope and healing to people who have no access to healthcare otherwise.",
    img: Project6,
  },
];

  // Campaigns data
  const campaigns = [
    {
      title: "GAZA APPEAL",
      desc: "With over thirty thousand dead, time to act is now",
      img: Campaign1
    },
    {
      title: "RAMADAN APPEAL",
      desc: "Donate for the poor people",
      img: Campaign2
    },
    {
      title: "WATER APPEAL",
      desc: "The gift of water is the gift of life, donate.",
      img: Campaign3
    },
    {
      title: "SUPPORT AN ORPHAN",
      desc: "Sponsor an orphan for as little as RM 8 a day",
      img: Campaign4
    },
    {
      title: "HIFZ SPONSORSHIP",
      desc: "Sponsor a hifz student at RM100 a month",
      img: Campaign5
    },
    {
      title: "FOOD",
      desc: "Donate for someone's meal",
      img: Campaign6
    }
  ];

  // Info cards data
  const infoCards = [
    {
      title: "Education",
      desc: "We provide resources and build schools to ensure children get the right to learn.",
      img: InfoCard1
    },
    {
      title: "Medical",
      desc: "Supporting healthcare initiatives through medicine, supplies, and mobile clinics.",
      img: InfoCard2
    },
    {
      title: "Water",
      desc: "Building sustainable wells and providing clean drinking water to villages.",
      img: InfoCard3
    },
    {
      title: "Livelihood",
      desc: "Helping families become self-sufficient through skill training and tools.",
      img: InfoCard4
    }
  ];

  // Hero slider auto-rotation
  useEffect(() => {
    heroInterval.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(heroInterval.current);
  }, [heroImages.length]);

  // Project slider auto-rotation
  useEffect(() => {
    projectInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(projectInterval.current);
  }, [projects.length]);

  // Hero slider navigation
  const goToSlide = (index) => {
    clearInterval(heroInterval.current);
    setCurrentIndex(index);
    heroInterval.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
  };

  const goToPrev = () => goToSlide(currentIndex === 0 ? heroImages.length - 1 : currentIndex - 1);
  const goToNext = () => goToSlide((currentIndex + 1) % heroImages.length);

  // Project slider navigation
  const goToProjectSlide = (index) => {
    clearInterval(projectInterval.current);
    setCurrentSlide(index);
    projectInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  // CountUp component for stats
  const CountUpStat = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16); // ~60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          setCount(target);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [target]);

    const displayValue = target >= 1000 ?
      `${(count / 1000).toFixed(count < 1000 ? 1 : 0)}K+` :
      `${count}+`;

    return (
      <div className="text-center">
        <p className="text-3xl md:text-5xl font-bold animate-pulse">{displayValue}</p>
        <p className="mt-2 text-sm md:text-lg">{label}</p>
      </div>
    );
  };

  return (
    <div className="font-Nexa">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] md:min-h-[95vh] relative flex flex-col items-center justify-center text-white text-center p-4 pt-[4rem] md:pt-[5rem] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#6EDFF6]/50 to-[#6EDFF6]"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="hidden sm:block absolute left-2 md:left-4 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 md:p-3 transition-all"
          aria-label="Previous slide"
        >
          <FaArrowLeft className="text-white text-lg md:text-xl" />
        </button>
        <button
          onClick={goToNext}
          className="hidden sm:block absolute right-2 md:right-4 z-20 bg-white/30 hover:bg-white/50 rounded-full p-2 md:p-3 transition-all"
          aria-label="Next slide"
        >
          <FaArrowRight className="text-white text-lg md:text-xl" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 md:bottom-8 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-white md:w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-md">
            {heroContent[currentIndex].heading}
          </h1>
          <p className="text-sm sm:text-base md:text-xl mt-2 md:mt-4 font-medium drop-shadow-md">
            {heroContent[currentIndex].subheading}
          </p>
          <Link
            to="/DonationCard"
            className="bg-[#E40046] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-lg font-bold mt-4 md:mt-6 inline-block hover:bg-[#c8003b] transition-colors shadow-lg hover:shadow-xl"
          >
            DONATE NOW
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#6EDFF6] text-[#000] p-6 md:p-10 lg:p-16 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">About GRT Malaysia</h2>
        <div className="max-w-6xl mx-auto space-y-4 md:space-y-6 text-left">
          <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
            GRT Malaysia, the Malaysia chapter of <strong>Global Relief Trust</strong>, is dedicated to eradicating poverty, promoting education to underprivileged children and providing comprehensive community support across the globe. Giving charity is one of the best deeds we can fulfil, gaining an immense amount of reward. You can provide vulnerable families with much needed aid.
          </p>
          <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
            We are dedicated to serving the world's most vulnerable—responding to emergencies, providing clean water, supporting education, and caring for orphans. Our mission is to restore hope, rebuild lives, and create lasting change through compassion and action. From crisis zones to struggling communities, we work on the ground to deliver aid where it's needed most.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-8 md:py-14 bg-[#71E0F6] text-[#1E1E1E]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4">
          <CountUpStat target={40000} label="Lives Lost in Gaza" />
          <CountUpStat target={250} label="Wells Built" />
          <CountUpStat target={5000} label="Orphans Sponsored" />
          <CountUpStat target={50} label="Ongoing Projects" />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 md:py-10 flex justify-center bg-[#71E0F6] px-4">
        <div className="w-full max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-6">Our Work in Action</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-lg md:rounded-2xl w-full h-[180px] sm:h-[250px] md:h-[400px] lg:h-[500px] shadow-xl"
              src="https://www.youtube.com/embed/TRw_fVbRwEU?autoplay=1&mute=1&enablejsapi=1"
              title="GRT Malaysia Humanitarian Work"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Campaign Cards */}
      <section className="bg-[#F5F5F5] py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-[#1E1E1E]">
            Support Our Campaigns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {campaigns.map((campaign, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={campaign.img}
                    alt={campaign.title}
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-center font-bold text-lg md:text-xl text-[#1E1E1E] mb-2 md:mb-3">
                    {campaign.title}
                  </h3>
                  <p className="text-center text-sm md:text-gray-600 mb-4 md:mb-6 flex-grow">
                    {campaign.desc}
                  </p>
                  <Link
                    to="/donate"
                    className="bg-[#E40046] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-xs md:text-sm font-bold hover:bg-[#c8003b] inline-block text-center transition-colors hover:scale-105 transform"
                  >
                    🤍 Donate Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hadith + Info Cards */}
      <section
        className="py-8 md:py-16 text-center text-white px-4 bg-cover bg-center bg-fixed relative min-h-[500px] md:min-h-[700px] lg:min-h-[800px]"
        style={{ backgroundImage: `url('${BGbtn}')` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-lg md:rounded-xl">
            <blockquote className="text-lg md:text-2xl lg:text-3xl font-bold max-w-4xl mx-auto text-white leading-relaxed">
              "The believers in their mutual kindness, compassion and sympathy are just like one body. When one of the limbs suffers, the whole body responds to it with wakefulness and fever"
            </blockquote>
            <p className="text-base md:text-xl lg:text-2xl font-semibold mt-4 md:mt-6 text-white">
              – Prophet Muhammad (PBUH)
            </p>

            <div className="mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {infoCards.map((card, idx) => (
                <div key={card.title} className="relative group transform scale-100 hover:scale-105 transition-transform duration-300">
                  {/* Mobile version */}
                  <div className="md:hidden bg-white rounded-xl shadow-lg p-4 flex flex-col mb-4 text-[#1E1E1E]">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="mx-auto mb-2 w-12 h-12 object-cover rounded-full"
                      loading="lazy"
                    />
                    <h3 className="font-bold text-base capitalize mb-1 text-center">
                      {card.title}
                    </h3>
                    <p className="text-xs text-center">
                      {card.desc}
                    </p>
                    <Link
                      to={`/${card.title.toLowerCase()}`}
                      className="bg-[#E40046] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#c8003b] mt-4 text-xs text-center"
                    >
                      Read More
                    </Link>
                  </div>

                  {/* Desktop version */}
                  <div className="hidden md:flex flex-col bg-white rounded-xl shadow-lg p-6 text-[#1E1E1E] relative overflow-hidden group min-h-[200px]">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="mx-auto mb-4 w-20 h-20 object-cover rounded-full"
                      loading="lazy"
                    />
                    <h3 className="font-bold text-xl capitalize mb-2">
                      {card.title}
                    </h3>
                    <div className="absolute inset-0 bg-white p-6 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between rounded-xl">
                      <div>
                        <h4 className="font-bold text-xl mb-3">
                          {card.title}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {card.desc}
                        </p>
                      </div>
                      <Link
                        to={`/${card.title.toLowerCase()}`}
                        className="bg-[#E40046] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#c8003b] text-sm mt-4 text-center"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Slider */}
     <section className="bg-[#F5F5F5] py-10 md:py-16 px-4 relative">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1E1E1E] mb-10 md:mb-16">
      Our Ongoing Projects
    </h2>

    <div className="relative">
      {/* Slider Container */}
      <div className="overflow-hidden mx-4 md:mx-8 lg:mx-12">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          ref={sliderRef}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              {/* Mobile Card */}
              <div className="md:hidden bg-white rounded-xl shadow-md overflow-hidden h-full">
                <div className="h-48 w-full">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-center text-[#1447e6] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#1E1E1E] text-center mb-4">
                    {project.desc}
                  </p>
                  <div className="flex justify-center">
                    <Link
                      to="/DonationCard"
                      className="inline-block bg-[#E40046] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#c8003b] transition-colors shadow-md"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Desktop Card */}
              <div className="hidden md:flex items-center bg-white rounded-xl shadow-md p-6 h-[400px]">
                <div className="w-1/2 h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="w-1/2 pl-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-[#1447e6] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-[#1E1E1E] mb-6">
                    {project.desc}
                  </p>
                  <Link
                    to="/DonationCard"
                    className="inline-block bg-[#E40046] text-white px-6 py-3 rounded-lg text-base font-bold hover:bg-[#c8003b] transition-colors shadow-md hover:shadow-lg w-fit"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows (hidden on mobile) */}
      <button
        onClick={() =>
          goToProjectSlide(
            currentSlide === 0 ? projects.length - 1 : currentSlide - 1
          )
        }
        className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
        aria-label="Previous project"
      >
        <FaArrowLeft className="h-5 w-5 text-[#E40046] md:h-6 md:w-6" />
      </button>
      <button
        onClick={() =>
          goToProjectSlide(
            currentSlide === projects.length - 1 ? 0 : currentSlide + 1
          )
        }
        className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
        aria-label="Next project"
      >
        <FaArrowRight className="h-5 w-5 text-[#E40046] md:h-6 md:w-6" />
      </button>
    </div>

    {/* Dots Navigation */}
    <div className="flex justify-center mt-8 space-x-2">
      {projects.map((_, index) => (
        <button
          key={index}
          onClick={() => goToProjectSlide(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSlide === index ? "bg-[#E40046] w-6" : "bg-gray-300"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;