import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import trainGif from "./../../assets/images/prntrakerimg/train.webp";
import Navbar from "../../components/Navbar";

const passengers = [
  { name: "Amit Sharma", seat: "A1 - 12", status: "Confirmed" },
  { name: "Priya Verma", seat: "B2 - 45", status: "Waiting List" },
  { name: "Rohit Mehta", seat: "C3 - 20", status: "RAC" },
  { name: "Neha Gupta", seat: "D4 - 08", status: "Confirmed" },
  { name: "Vikram Singh", seat: "E5 - 33", status: "Waiting List" },
];

const trains = ["Shatabdi Express", "Rajdhani Express", "Duronto Express", "Garib Rath", "Tejas Express"];

const PNRStatus = () => {
  const [pnr, setPnr] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const lastPNR = localStorage.getItem("lastPNR");
    if (lastPNR) setPnr(lastPNR);
  }, []);

  const handlePNRChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPnr(value);
  };

  const fetchPNRStatus = async () => {
    if (pnr.length !== 10) {
      setError("Please enter a valid 10-digit PNR number.");
      return;
    }
   