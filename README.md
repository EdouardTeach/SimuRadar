# ⚓ SimuRadar — Maritime Radar Simulator & Scenario Generator

> **Live Web Access via GitHub Pages:**  
> 🌐 [https://edouardteach.github.io/SimuRadar/](https://edouardteach.github.io/SimuRadar/)

---

## ⚠️ 100% Vibecoded Project

> This project is **100% vibecoded**, developed iteratively with the assistance of advanced artificial intelligence models, notably:
>
> - **Claude Sonnet 3.5 & 3.7** (Anthropic)
> - **GPT-4o / GPT-5 / Luna** (OpenAI)
> - **Gemini 2.5 / 3.1 Pro** (Google)
>
> Special thanks to [Mammouth AI](https://mammouth.ai/), whose platform made it possible to seamlessly orchestrate and switch between all these models throughout the entire development process.

---

## 🎯 Project Overview & Educational Purpose

The primary goal of **SimuRadar** is to provide a **free, open, browser-based maritime training tool** designed to:
1. **Learn and master marine radar fundamentals**, including Automatic Radar Plotting Aids (**ARPA**) and target tracking.
2. **Practice collision avoidance rules (COLREGs / RIPAM)** through realistic encounter scenarios.
3. **Design, export, and load custom training exercises** using a dedicated scenario generator.

---

## 🌊 Key Features

### 1. Interactive Radar PPI Display (`index.html`)
- **Real-time Plan Position Indicator (PPI)**: customizable antenna sweep rate, adjustable range scales (from short-range harbor navigation up to long-range offshore detection).
- **Realistic Coastline Data**: built-in tools to download, import, and render real-world geographic coastal vectors for authentic radar land echoes.
- **Display Modes**:
  - *Head-Up* (relative heading)
  - *North-Up* (true motion orientation)
  - *Course-Up* (stabilized on intended track)
- **True & Relative Motion Vectors**: instant assessment of collision risks (crossing situations, head-on encounters, overtaking).
- **Full ARPA Telemetry**: Closest Point of Approach (**CPA**), Time to CPA (**TCPA**), bearing, range, true/relative course, and speed over ground / through water.

### 2. Vessel Dynamics & Manoeuvring
- **Turning Circle & Rate of Turn (Giration)**: vessels do not pivot instantaneously on a point; realistic rudder response, inertia, turning radius, and angular speed are fully simulated.
- **Dynamic ARPA Consign Effects**: modifying ARPA parameters or target ship orders immediately translates into genuine kinematic behavioral changes (speed adjustments, heading alterations).

### 3. Special Routes & Trawling Operations
- **Complex Navigation Paths**: program custom multi-waypoint routes, patrols, and timed course/speed changes.
- **Fishing / Trawling Tracks**: simulate commercial fishing vessels actively trawling or deploying gear, featuring restricted maneuverability and characteristic lower-speed navigation patterns.

### 4. Collision Avoidance Scenario Generator (`generator.html`)
- Dedicated visual canvas to build tailored pedagogical exercises.
- Freely place own ship and targets with predefined initial vector kinematics.
- Export and import scenarios directly via lightweight JSON files for effortless distribution between instructors and trainees.

---

## 🚀 How to Run

### Online (Recommended)
SimuRadar runs directly in any modern web browser (Firefox, Chromium, Chrome, Safari, Edge) without requiring any installation or plugins:  
👉 **[https://edouardteach.github.io/SimuRadar/](https://edouardteach.github.io/SimuRadar/)**

### Locally (on your computer)
1. Clone the repository:
   ```bash
   git clone https://github.com/EdouardTeach/SimuRadar.git
   cd SimuRadar
   📜 License & Free Open-Source Philosophy (FOSS)

This project is built around the ethos of Free and Open Source Software (FOSS) — keeping maritime education tools freely accessible and collaborative.

The source code and documentation are released under the terms of the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0):

    ✅ Free Sharing & Redistribution: anyone may share, copy, and redistribute the material in any medium or format for educational and non-commercial purposes.
    ✅ Adaptation & Remixing: you are welcome to modify, tweak, and build upon the work.
    ❌ Non-Commercial: the material may not be used for direct commercial advantage or monetary compensation.
    🔄 ShareAlike: if you remix, transform, or build upon the material, you must distribute your contributions under the exact same license.

See the LICENSE file for the full legal deed.
