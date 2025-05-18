import React, {useContext} from "react";
import { QuizContext } from "../context/QuizContext";
const Rezorpay = () => {
    const {subject , setpaymentdone , user} = useContext(QuizContext);

  const loadrazorpayscript = ()=>{
   return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }
   const handlePayment = async () => {
    const res = await loadrazorpayscript();

    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet.");
      return;
    }

    const options = {
      key: "rzp_test_ssb1qTDTbQRSDU", 
      amount: 20000, 
      currency: "INR",
      name: `Dimploma in ${subject}`,
      description: "Certificate of Achievement",
      handler: function () {
         setpaymentdone(true);
        
      },
      prefill: {
        name: user.name,
        email: user.email,
      },
      notes: {
        name: user.name,
        email: user.email,
      },
      theme: {
        color: "#0f172a",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
    >
      Pay ₹200 & Get Certificate
    </button>
  );
};

export default Rezorpay;
