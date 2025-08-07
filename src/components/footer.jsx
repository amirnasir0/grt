import React, { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Regist from "../assets/reg.png";

const Footer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert(`Subscribed!\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: "", email: "" });
      setStep(1);
    }
  };

  return (
    <footer className="font-webspecia bg-[#022C43] text-white pt-0">
      {/* Subscribe Section */}
      <div className="bg-[#ffdb72] py-8 px-6 md:px-12 flex flex-col gap-5">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-6">
          <h2 className="text-2xl font-bold text-[#022C43]">Join Our Newsletter</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded border border-[#ccc] bg-white text-black w-48"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded border border-[#ccc] bg-white text-black w-64"
          />
          <button className="bg-[#022C43] text-white px-5 py-2 rounded hover:bg-[#011d2d] transition">
            Subscribe Now
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-3 w-full max-w-xs mx-auto">
          <h2 className="text-xl font-bold text-[#022C43] text-center">
            Join Our Newsletter
          </h2>
          {step === 1 && (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="px-4 py-3 rounded border border-[#ccc] bg-white text-black flex-1"
              />
              <button
                onClick={handleNext}
                className="bg-[#022C43] text-white px-4 py-3 rounded"
              >
                Next
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="px-4 py-3 rounded border border-[#ccc] bg-white text-black flex-1"
              />
              <button
                onClick={handleNext}
                className="bg-[#022C43] text-white px-4 py-3 rounded"
              >
                Next
              </button>
            </div>
          )}
          {step === 3 && (
            <button
              onClick={handleNext}
              className="bg-[#022C43] text-white px-4 py-3 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-8 py-8 md:py-12">
        {/* Section 1: About + Image */}
        <div className="space-y-5">
          <p className="text-base md:text-[17px] leading-relaxed">
            GRT Malaysia is dedicated to eradicating poverty, promoting education for
            underprivileged children, and providing comprehensive community support.
          </p>
          <img
            src={Regist}
            alt="Registration"
            className="w-[200px] max-h-40 md:max-h-64 md:w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Section 2: Address */}
        <div className="space-y-5">
          <h3 className="font-bold text-lg mb-2">Address</h3>
          <address className="not-italic text-sm space-y-1 leading-relaxed">
            <p>23-2 Jalan Wangsa Delima 10,</p>
            <p>Wangsa Maju 53300, Kuala Lumpur</p>
            {/* <p>Phone: +60 11-2767 8531</p> */}
          </address>
        </div>

        {/* Section 3: Useful Links + Social */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-3">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">FOLLOW US</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-[#3b5998] p-2 rounded-full">
                <Facebook color="#fff" size={18} />
              </a>
              <a href="#" className="bg-[#bc2a8d] p-2 rounded-full">
                <Instagram color="#fff" size={18} />
              </a>
              <a href="#" className="bg-[#ff0000] p-2 rounded-full">
                <Youtube color="#fff" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Section 4: Bank Details */}
        <div className="space-y-5">
          <h3 className="font-bold mb-3">BANK ACCOUNT DETAILS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Name:</strong> Global Relief Team Berhad
            </li>
            <li>
              <strong>Bank:</strong> Maybank Islamic
            </li>
            <li>
              <strong>Account No:</strong> 562188357404
            </li>
            <li>
              <strong>Swift Code:</strong> MBBEMYK
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 md:px-12 mt-4 pt-4 border-t border-gray-700">
        <p className="text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} GRT Malaysia. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
