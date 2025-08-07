import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/GRT-LOGO.png";
// import Logo from "../assets/Logo.jpg";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const navRef = useRef(null);
  const dropdownTimeout = useRef(null);

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? "" : item);
    clearTimeout(dropdownTimeout.current);

    if (openDropdown !== item) {
      dropdownTimeout.current = setTimeout(() => {
        setOpenDropdown("");
      }, 5000);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(dropdownTimeout.current);
    };
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenDropdown("");
  };

  const menuLinks = {
    emergency: [
      { to: "/gaza-emergency", label: "Gaza Appeal" },
      { to: "/malnutrition-in-yemen", label: "Malnutrition in Yemen" },
      { to: "/most-urgent", label: "Most Urgent Fund" },
      { to: "/rohingya", label: "Rohingya" },
      { to: "/students-gaza", label: "Students of Gaza" },
      { to: "/syria-house", label: "Syria Housing" },
    ],
    sadaqah: [
      { to: "/water", label: "Water Project" },
      { to: "/masjid-appeal", label: "Masjid Construction" },
      { to: "/sponsor-orphan", label: "Orphan Sponsorship" },
      { to: "/olive-tree", label: "Olive Tree" },
      { to: "/education", label: "Education" },
      { to: "/hifa-sponsorship", label: "Hifa Sponsorship" },
      { to: "/build-home", label: "Build Home" },
      { to: "/cataracts", label: "Cataracts" },
    ],
    special: [
      { to: "/food", label: "Food" },
      { to: "/livelihood", label: "Livelihood" },
      { to: "/wheelchair", label: "Wheelchair Appeal" },
      { to: "/medical", label: "Medical" },
      { to: "/women-care-pack", label: "Women's Care Pack" },
      { to: "/bread-appeal", label: "Yemen & Syria Bread Appeal" },
      { to: "/aqeeqah", label: "Aqeeqah" },
    ],
    countries: [
      { to: "/malaysia", label: "Malaysia" },
      { to: "/palestine", label: "Palestine" },
      { to: "/yemen", label: "Yemen" },
      { to: "/india", label: "India" },
      { to: "/bangladesh", label: "Bangladesh" },
      { to: "/pakistan", label: "Pakistan" },
      { to: "/uganda", label: "Uganda" },
      { to: "/malawi", label: "Malawi" },
    ],
  };

  const renderLinks = (key) =>
    menuLinks[key].map((item) => (
      <Link
        to={item.to}
        key={item.to}
        onClick={closeMobileMenu}
        className="block px-4 py-2 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
      >
        {item.label}
      </Link>
    ));

  return (
    <nav className="font-webspecia z-50 bg-transparent absolute top-0 left-0 w-full" ref={navRef}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link to="/">
          <img src={Logo} alt="GRT Logo" className="h-14 w-auto " />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          <li>
            <Link to="/" className="font-bold text-black hover:text-blue-600 transition-colors">
              Spread Barakah
            </Link>
          </li>

          {Object.keys(menuLinks).map((key) => (
            <li className="relative group" key={key}>
              <button
                onMouseEnter={() => toggleDropdown(key)}
                onClick={() => toggleDropdown(key)}
                className={`flex items-center gap-1 font-bold transition-colors duration-200 ${openDropdown === key ? "text-blue-600" : "text-black hover:text-blue-600"
                  }`}
              >
                {key === "emergency"
                  ? "Emergency Appeals"
                  : key === "sadaqah"
                    ? "Sadaqah Jariyah"
                    : key === "special"
                      ? "Special Appeals"
                      : "Countries"}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${openDropdown === key ? "rotate-180 text-blue-600" : "text-black"
                    }`}
                />
              </button>

              {/* Dropdown with smooth animation */}
              <div
                className={`absolute bg-white shadow-lg rounded-md mt-2 overflow-hidden transition-all duration-300 ease-out ${openDropdown === key
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                  } ${key === "countries" ? "right-2" : ""}`}
                style={{
                  maxHeight: openDropdown === key ? "500px" : "0px",
                  transformOrigin: "top center"
                }}
              >
                <div className="py-2 w-56">
                  {renderLinks(key)}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black hover:text-blue-600 transition-colors"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto transition-all duration-300">
          <div className="flex justify-between items-center p-5 border-b">
            <img src={Logo} alt="GRT Logo" className="h-10 w-auto" />
            <button
              onClick={closeMobileMenu}
              className="text-black hover:text-blue-600 transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block text-lg font-bold text-black hover:text-blue-600 transition-colors"
            >
              Spread Barakah
            </Link>

            {Object.keys(menuLinks).map((key) => (
              <div key={key} className="transition-all duration-200">
                <button
                  onClick={() => toggleDropdown(key)}
                  className={`flex justify-between w-full text-lg font-bold py-2 transition-colors ${openDropdown === key ? "text-blue-600" : "text-black hover:text-blue-600"
                    }`}
                >
                  {key === "emergency"
                    ? "Emergency Appeals"
                    : key === "sadaqah"
                      ? "Sadaqah Jariyah"
                      : key === "special"
                        ? "Special Appeals"
                        : "Countries"}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${openDropdown === key ? "rotate-180 text-blue-600" : "text-black"
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === key ? "max-h-96" : "max-h-0"
                    }`}
                >
                  <div className="pl-4 space-y-2">{renderLinks(key)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;