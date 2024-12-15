# Portfolio Documentation - Local Dev Setup | EmailJS | Common Issues 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Getting Started

### **Install Dependencies**
Run the following command to install all necessary dependencies:
```bash
npm install
```

### **Run the Local Development Server**
Start the local development server with:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

---

## Features

- **Next.js Framework**: Provides server-side rendering and static site generation for optimal performance.
- **EmailJs Integration**: Allows sending emails directly from the application without a backend.

---

## EmailJs Setup

This project uses [EmailJs](https://www.emailjs.com/) as a service to send emails directly from the frontend. Follow these steps to set up EmailJs:

### **1. Create an EmailJs Account**
- Go to [EmailJs](https://www.emailjs.com/) and create an account.

### **2. Set Up Email Service**
- Once logged in, add an email service (e.g., Gmail, Outlook) in the EmailJs dashboard.

### **3. Create an Email Template**
- Configure a template in the EmailJs dashboard. You can customize it with placeholders for dynamic data (e.g., `{{name}}`, `{{message}}`).

### **4. Obtain API Keys**
- Navigate to the **Integration** section in the dashboard to get your `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY`.

### **5. Update Environment Variables**
Add your EmailJs credentials to the `.env` file:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```


### **Available Commands**

| Command           | Description                                      |
|-------------------|--------------------------------------------------|
| `npm run dev`     | Starts the development server.                  |
| `npm run build`   | Builds the project for production.              |
| `npm run start`   | Starts the production server.                   |
| `npm run lint`    | Lints the code to identify and fix issues.      |

---

### **Common Issues**

#### **EmailJs Errors**
- Ensure your `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` are correct.
- Check if the email service you configured (e.g., Gmail) is properly set up in the EmailJs dashboard.

#### **Environment Variables Not Working**
- Verify that `.env` exists in the root of your project.
- Ensure you restart the development server after updating `.env`.

#### **Build Fails**
- Check for missing dependencies using:
  ```bash
  npm install
  ```
- Run the linting tool to identify issues:
  ```bash
  npm run lint
  ```
---

