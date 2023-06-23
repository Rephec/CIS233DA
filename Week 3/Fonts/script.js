function showCityContent(city) {
    const cityContent = document.getElementById('cityContent');
    
    // Clear the existing content
    cityContent.innerHTML = '';
    
    // Add the new city-specific content
    if (city === 'city1') {
      cityContent.innerHTML = `
        <h2>City 1</h2>
        <p>This is the content for City 1.</p>
      `;
    } else if (city === 'city2') {
      cityContent.innerHTML = `
        <h2>City 2</h2>
        <p>This is the content for City 2.</p>
      `;
    } else if (city === 'city3') {
      cityContent.innerHTML = `
        <h2>City 3</h2>
        <p>This is the content for City 3.</p>
      `;
    }

    cityContent.scrollIntoView({ behavior: 'smooth' });
  }