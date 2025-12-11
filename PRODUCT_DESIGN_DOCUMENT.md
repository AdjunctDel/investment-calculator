# Product Design Document: Investment Calculator Single Page Website

## Overview

The Investment Calculator is a visually engaging, single page web application that helps users estimate the future value of their investments. The growth chart is designed as a journey to a mountain top, symbolizing the achievement of financial goals.

## Goals

- Provide instant, intuitive investment growth calculations.
- Motivate users by visualizing progress as a climb to a mountain summit.
- Educate users about the power of compounding and regular contributions.
- Encourage users to take actionable steps toward their financial goals.

## Target Audience

- Individuals planning for retirement or major financial milestones.
- Users seeking a simple, inspiring tool for investment projections.

## Features

### 1. Input Form

- **Initial Investment**: Starting amount.
- **Monthly Contribution**: Recurring deposit.
- **Years to Grow**: Investment duration.
- **Estimated Rate of Return**: Annual percentage.
- **Compound Frequency**: (Optional) Monthly, Quarterly, Annually.

### 2. Results Display

- **Future Value**: Total at the end of the journey.
- **Total Contributions**: Sum of all invested money.
- **Total Interest Earned**: Growth from compounding.
- **Year-by-Year Table**: Progress summary.

### 3. Growth Chart: Mountain Journey

- Interactive chart visualizing investment growth as a path ascending a mountain.
- Data points are shown only in 5-year increments to improve readability.
- At the top (summit) of the chart, display the final amount accumulated.
- The chart visually distinguishes the principal (contributions) from the amount earned through compound interest (e.g., using different colors or areas).
- Each milestone is a step higher, with the summit representing the final future value.
- Optionally, add motivational markers (e.g., flags, milestones) along the path.

### 4. Educational Content

- Brief explanation of compound interest.
- Tips for reaching the summit (maximizing growth).

## User Flow

1. User enters investment details.
2. Clicks "Calculate".
3. Results and mountain chart update instantly.
4. User reviews breakdown and educational tips.
5. User may take further action via CTA.

## Technical Requirements

- **Frontend**: React.js (or similar), single page responsive design.
- **Charting**: Custom SVG, Canvas, or D3.js for mountain visualization.
- **Backend**: Optional, for saving scenarios or authentication.
- **Accessibility**: WCAG-compliant, keyboard navigation, screen reader support.

## Visual Design

- Clean, modern interface.
- Prominent input form and results area.
- Mountain-themed chart with a clear summit.
- Accessible color palette and intuitive navigation.

## Example Calculation

- Initial Investment: $10,000
- Monthly Contribution: $500
- Years to Grow: 20
- Rate of Return: 7%
- Results: Future Value, Total Contributions, Total Interest, Mountain Journey Chart.

## Success Metrics

- User engagement (calculations performed).
- Time spent on page.
- Conversion rate for CTA.
- User feedback and satisfaction.

## References

- [Ramsey Solutions Investment Calculator](https://www.ramseysolutions.com/retirement/investment-calculator)