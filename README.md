# 🛒 TechStore - Modern E-commerce Platform

A production-ready Full Stack E-commerce application built with **Next.js 14 (App Router)**, **TypeScript**, and **Stripe Payment Integration**. This project demonstrates modern web development practices including Server Actions, Global State Management, and Cloud Database integration.

🔗 **Live Demo:** [https://tech-store-six-navy.vercel.app](https://tech-store-six-navy.vercel.app)

## ✨ Key Features

- **🛍️ Product Browsing:** View available products with dynamic data fetching (Server Side Rendering).
- **🛒 Smart Shopping Cart:** Managed via **Redux Toolkit** for persistent state management.
- **💳 Secure Checkout:** Integrated **Stripe Payment Gateway** for secure transactions.
- **👨‍💻 Admin Actions:** Add new products directly to the PostgreSQL database using **Server Actions**.
- **🎨 Modern UI:** Designed with **Tailwind CSS** and **shadcn/ui** for a premium look.
- **🗄️ Database:** Hosted on **Neon (PostgreSQL)**, managed via **Prisma ORM**.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **State Management:** Redux Toolkit
- **Database:** PostgreSQL (Neon.tech)
- **ORM:** Prisma
- **Payments:** Stripe
- **Deployment:** Vercel

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/iratnayak/tech-store.git](https://github.com/iratnayak/tech-store.git)
    cd tech-store
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables (.env):**
    ```env
    DATABASE_URL="..."
    STRIPE_PUBLISHABLE_KEY="..."
    STRIPE_SECRET_KEY="..."
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="..."
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

---
Developed by **Isuru Rathnayake** - *Associate Software Engineer*