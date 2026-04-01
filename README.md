# Investment Calculator

A single-page React application that helps users estimate the future value of their investments. The growth chart visualizes the journey to a mountain top, symbolizing the achievement of financial goals.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Investment Calculator provides instant, intuitive investment growth calculations. It motivates users by visualizing portfolio growth as a climb to a mountain summit and educates them about the power of compounding and regular contributions.

For a detailed breakdown of the product goals and design, see [PRODUCT_DESIGN_DOCUMENT.md](PRODUCT_DESIGN_DOCUMENT.md).

## Features

- **Input Form** — Enter initial investment, monthly contribution, years to grow, estimated rate of return, and compound frequency
- **Results Display** — View future value, total contributions, total interest earned, and a year-by-year table
- **Mountain Journey Chart** — Interactive chart that visualizes investment growth as a path ascending a mountain, distinguishing principal from interest
- **Educational Content** — Brief explanations of compound interest and tips for maximizing growth
- **Responsive & Accessible Design** — WCAG-compliant layout with keyboard navigation and screen reader support

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes bundled with Node.js)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AdjunctDel/investment-calculator.git
   cd investment-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode with hot reloading |
| `npm run build` | Builds the app for production into the `build/` folder |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | Ejects the Create React App configuration (irreversible) |

## Usage

1. Enter your **initial investment** amount.
2. Set a **monthly contribution** to add regularly.
3. Choose the **number of years** to let your investment grow.
4. Input your **estimated annual rate of return**.
5. Optionally select a **compound frequency** (monthly, quarterly, or annually).
6. Click **Calculate** to see your results and the mountain journey chart.

**Example:**
- Initial Investment: $10,000
- Monthly Contribution: $500
- Years to Grow: 20
- Rate of Return: 7%

## Project Structure

```
investment-calculator/
├── public/          # Static assets (HTML entry point)
├── src/             # Main application source code
│   ├── App.js       # Root application component
│   ├── App.css      # Application styles
│   ├── index.js     # React entry point
│   └── index.css    # Global styles
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```

## Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a pull request.

Please ensure your changes are consistent with the existing code style and that all tests pass before submitting.

## License

MIT