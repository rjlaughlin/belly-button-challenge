// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;
  

    // Filter the metadata for the object with the desired sample number
    let result1 = metadata.filter(sampleObj => sampleObj.id == sample)[0];
    console.log(result1);

    // Use d3 to select the panel with id of `#sample-metadata`
    let metadataPanel = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    metadataPanel.html("");

    // Add the sample data to the metadataPanel
    metadataPanel.html(
      Object.entries(result1)
        .map(([key, value]) => `${key.toUpperCase()}: ${value}<br>`)
        .join("")
    );
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples

    // Filter the samples for the object with the desired sample number
    let result2 = samples.filter(sampleObj => sampleObj.id == sample)[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = result2.otu_ids
    let otu_labels = result2.otu_labels
    let sample_values = result2.sample_values
    
    // console.log(otu_ids)
    // console.log(otu_labels)
    // console.log(sample_values)

    // Build a Bubble Chart
    let trace1 = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    };
    
    let data1 = [trace1];
    
    let layout1 = {
      title: `Bacteria Cultures Per Sample`,
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" },
    };

    // Render the Bubble Chart
    Plotly.newPlot("bubble", data1, layout1);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    // Don't forget to slice and reverse the input data appropriately
    
    let top10_ids = otu_ids.slice(0, 10).reverse();
    let top10_labels = otu_labels.slice(0, 10).reverse();
    let top10_values = sample_values.slice(0, 10).reverse();

    let ids = top10_ids.map(function(id) {
      return `OTU ${id} `;
      });
  

    // Build a Bar Chart
    
    let trace2 = {
      x: top10_values,
      y: ids,
      text: top10_labels,
      type: "bar",
      orientation: "h"
};
    
    let data2 = [trace2];
    let layout2 = {
      title: `Top 10 Bacteria Cultures Found`,
      xaxis: { title: "Number of Bacteria" }
    };
  
    // Render the Bar Chart
    Plotly.newPlot("bar", data2, layout2);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdownMenu = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    console.log(names)

    data.names.forEach((sample) => {
      dropdownMenu.append("option").text(sample).property("value", sample);
    });
    
    // Get the first sample from the list
    let firstSample = data.names[0];
  
    // Select all option elements inside the dropdown
    let options = dropdownMenu.selectAll("option");
  
    // Find the longest option text
    let longestOption = d3.max(options.nodes(), (option) => option.textContent.length);

    // Set the width of the dropdown to the length of the longest option
    dropdownMenu.style("width", `${longestOption * 15}px`);
    
    // Build charts and metadata panel with the first sample
    buildCharts(firstSample)
    buildMetadata(firstSample)
  
    // Build charts and metadata panel each time a new sample is selected
    d3.selectAll("#selDataset").on("change", optionChanged);
  
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
    
      let selectedSample = d3.select("#selDataset").node().value;

      // Call the first function
      buildMetadata(selectedSample);
    
      // Call the second function
      buildCharts(selectedSample);

    };

// Initialize the dashboard
init();
