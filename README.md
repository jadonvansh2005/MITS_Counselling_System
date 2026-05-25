# 🎓 MITS AI Counselling System

An AI-powered counselling assistance platform designed for engineering aspirants to predict branch allotment probabilities and generate smart choice-filling strategies for MITS admissions.

This project combines Machine Learning, Statistical Modelling, and Future Cutoff Estimation to help students make realistic and strategic counselling decisions instead of relying on guesswork.

---

# 🚀 Project Overview

Every year, thousands of students make counselling mistakes because they:

- only target high-demand branches
- ignore realistic branches
- skip core engineering branches
- misunderstand cutoff trends
- do not understand safe vs dream choices

This system solves that problem by providing:

✅ Branch allotment probability prediction  
✅ Future cutoff estimation  
✅ Smart counselling strategy generation  
✅ AI-based choice filling order  
✅ Safe / Reach / Dream branch classification  
✅ Future-year prediction support (2026+)  

---

# 🧠 Core Features

## ✅ AI Branch Prediction

Predicts the probability of getting a branch using:

- JEE Rank
- Category
- Domicile
- Counselling Round

---

## ✅ Hybrid Prediction Engine

The prediction system combines:

### Machine Learning Model
- XGBoost Classifier
- Historical counselling analysis
- Feature engineered dataset

### Statistical Engine
- Percentile trend analysis
- Rank-gap scoring
- Competition analysis
- Future cutoff estimation

---

## ✅ Future Cutoff Prediction

The system can estimate future branch closing ranks using:

- Seat matrix changes
- Category-wise seat distribution
- Candidate count changes
- Historical trends

This allows prediction for upcoming counselling years like:

- 2026
- 2027
- future sessions

---

## ✅ Smart Choice Filling Engine

Generates intelligent branch ordering by combining:

- competition hierarchy
- branch demand
- allotment probability
- realistic counselling strategy

Instead of only showing:
- "possible branches"

the system also suggests:
- "how to fill choices strategically"

---

## ✅ Counselling Strategy Classification

Branches are classified as:

| Type | Meaning |
|------|----------|
| Dream | Highly competitive |
| Reach | Possible with luck/upgradation |
| Safe | Strong possibility |
| Very Safe | Highly achievable |

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- FastAPI
- Pydantic
- Uvicorn

## Machine Learning
- XGBoost
- Scikit-learn
- Pandas
- NumPy

---

# 📂 Project Structure

```bash
MITS_Counselling_System/

├── backend/
│
│   ├── app/
│   │
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── schemas/
│   ├── config/
│   │
│   └── main.py
│
├── frontend/
│
│   ├── src/
│   │
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── constants/
│   │
│   └── main.jsx
│
├── notebooks/
│
├── data/
│
└── README.md

⚙️ How It Works
Step 1 — User Input

The user enters:

JEE Rank
Category
Domicile
Counselling Round
Step 2 — Hybrid Prediction

The backend:

processes statistical probability
estimates future cutoffs
runs ML prediction
combines both engines
Step 3 — Result Generation

The system returns:

Final branch probability
Future closing rank
Rank gap
Counselling status
Step 4 — Smart Choice Filling

The AI counselling engine generates:

branch ordering
dream/reach/safe branches
realistic counselling strategy
📊 Machine Learning Workflow
Dataset Used

Historical MITS counselling data from:

2014 → 2025

Feature Engineering

Features include:

Rank Percentile
Seat Share
Branch Seats
Total Seats
Candidate Count
Category
Round
Domicile
Trend Analysis
Model Used
XGBoostClassifier

Chosen because of:

better probability estimation
structured data performance
nonlinear learning capability
🔮 Future Prediction Logic

The project dynamically adjusts predictions based on:

future seat matrix
category-wise seat changes
total candidate count
branch competitiveness

This makes the system adaptable for future counselling sessions.

🎯 Problem Solved

This project helps students avoid:

❌ unrealistic choice filling
❌ skipping safe branches
❌ poor counselling strategy
❌ misunderstanding cutoff trends

and instead enables:

✅ smarter counselling decisions
✅ realistic branch targeting
✅ strategic choice ordering

💡 Future Improvements

Planned upgrades:

Admin Panel
Real-time seat matrix updates
Multi-college support
Branch analytics dashboard
Placement trend integration
User authentication
Cloud deployment
AI chatbot counsellor
▶️ Running the Project
Backend
cd backend

uvicorn main:app --reload
Frontend
cd frontend

npm install

npm run dev
📌 Note

This project is designed for educational and counselling assistance purposes.

Final allotment depends on:

official counselling process
seat availability
reservation rules
counselling dynamics
👨‍💻 Developed By

Vansh Pratap Singh Jadon

B.Tech CSE Student
AI/ML & Full Stack Development Enthusiast










