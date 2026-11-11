import React from "react";
import { DISPLAY_NUMBER } from "../config";

export default function AntiScamBanner() {
  return (
    <div className="notice-bar">
      <span className="notice-dot" />
      <p>
        <strong>Stay safe online.</strong> Confirm contact details directly with the business before making payments.
        <span className="notice-number"> {DISPLAY_NUMBER}</span>
      </p>
    </div>
  );
}
