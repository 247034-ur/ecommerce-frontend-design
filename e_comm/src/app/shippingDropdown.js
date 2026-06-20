"use client";

import { useState } from 'react';

export default function ShippingDropdown() {
  const [selectedCountry, setSelectedCountry] = useState('de');

  return (
    <div className="shipping-container">
      {/* Grabs the matching .svg flag from public/icons/ dynamically */}
      <img 
        src={`/icons/${selectedCountry}.svg`} 
        alt={`${selectedCountry} Flag`} 
        className="dropdown-flag-icon"
        onError={(e) => {
          e.target.style.display = 'none'; // Hides broken icon if SVG doesn't exist yet
        }}
      />
      
      <select 
        className="subnav-select"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="de">Ship to (DE)</option>
        <option value="pk">Ship to (PK)</option>
        <option value="us">Ship to (US)</option>
        <option value="gb">Ship to (UK)</option>
        <option value="ae">Ship to (UAE)</option>
      </select>
    </div>
  );
}