import React from "react";
import {
  FaCodepen,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaBehance,
} from "react-icons/fa";

import "../Footer/assets/css/style.min.css";
import "./style.css";

export function Codepen() {
  return (
    <>
      <FaCodepen className="icons" />
    </>
  );
}

export function GitHub() {
  return (
    <>
      <FaGithub className="icons" />
    </>
  );
}

export function LinkedIn() {
  return (
    <>
      <FaLinkedinIn className="icons" />
    </>
  );
}

export function WhatsApp() {
  return (
    <>
      <FaWhatsapp className="icons" />
    </>
  );
}

export function Behance() {
  return (
    <>
      <FaBehance className="icons" />
    </>
  );
}
