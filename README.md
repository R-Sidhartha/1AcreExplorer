🏡 1Acre Explorer
🚀 1Acre Explorer is a modern real estate platform built with Next.js, Tailwind CSS, TypeScript, and MongoDB. It provides seamless property exploration, advanced search features, interactive maps, and real-time data updates.

📌 Features
✅ Interactive Map Integration – Powered by Google Maps API
✅ Lazy Loading with Skeletons – Optimized for better performance
✅ Property Listings & Grid View – Display property details in an elegant UI
✅ Advanced Filtering – Search properties based on location, price, and features
✅ Fully Responsive Design – Tailored for all devices
✅ Next.js API Routes – Backend endpoints for property data

🚀 Project Setup
1️⃣ Clone the Repository
git clone https://github.com/R-Sidhartha/1AcreExplorer.git
cd 1acre-explorer

2️⃣ Install Dependencies
npm install

# or

yarn install

3️⃣ Set Up Environment Variables
Create a .env.local file in the root directory and add the required API keys:
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key

4️⃣ Start the Development Server
npm run dev

# or

yarn dev

Open http://localhost:3000 in your browser.

🌍 Deployment
🔗 Live Demo: [1Acre Explorer](https://1-acre-explorer.vercel.app/)
Deploy on Vercel (Recommended)

📖 Tech Stack

Frontend: Next.js, TypeScript, Tailwind CSS, ShadCN

State Management: Context

Maps & Location: Google Maps API

📝 Additional Notes
Folder Structure:

nextjs-1acre-assignment
┣ 📂 public/ # Static assets (icons, images)
┃ 📂 app/ # Next.js App Router (root folder)
┃ 📂 components/ # Reusable components
┃ ┣ 📂 property/ # Components related to property grid
┃ ┃ ┣ 📜 PropertyCard.tsx # Property Card (ShadCN UI + Framer Motion)
┃ ┃ ┣ 📜 PropertyGrid.tsx # Grid with Infinite Scroll (React Query)
┃ ┃ ┣ 📜 PropertyCarousel.tsx # Carousel inside PropertyCard (ShadCN UI)
┃ ┣ 📂 map/ # Map-related components
┃ ┃ ┣ 📜 Map.tsx # Google Maps integration (Markers)
┃ ┃ ┣ 📜 MapClient.tsx # property locations
┃ ┣ 📜 Navbar.tsx # Top navigation bar
┃ ┣ 📜 Footer.tsx # Footer
┃ 📂 hooks/ # Custom hooks
┃ ┣ 📜 useInfiniteScroll.ts # Infinite Scroll Hook
┃ 📂 lib/ # API & Utilities
┃ ┣ 📜 api.ts # Fetch property & map data
┣ 📜 next.config.js # Next.js config
┣ 📜 tsconfig.json # TypeScript config
┣ 📜 README.md # Project Documentation
┣ 📜 package.json # Dependencies

📧 Contact & Support
For queries or suggestions, feel free to reach out:

📩 Email: sidiitn516@gmail.com
portfolio: https://sidharth-portfolio-alpha.vercel.app
