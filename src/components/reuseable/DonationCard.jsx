import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

// Load Stripe publishable key securely
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || process.env.STRIPE_PUBLISHABLE_KEY);

function DonationCard() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  // Form state
  const [planType, setPlanType] = useState("single");
  const [amount, setAmount] = useState(query.get("amount") || "");
  const [category, setCategory] = useState(query.get("category") || "");
  const [name, setName] = useState(query.get("name") || "");
  const [email, setEmail] = useState(query.get("email") || "");
  const [phone, setPhone] = useState(query.get("phone") || "");
  const [loading, setLoading] = useState(false);

  const handleDonate = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !amount || !category) {
      alert("Please complete all required fields.");
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      setLoading(true);

      const stripe = await stripePromise;
      if (!stripe) {
        alert("Stripe failed to load.");
        return;
      }

      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parsedAmount,
          category,
          planType,
          currency: "USD",
          name: name.trim(),
          email: email.trim(),
          customer_phone: phone.trim(),
        }),
      });

      const session = await response.json();

      if (!session.id) {
        throw new Error("Session creation failed.");
      }

      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Donation error:", error);
      alert("An error occurred while processing your donation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-lg shadow-sm w-full max-w-xs mx-auto my-20">
      <h2 className="text-xl font-bold mb-4 text-center">Donate Now</h2>

      <form onSubmit={handleDonate} className="space-y-3">
        {/* Personal Info */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name *"
          className="w-full p-2 text-sm rounded border border-gray-300"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email *"
          className="w-full p-2 text-sm rounded border border-gray-300"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone *"
          className="w-full p-2 text-sm rounded border border-gray-300"
          required
        />

        {/* Plan Type */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPlanType("single")}
            className={`flex-1 py-2 text-xs rounded font-medium ${
              planType === "single"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            One-Time
          </button>
          <button
            type="button"
            onClick={() => setPlanType("regular")}
            className={`flex-1 py-2 text-xs rounded font-medium ${
              planType === "regular"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Donation Amount */}
        <div className="flex items-center">
          <span className="bg-blue-600 text-white p-2 rounded-l text-sm">$</span>
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount *"
            className="w-full p-2 text-sm rounded-r border border-gray-300"
            required
          />
        </div>

        {/* Donation Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 text-sm rounded border border-gray-300 bg-gray-50"
          required
        >
          <option value="" disabled>
            Donation Type *
          </option>
          <option value="Lillah">Lillah</option>
          <option value="Sadaqah">Sadaqah</option>
          <option value="Zakat">Zakat</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white text-sm font-bold py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Processing..." : "DONATE NOW"}
        </button>
      </form>
    </div>
  );
}

export default DonationCard;
