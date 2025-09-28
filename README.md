# 🧮 Salesforce Calculator – Lightning Web Component

## 📖 Overview

This project is a **Salesforce Lightning Web Component (LWC)** that demonstrates a **dynamic calculator** with multiple modes:  

✨ Normal Calculator  
✨ Scientific Calculator  
✨ Parent-Child Template Rendering  
✨ Conditional Rendering  

Users can select between a **Basic Calculator** and a **Scientific Calculator**, perform calculations, and see results dynamically inside a styled **Lightning Card**.

---

## 🎯 Features

- ✅ Switch between **Basic** and **Scientific** calculators  
- ✅ Dynamic input handling for numbers and operators  
- ✅ Scientific functions: `sin`, `cos`, `tan`, `log`, `cbrt`  
- ✅ Backspace and clear functionality  
- ✅ Conditional template rendering for different calculator modes  
- ✅ Clean UI with Salesforce Lightning Design System (SLDS)  

---

## 🛠️ Technologies Used

- ⚡ Lightning Web Components (LWC)  
- 🎨 Salesforce Lightning Design System (SLDS)  
- 📜 JavaScript (ES6+)  
- 🏗️ HTML5  
- 🎭 CSS3  
- ☁️ Salesforce Platform  
- 🖥️ Salesforce DX (SFDX) – Development & deployment tools  
- 💻 VS Code with Salesforce Extensions – IDE for building LWCs  

---

## ⚙️ Installation

1. **Clone this repository:**

```bash
git clone https://github.com/k-vasantharaj/salesforce-calculator-lwc
Deploy to your Salesforce Org using SFDX or VS Code.

Open Lightning App Builder → Add the component to:

🏠 Home Page

📄 Record Page

📱 App Page

▶️ How It Works
Select Calculator Mode

Click CALCULATOR → Basic Calculator opens

Click SCIENTIFIC CALCULATOR → Scientific Calculator opens

Input Numbers & Operators

Use buttons to input numbers and arithmetic operators

Scientific functions like sin, cos, tan, log, and cbrt available in scientific mode

Perform Calculation

Click = to calculate result

C clears input

<< deletes last character

Close Calculator

Click CLOSE to return to default view

🚀 Example
Basic Calculator Input: 12 + 8
Output: 20

Scientific Calculator Input: sin(30)
Output: 0.50000

📌 Notes
Maximum input length: 20 characters

Scientific functions use radians for trigonometric calculations

Designed with SLDS for consistent Salesforce look & feel
