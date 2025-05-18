import React, { useRef, useContext } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Certificate.css";
import certificateBg from "/Certificate of Appreciation.png";
import { QuizContext } from "../context/QuizContext";

const Certificate = () => {
  const { user, setpaymentdone, subject, setuser } = useContext(QuizContext);
  const certRef = useRef();

  const handleDownload = () => {
    html2canvas(certRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "pt", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 842, 595);
      pdf.save("certificate.pdf");
    });
  };

  const currentDate = new Date().toLocaleDateString();

  const clickhandler = () => {
    handleDownload();
    setTimeout(() => {
      setuser({
        name: "",
        email: "",
      });
    }, 1000);
    setTimeout(() => {
      setpaymentdone(false);
    }, 3000);
  };

  return (
    <div>
      <div className="container " ref={certRef}>
        <img src={certificateBg} height={400} />
        <div className="content">
          <h1>{user.name}</h1>
          <h2>{subject}</h2>
          <h3>{currentDate}</h3>
        </div>
      </div>

      <button
        className="cursor-pointer px-10 py-2 rounded-2xl bg-green-500 shadow-lg text-white font-semibold mt-10"
        onClick={clickhandler}
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
