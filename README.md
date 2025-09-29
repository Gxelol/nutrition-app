# Project – Intelligent Nutrition Calculations

##  Overview
**Project A** is a system for nutritionists that automates standard nutritional calculations (BMI, BMR, TEE, anthropometric ratios, body fat estimates, risk alerts, etc.) directly from patient data.  
It transforms raw inputs into clear clinical indicators, saving time and reducing manual errors.  
The nutritionist remains responsible for all dietary planning — the system only provides accurate and standardized calculations.  

---

## 🤖 Future Feature – Nutrition Chatbot
After the main system is finalized, a **Nutrition Chatbot** will be integrated.  
This chatbot will:  
- Provide **humanized support** in natural language  
- Answer **basic nutrition questions**  
- Adapt responses based on **user history and profile**  
- Use **generative AI (GPT / Ollama, etc.)** fine-tuned on nutrition datasets  

It will serve as an **assistant layer**, complementing the calculation engine with patient-friendly explanations.

---

## 🛠️ Technologies
- **Backend**: NestJS + PostgreSQL  
- **AI Microservice**: Python + FastAPI + scientific libraries (pandas, numpy, scipy)  
- **Frontend**: Next.js  
- **Optional LLM**: GPT/Ollama for natural language explanations and chatbot functionality  

---

## Project Status
Currently in early development.  

Next milestones:  
- Implement Python modules for all calculation formulas  
- Add progress-tracking charts in the frontend  
- Integrate LLM for optional natural language reports  
- Begin chatbot integration (post-core release)  
