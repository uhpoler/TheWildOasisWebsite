# The Wild Oasis Website

**The Wild Oasis** is a luxury cabin hotel website that offers a seamless experience for users to explore and book stays in the heart of the Italian Dolomites. This website combines modern design with functionality, featuring dark and light mode support, dynamic page generation, and user-friendly navigation.

## Features

- **Responsive Design**: The website is optimized for all device sizes, ensuring a seamless experience whether on desktop, tablet, or mobile.
- **Dynamic Metadata**: Each page dynamically generates metadata based on the content, providing unique titles for individual cabins and sections.
- **Luxury Cabins**: Users can explore the cabins, view details, and make reservations with ease.
- **Reservation System**: Integrated booking system with a "pay-on-arrival" model.
- **Dark Mode**: Supports a dark theme for better user accessibility.
- **User Account Area**: A personalized guest area where users can view or manage their reservations and profiles.
- **Family-Run Business**: A rich narrative of The Wild Oasis's history, from 1962, with a focus on the personal touch of a family-run business.

## Components

- **RootLayout**: Handles the structure of the entire website, including global styles and metadata.
- **Navigation**: A component for navigating the site, with dynamic user session handling.
- **Cabin**: Displays individual cabin details and allows for reservations.
- **CabinList**: A list of all available cabins with filters for capacity.
- **Reservation**: Allows users to reserve a cabin and shows reservation details.
- **Header**: Displays the logo and top navigation of the site.
- **Filter**: Filters cabins based on user-selected criteria like capacity.
- **Spinner**: Shows loading states while fetching data.

## How It Works

1. **Dynamic Pages**: The cabins and content are generated dynamically based on the available data, ensuring the latest information is displayed without requiring full page reloads.
2. **User Authentication**: The navigation adapts based on whether the user is logged in, showing personalized elements like profile pictures.
3. **Reservation Context**: The website uses a global reservation context to manage the state of bookings across multiple pages.
4. **Dark Mode Support**: Users can switch between light and dark modes, with the design adapting to ensure readability in both themes.

## Technologies Used

- **Next.js**: For server-side rendering and static site generation.
- **React**: For building interactive components.
- **Tailwind CSS**: For responsive, modern styling.
- **React Context API**: For managing global states like reservations and dark mode.
- **Josefin Sans (Google Font)**: Used for a clean and modern typography.
- **Image Optimization (Next.js)**: For optimizing images across the site.
- **JavaScript (ES6+)**: For the application logic.
- **HTML5 & CSS3**: For structuring and styling the website.

## Screenshots

![image](https://github.com/user-attachments/assets/aec667c6-a9c5-4b81-bde1-5e9de11a5ed9)
![image](https://github.com/user-attachments/assets/9e2f9daf-48ab-46cf-bf62-d93747bb0d42)
![image](https://github.com/user-attachments/assets/8342c83e-a135-4769-83cd-f9029adc014f)
![image](https://github.com/user-attachments/assets/f3c741b1-1072-4f7e-95f6-1b969a63c1e5)
![image](https://github.com/user-attachments/assets/36305166-5693-4076-a73f-07beefec0a54)



## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/TheWildOasisWebsite.git
   ```
2. **Install the dependencies**:
   ```bash
   npm install
   ```
3. **Start the application**:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.
