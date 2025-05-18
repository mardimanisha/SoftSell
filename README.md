
# SoftSell - Software License Resale Platform

This is a responsive, single-page marketing website for SoftSell, a fictional software resale startup. The project is built using Next.js (App Router), TypeScript, and Tailwind CSS, incorporating ShadCN UI components for a modern and professional design. It features AI-powered customer support via Genkit.

## Features Implemented

-   **Hero Section**: Engaging headline ("Maximize the Value of Your Unused Software Licenses"), informative subheading, and clear Call-to-Action (CTA) buttons ("Sell My Licenses" and "How it works") with animations. Includes a special background color and a subtle radial gradient effect in dark mode.
-   **How It Works Section**: A visually guided 3-step process (Upload License -> Get Valuation -> Get Paid) using icons and descriptions, with reveal animations.
-   **Why Choose Us Section**: Highlights key benefits (e.g., Secure Transactions, Fast Process) in card format with icons, descriptions, and reveal animations.
-   **Customer Testimonials Section**: Displays customer reviews with avatars, star ratings, and names/positions. Features vertical stacking on mobile and a horizontal scroll with navigation arrows on desktop.
-   **Contact Form**: A lead generation form with fields for Name, Email, Company (optional), License Type (dropdown), and Message. Includes frontend validation using Zod and React Hook Form, and success notifications via Sonner toasts.
-   **SmartHelp Chat Widget**: An AI-powered customer chat tool integrated using a Genkit flow. It provides instant support by responding to customer questions about selling licenses. Features a pop-up dialog, message history, example questions, and typing indicators.
-   **Responsive Design**: The website is fully responsive and adapts to various screen sizes (mobile, tablet, desktop).
-   **Modern UI/UX**: Clean, visually appealing design with a coherent color palette, typography, and smooth animations.
-   **Light/Dark Mode**: Theme toggle functionality allowing users to switch between light and dark modes, with distinct styling for each.
-   **SEO Optimized**: Basic SEO meta tags (title, description, keywords) are included in the page layout.
-   **Reusable Components**: The codebase is structured with reusable React components (Header, Footer, individual Sections, UI components from ShadCN) for maintainability and scalability.

## Tech Stack

-   **Framework**: Next.js (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **UI Components**: ShadCN UI
-   **Form Handling**: React Hook Form & Zod
-   **Animations**: Framer Motion (for section and element reveal animations)
-   **Theming**: `next-themes`
-   **Notifications**: Sonner (for toast messages)
-   **Icons**: `lucide-react`

## Design Choices

-   **Color Palette**:
    -   **Light Mode**:
        -   Page Background: `#f8f8fc` (Light Grayish Blue)
        -   Hero Section Background: `#CBF36E` (Lime Green) with 58% opacity.
        -   Text: Primarily black (`#000000`) for high contrast.
        -   Primary Buttons: Black background with lime green text.
        -   Accent Color: Teal (`#287870`) used for icons, chat widget, and other highlights.
    -   **Dark Mode**:
        -   Page Background: `#1E293B` (Dark Slate Blue / Near Black).
        -   Hero Section Background: Dark card color (similar to `#1f1f23`).
        -   Hero Gradient: Subtle teal radial gradient in the center.
        -   Text: Primarily light gray/white for readability.
        -   Primary Buttons: Lime green background with black text.
        -   Accent Color: Brighter Teal (e.g., `hsl(175 55% 45%)`).
-   **Typography**: Utilizes the `Geist` font family, known for its modern and clean appearance, ensuring excellent readability.
-   **Layout**: Employs a clean, grid-based layout that is responsive across devices. Sections are clearly delineated with ample spacing. Card-based layouts are used for "Why Choose Us" and "Testimonials".
-   **Iconography**: Uses `lucide-react` for a consistent and minimalist set of icons related to software, finance, and user interaction.
-   **Animations & Transitions**:
    -   `Framer Motion` is used for entrance animations on sections and elements (e.g., fade-in and slide-up).
    -   Tailwind CSS utilities are used for hover effects and transitions on interactive elements.
    -   Smooth scrolling is enabled for in-page navigation (though not explicitly used in this single-page marketing site structure).
-   **Logo**: A simple SVG placeholder icon and the text "SoftSell" in a bold, prominent style. Header includes a black top border.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd softsell-platform # Or your repository name
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server (for Next.js app):**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically be available at `http://localhost:9002`.


## Time Spent

Approximately **15-20 hours**. This estimate includes:
-   Project setup and understanding requirements.
-   Theme (light/dark) and global style configuration.
-   Development of individual components and sections, including responsive design.
-   Implementing form handling and validation.
-   Ensuring responsiveness and testing across devices.
-   Writing documentation (like this README).
