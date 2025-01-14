# Belly Button Biodiversity Dashboard

## Overview

This project involves building an interactive dashboard to explore the Belly Button Biodiversity dataset. This dataset catalogs microbes found in human navels, revealing that a small number of microbial species (operational taxonomic units, or OTUs) are present in over 70% of individuals, while others are relatively rare.

Using D3.js and Plotly.js, the dashboard visualizes data and provides insights into microbial diversity. The project is hosted on GitHub Pages for easy accessibility.

## Project Structure

This project is divided into three main components:

### 1. Data Visualization with Plotly.js
#### Key Features:
- **Horizontal Bar Chart**:
  - Displays the top 10 OTUs for the selected individual.
  - Utilizes `sample_values` for values, `otu_ids` for labels, and `otu_labels` for hovertext.
- **Bubble Chart**:
  - Visualizes microbial diversity across samples.
  - Uses `otu_ids` for x-axis, `sample_values` for y-axis and marker size, and `otu_labels` for hovertext.

### 2. Metadata Display
#### Key Features:
- Displays demographic information of selected individuals.
- Dynamically updates based on user selection.

### 3. Interactivity and Deployment
#### Key Features:
- Dropdown menu for selecting samples.
- All charts and metadata update when a new sample is selected.
- Hosted on GitHub Pages for static deployment.

## Files

- **index.html**: Main HTML file for the dashboard.
- **samples.json**: Dataset containing microbial sample data.
- **static/js/app.js**: JavaScript file containing D3.js and Plotly.js code for data visualization.
- **static/css/style.css**: Stylesheet for dashboard styling.

## Setup and Dependencies

Before starting, ensure you have the following installed:

- Python (for running a local server)
- Javascript libraries:
    - D3.js
    - Plotly.js

## Running the Analysis
- Clone the repository and navigate to the project directory.
- Install dependencies indicated above.
- Open the dashboard using one of the following methods:
    1. Open using the Live Server extension within Visual Studio.
    2. Start a local server using Python
     ```bash
     python -m http.server
     ```
     Open the dashboard in a web browser at `http://localhost:8000`.