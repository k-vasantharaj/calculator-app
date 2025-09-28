# 🧮 Salesforce Calculator – Lightning Web Component

## 📖 Overview

This project is a **Salesforce Lightning Web Component (LWC)** that demonstrates a **dynamic calculator** with multiple modes:  

✨ **Normal Calculator**  
✨ **Scientific Calculator**  
✨ **Parent-Child Template Rendering**  
✨ **Conditional Rendering**  

Users can select between a **Basic Calculator** and a **Scientific Calculator**, perform calculations, and see results dynamically inside a styled **Lightning Card** with **Salesforce Lightning Design System (SLDS)** styling.

---

## 🎯 Features

- ✅ Switch between **Basic** and **Scientific** calculators  
- ✅ Dynamic input handling for numbers and operators  
- ✅ Scientific functions: `sin`, `cos`, `tan`, `log`, `cbrt`  
- ✅ Backspace (`<<`) and Clear (`C`) functionality  
- ✅ Conditional template rendering for different calculator modes  
- ✅ Clean and responsive UI with **SLDS**  
- ✅ Safe input length restriction (max 20 characters)  
- ✅ Error handling for invalid calculations  

---

## 🛠️ Technologies Used

- ⚡ **Lightning Web Components (LWC)** – Component framework for Salesforce  
- 🎨 **Salesforce Lightning Design System (SLDS)** – Styling & responsive UI  
- 📜 **JavaScript (ES6+)** – Logic & dynamic behavior  
- 🏗️ **HTML5** – Component markup  
- 🎭 **CSS3** – Custom styling and alignment  
- ☁️ **Salesforce Platform** – Hosting and deployment environment  
- 🖥️ **Salesforce DX (SFDX)** – Development & deployment tool  
- 💻 **Visual Studio Code (VS Code) with Salesforce Extensions** – IDE for building LWCs  
- 🔄 **Parent-Child Communication** – Template switching and event handling  

> **Optional Advanced Features**  
> - Can be extended to **store history of calculations**  
> - Can integrate **Lightning Message Service (LMS)** for multi-component communication  

---

## ⚙️ Installation

1. **Clone this repository:**

```bash
git clone https://github.com/k-vasantharaj/salesforce-calculator-lwc
Deploy to Salesforce Org using SFDX or VS Code.

Open Lightning App Builder → Add the component to:

🏠 Home Page

📄 Record Page

📱 App Page

▶️ How It Works
1️⃣ Select Calculator Mode
Click CALCULATOR → Basic Calculator opens

Click SCIENTIFIC CALCULATOR → Scientific Calculator opens

2️⃣ Input Numbers & Operators
Use buttons to input numbers and arithmetic operators

Scientific functions (sin, cos, tan, log, cbrt) are available in scientific mode

3️⃣ Perform Calculation
Click = to calculate result

Click C to clear input

Click << to delete the last character

4️⃣ Close Calculator
Click CLOSE to return to default view

🚀 Example
Basic Calculator Input: 12 + 8
Output: 20

Scientific Calculator Input: sin(30)
Output: 0.50000

📌 Notes
Maximum input length: 20 characters

Scientific functions use radians for trigonometric calculations

Fully styled using SLDS for consistent Salesforce look & feel

Responsive design for desktop and mobile screens

✨ Styling & Fonts (README Presentation)
Use **bold** for important labels or buttons

Use > blockquote for notes or tips

Use inline code for operator, functions, or variable names

Use emojis for UI interaction hints (📄 🏠 📱 ➡️)

Headings for sections (##, ###) to make it readable
