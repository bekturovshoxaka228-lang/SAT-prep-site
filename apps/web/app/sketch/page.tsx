"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type ExamMode = "SAT" | "IELTS";

interface Checkpoint {
  value: number;
  label: string;
  isFilled: boolean;
  isDarkTarget: boolean;
}

export default function SketchPhotoDashboardPage() {
  const [mode, setMode] = useState<ExamMode>("SAT");
  const [activeItem, setActiveItem] = useState<string>("Reading & Writing");
  const [days, setDays] = useState<number>(48);
  const [satAim, setSatAim] = useState<string>("1600");
  const [ieltsAim, setIeltsAim] = useState<string>("Band 8.5");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const isSAT = mode === "SAT";

  // Menu items according to user request
  const satMenuItems = [
    { id: "dashboard", label: "Dashboard", subLabel: "" },
    { id: "rw", label: "Reading & Writing", subLabel: "(SAT R&W)" },
    { id: "math", label: "Math", subLabel: "" },
    { id: "mocks", label: "Full Mocks", subLabel: "" },
    { id: "flashcards", label: "Flashcards", subLabel: "" },
  ];

  const ieltsMenuItems = [
    { id: "dashboard", label: "Dashboard", subLabel: "" },
    { id: "reading", label: "Reading", subLabel: "" },
    { id: "listening", label: "Listening", subLabel: "" },
    { id: "writing", label: "Writing", subLabel: "" },
    { id: "speaking", label: "Speaking", subLabel: "" },
    { id: "translator", label: "Translator", subLabel: "" },
  ];

  const currentMenuItems = isSAT ? satMenuItems : ieltsMenuItems;

  // Checkpoints for SAT and IELTS exactly as requested
  const satCheckpoints: Checkpoint[] = [
    { value: 400, label: "400", isFilled: true, isDarkTarget: false },
    { value: 800, label: "800", isFilled: true, isDarkTarget: false },
    { value: 1200, label: "1200", isFilled: true, isDarkTarget: false },
    { value: 1600, label: "1600", isFilled: true, isDarkTarget: true },
  ];

  const ieltsCheckpoints: Checkpoint[] = [
    { value: 0, label: "0", isFilled: true, isDarkTarget: false },
    { value: 5.0, label: "5.0", isFilled: true, isDarkTarget: false },
    { value: 6.5, label: "6.5", isFilled: true, isDarkTarget: false },
    { value: 9.0, label: "9.0", isFilled: true, isDarkTarget: true },
  ];

  const checkpoints = isSAT ? satCheckpoints : ieltsCheckpoints;

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === "SAT" ? "IELTS" : "SAT";
      setActiveItem(next === "SAT" ? "Reading & Writing" : "Reading");
      return next;
    });
  };

  const handleEditDays = () => {
    const input = prompt("Сколько дней осталось до экзамена?", String(days));
    if (input) {
      const num = parseInt(input.trim(), 10);
      if (!isNaN(num) && num > 0) setDays(num);
    }
  };

  const handleEditAim = () => {
    const current = isSAT ? satAim : ieltsAim;
    const input = prompt("Укажите целевой балл (Aim):", current);
    if (input && input.trim()) {
      if (isSAT) setSatAim(input.trim());
      else setIeltsAim(input.trim());
    }
  };

  return (
    <div
      className="min-h-screen bg-[#c2d5e3] text-[#0a111a] flex flex-col items-center justify-center p-2 sm:p-5 lg:p-8 select-none"
      style={{ fontFamily: "'Gaegu', 'Patrick Hand', 'Gochi Hand', cursive" }}
    >
      {/* Top Floating Helper Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-2 px-3 text-xs sm:text-sm font-bold text-slate-700">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#0a111a]"></span>
          <span>Ручной скетч-интерфейс (Hand-Drawn Sketch Edition)</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMode}
            className="hover:underline bg-white/70 px-2 py-0.5 rounded border border-[#0a111a] text-xs font-mono cursor-pointer"
          >
            [Пробел или T для смены режима]
          </button>
          <Link
            href="/dashboard"
            className="hover:underline flex items-center gap-1 text-slate-800"
          >
            <span>В стандартный дашборд</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN TABLET FRAME: Matches photo's shape, ink lines, and color palette */}
      {/* ========================================================================= */}
      <div
        className="w-full max-w-4xl bg-[#d4e3ec] border-[3.5px] border-[#0a111a] rounded-[26px] shadow-[4px_5px_0px_0px_#0a111a] relative overflow-hidden flex flex-col transition-all duration-300"
        style={{
          borderRadius: "26px 28px 24px 25px / 25px 24px 28px 26px",
        }}
      >
        {/* Subtle watercolor / blue marker streak on bottom right, exactly as on the photo */}
        <div
          className="absolute -bottom-6 -right-6 w-48 h-20 bg-[#a2c9e2] rounded-[40px] opacity-75 blur-[3px] pointer-events-none transform -rotate-6"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute bottom-2 -right-4 w-32 h-6 bg-[#8ebfdc] opacity-60 rounded-full blur-[1px] pointer-events-none"
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 flex flex-col md:flex-row min-h-[560px]">
          
          {/* ========================================================================= */}
          {/* LEFT SIDEBAR (exactly from sketch photo) */}
          {/* ========================================================================= */}
          <aside className="w-full md:w-52 border-b-[3.5px] md:border-b-0 md:border-r-[3.5px] border-[#0a111a] flex flex-col justify-between shrink-0 bg-[#d4e3ec]">
            <div>
              {/* TOP: Hamburger Menu (3 hand-drawn wavy lines) */}
              <div
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-3.5 border-b-[3.5px] border-[#0a111a] flex items-center justify-start cursor-pointer hover:bg-[#c9dbe7] transition"
                title="Меню"
              >
                <div className="flex flex-col gap-1.5 w-9">
                  {/* Line 1 with sketch overshoot */}
                  <div className="h-[3.5px] bg-[#0a111a] rounded-full w-9 transform -rotate-0.5"></div>
                  {/* Line 2 slightly shorter */}
                  <div className="h-[3.5px] bg-[#0a111a] rounded-full w-7 ml-0.5 transform rotate-0.5"></div>
                  {/* Line 3 wavy */}
                  <div className="h-[3.5px] bg-[#0a111a] rounded-full w-8 transform -rotate-0.5"></div>
                </div>
              </div>

              {/* MENU CELLS: Divided by horizontal black ink lines */}
              <nav className={`${isSidebarOpen ? "block" : "hidden md:block"}`}>
                {currentMenuItems.map((item) => {
                  const isSelected = activeItem.toLowerCase() === item.label.toLowerCase();

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveItem(item.label)}
                      className={`w-full text-left px-3.5 py-3 border-b-[3.5px] border-[#0a111a] text-2xl sm:text-[26px] font-bold tracking-wide transition-all cursor-pointer block leading-tight ${
                        isSelected
                          ? "bg-[#0a111a] text-white"
                          : "bg-transparent text-[#0a111a] hover:bg-[#c6d8e5]"
                      }`}
                      style={{
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {/* For Dashboard, display with handwritten break if long */}
                      {item.label === "Reading & Writing" && isSAT ? (
                        <div className="flex flex-col">
                          <span className="text-xl sm:text-2xl leading-none">SAT</span>
                          <span className="text-2xl sm:text-[28px] font-extrabold leading-none -mt-0.5">R&amp;W</span>
                        </div>
                      ) : item.label === "Dashboard" ? (
                        <div className="leading-tight">
                          <span>Dash</span>
                          <br />
                          <span className="-mt-1 block">board</span>
                        </div>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* BOTTOM OF SIDEBAR: Black dot avatar + "zxerif" handwritten */}
            <div className="p-3.5 pt-6 flex items-center gap-2.5">
              {/* Solid black circular doodle avatar */}
              <div
                className="w-8 h-8 rounded-full bg-[#0a111a] border-2 border-[#0a111a] shrink-0"
                style={{
                  borderRadius: "50% 48% 52% 49% / 49% 52% 48% 51%",
                }}
              />
              <span
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a111a] leading-none"
                style={{ fontFamily: "'Gaegu', cursive" }}
              >
                zxerif
              </span>
            </div>
          </aside>

          {/* ========================================================================= */}
          {/* MAIN RIGHT AREA: Header Banner + White Workspace Card */}
          {/* ========================================================================= */}
          <main className="flex-1 p-3 sm:p-5 lg:p-6 flex flex-col justify-between gap-4">
            
            {/* ------------------------------------------------------------------- */}
            {/* TOP HEADER: Prominent "Turn to IELTS" / "Turn to SAT" Black Banner */}
            {/* ------------------------------------------------------------------- */}
            <div className="w-full">
              <button
                onClick={toggleMode}
                className="w-full bg-[#0a111a] text-white py-3 px-6 sm:px-8 border-[3.5px] border-[#0a111a] rounded-[22px] shadow-[3px_4px_0px_0px_#0a111a] hover:shadow-[5px_6px_0px_0px_#0a111a] active:translate-y-0.5 active:shadow-[1px_2px_0px_0px_#0a111a] flex items-center justify-center gap-4 transition-all cursor-pointer group"
                style={{
                  borderRadius: "22px 26px 20px 24px / 24px 20px 26px 22px",
                }}
                title="Нажмите для переключения режима"
              >
                {/* Chalk-like white handwritten text */}
                <span
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-white leading-none whitespace-nowrap"
                  style={{
                    letterSpacing: "0.5px",
                    fontFamily: "'Gaegu', cursive",
                  }}
                >
                  {isSAT ? "Turn to IELTS" : "Turn to SAT"}
                </span>

                {/* Hand-drawn sketched arrow */}
                <div className={`transition-transform duration-300 ${!isSAT ? "rotate-180" : "group-hover:translate-x-1.5"}`}>
                  <svg
                    className="w-10 h-7 sm:w-14 sm:h-9"
                    viewBox="0 0 60 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Shaft */}
                    <path
                      d="M3 14H48"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    {/* Arrow head */}
                    <path
                      d="M36 4L54 14L36 24"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Hand-drawn sketch inner hatch marks */}
                    <path
                      d="M40 9L44 14L40 19"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* WHITE DASHBOARD CONTAINER CARD (from sketch) */}
            {/* ------------------------------------------------------------------- */}
            <div
              className="flex-1 bg-white border-[3.5px] border-[#0a111a] rounded-[24px] p-4 sm:p-6 lg:p-7 flex flex-col justify-between gap-4 shadow-[2px_3px_0px_0px_#0a111a]"
              style={{
                borderRadius: "24px 22px 25px 23px / 23px 25px 22px 24px",
              }}
            >
              {/* Title with hand-drawn underline */}
              <div>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0a111a] tracking-tight leading-none inline-block relative"
                  style={{
                    fontFamily: "'Gaegu', cursive",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {isSAT ? "Digital SAT" : "IELTS Academic"}

                  {/* Sketched Underline Bar */}
                  <span
                    className="block w-full h-[4.5px] bg-[#0a111a] rounded-full mt-1.5 transform -rotate-0.5"
                    style={{
                      borderRadius: "5px 2px 4px 3px",
                    }}
                  />
                </h1>
              </div>

              {/* =============================================================== */}
              {/* INNER CARD: "Till Exam:" (from sketch) */}
              {/* =============================================================== */}
              <div
                className="w-full bg-[#ffffff] border-[3.5px] border-[#0a111a] rounded-[24px] p-4 sm:p-6 flex flex-col justify-between gap-5 relative"
                style={{
                  borderRadius: "22px 26px 20px 24px / 24px 20px 25px 22px",
                }}
              >
                {/* Title inside card */}
                <div className="flex items-center justify-between">
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a111a] tracking-wide leading-none"
                    style={{ fontFamily: "'Gaegu', cursive" }}
                  >
                    Till Exam:
                  </h2>

                  <span className="text-sm font-sans font-bold text-slate-400 hidden sm:inline">
                    (кликните на дни или Aim для правки)
                  </span>
                </div>

                {/* ROW 1: Clock + [X] days & Aim Badge */}
                <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                  
                  {/* CLOCK + DAYS COUNTER */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Hand-Drawn Clock Icon */}
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3.5px] border-[#0a111a] bg-white flex items-center justify-center shrink-0"
                      style={{
                        borderRadius: "50% 48% 52% 49% / 49% 52% 48% 51%",
                      }}
                    >
                      <svg
                        className="w-10 h-10 sm:w-11 sm:h-11"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Clock Hand 1 (pointing up) */}
                        <line
                          x1="20"
                          y1="20"
                          x2="20"
                          y2="9"
                          stroke="#0a111a"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        {/* Clock Hand 2 (pointing to ~3:30 or 4) */}
                        <line
                          x1="20"
                          y1="20"
                          x2="29"
                          y2="24"
                          stroke="#0a111a"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        {/* Center Pin */}
                        <circle cx="20" cy="20" r="2.5" fill="#0a111a" />
                      </svg>
                    </div>

                    {/* [X] days text */}
                    <div
                      onClick={handleEditDays}
                      className="cursor-pointer hover:opacity-80 transition"
                      title="Кликните, чтобы изменить число дней"
                    >
                      <span
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0a111a] tracking-tight leading-none"
                        style={{ fontFamily: "'Gaegu', cursive" }}
                      >
                        {days} days
                      </span>
                    </div>
                  </div>

                  {/* AIM BADGE: Rounded box with diagonal scribble/hatching from photo */}
                  <div
                    onClick={handleEditAim}
                    className="border-[3.5px] border-[#0a111a] rounded-[20px] px-5 sm:px-7 py-2 text-center cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-[1px_2px_0px_0px_#0a111a]"
                    style={{
                      backgroundColor: "#638da5",
                      backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        rgba(255, 255, 255, 0.4) 0px,
                        rgba(255, 255, 255, 0.4) 2.5px,
                        transparent 2.5px,
                        transparent 6px
                      )`,
                      borderRadius: "18px 22px 17px 20px / 20px 17px 22px 18px",
                      minWidth: "120px",
                    }}
                    title="Кликните, чтобы изменить Aim"
                  >
                    <div
                      className="text-2xl sm:text-3xl font-extrabold text-[#0a111a] leading-none"
                      style={{
                        fontFamily: "'Gaegu', cursive",
                        textShadow: "1px 1px 0px rgba(255,255,255,0.4)",
                      }}
                    >
                      Aim
                    </div>
                    <div
                      className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a111a] leading-none"
                      style={{
                        fontFamily: "'Gaegu', cursive",
                        textShadow: "1px 1px 0px rgba(255,255,255,0.4)",
                      }}
                    >
                      {isSAT ? satAim : ieltsAim}
                    </div>
                  </div>

                </div>

                {/* =============================================================== */}
                {/* ROW 2: PROGRESS BAR TRACK + 4 CIRCULAR NODES + NUMBERS (from sketch) */}
                {/* =============================================================== */}
                <div className="pt-2 pb-2">
                  <div className="relative flex items-center justify-between w-full px-2 sm:px-6">
                    
                    {/* The Chunky Bar Track */}
                    <div
                      className="absolute left-4 right-4 sm:left-8 sm:right-8 h-6 sm:h-7 bg-[#8faec2] border-[3.5px] border-[#0a111a] rounded-full z-0"
                      style={{
                        borderRadius: "9999px",
                      }}
                    />

                    {/* 4 Checkpoint Nodes along the track */}
                    {checkpoints.map((cp, idx) => (
                      <div
                        key={cp.label}
                        className="relative z-10 flex flex-col items-center"
                      >
                        {/* Round Checkpoint Circle */}
                        <div
                          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border-[3.5px] border-[#0a111a] transition-all hover:scale-110 flex items-center justify-center ${
                            cp.isDarkTarget
                              ? "bg-[#0a111a]" // 1600 circle is dark navy/black in sketch
                              : "bg-[#5c849e]" // 400, 800, 1200 are shaded slate-blue
                          }`}
                          style={{
                            borderRadius: "50% 48% 52% 49% / 49% 52% 48% 51%",
                          }}
                        />

                        {/* Number beneath checkpoint */}
                        <div
                          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a111a] mt-2 select-none"
                          style={{
                            fontFamily: "'Gaegu', cursive",
                            letterSpacing: "-0.5px",
                          }}
                        >
                          {cp.label}
                        </div>
                      </div>
                    ))}

                  </div>
                </div>

              </div>

            </div>

          </main>

        </div>

      </div>

      {/* Keyboard listener */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('keydown', function(e) {
              if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
              if (e.key === 't' || e.key === 'T' || e.key === ' ') {
                if (e.key === ' ') e.preventDefault();
                var btn = document.querySelector('button[title="Нажмите для переключения режима"]');
                if (btn) btn.click();
              }
            });
          `,
        }}
      />
    </div>
  );
}
