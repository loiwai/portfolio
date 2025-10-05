import React, { useState } from "react";

/* -------------------------------
   Neumorphic Toggle Component
-------------------------------- */
function NeumorphicToggle() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`neumorphic-toggle ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
      title={active ? "On" : "Off"}
      style={{ margin: "2rem auto" }}
    >
      <div className="toggle-knob" />
    </div>
  );
}

/* -------------------------------
   Home Component
-------------------------------- */
export default function Home() {
  const headingStyle = {
    color: "#1565c0",
    fontWeight: 800,
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
  };

  // Generate multiple colorful stars dynamically
  const starCount = 200; // simulate "millions" visually but keep performance smooth
  const starArray = Array.from({ length: starCount }).map((_, i) => {
    const delay = Math.random() * 10; // random delay
    const size = 1 + Math.random() * 3; // star size (1–4px)
    const colors = [
      "#ffffff", "#ffcc00", "#ff66cc", "#66ffff", "#99ff99",
      "#ff9966", "#cc99ff", "#ff6699", "#66ffcc", "#99ccff"
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <g key={i} opacity="0.9">
        {/* Star */}
        <circle cx="0" cy="0" r={size} fill={color}>
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur={`${1 + Math.random() * 2}s`}
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
        </circle>

        {/* Twinkling & Motion along path */}
        <animateMotion
          dur={`${10 + Math.random() * 5}s`}
          repeatCount="indefinite"
          keyPoints="0;1"
          keyTimes="0;1"
          begin={`${delay}s`}
        >
          <mpath href="#starPath" />
        </animateMotion>
      </g>
    );
  });

  return (
    <div className="page home" style={{ position: "relative", overflow: "visible" }}>
      {/* ---------------------------
          Stars Animation Background
      --------------------------- */}
      <div
        className="stars-anim-bg"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "400px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <svg
          width="100vw"
          height="400"
          viewBox="0 0 900 400"
          style={{ position: "absolute", left: 0, top: 0 }}
        >
          <defs>
            <path
              id="starPath"
              d="M100,100 h700 a40,40 0 0 1 40,40 v120 a40,40 0 0 1 -40,40 h-700 a40,40 0 0 1 -40,-40 v-120 a40,40 0 0 1 40,-40 z"
            />
          </defs>
          {starArray}
        </svg>
      </div>

      {/* ---------------------------
          Main Content Section
      --------------------------- */}
      <div
        className="main-content"
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(255,255,255,0.98)",
          borderRadius: "24px",
          boxShadow: "0 4px 24px rgba(21,101,192,0.07)",
          padding: "2rem",
        }}
      >
        <h1 style={headingStyle}>Loi Wai</h1>

        <p style={{ margin: "2rem 0" }}>
          Mathematics & Computer Science professional passionate about IT, Finance, and Data
          Analytics. Dedicated to leveraging analytical skills and technical expertise to drive
          innovative solutions and support data-driven decision-making.
        </p>

        <p style={{ margin: "2rem 0" }}>
          Explore my background, skills, and experience across IT, analytics, and leadership. Thanks
          for visiting my portfolio!
        </p>

        <NeumorphicToggle />
      </div>
    </div>
  );
}
