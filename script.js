async function getCatImage() {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
          'x-api-key': 'live_ZfBVNMKShboSKDC4NP5cHkCLhyX7IS0jq9SARAyX0EE1Mtr87OFK5eXfKOCYOWUU'
        }
      });
      
      const data = await response.json();
      const img = document.getElementById('catImage');
      img.src = data[0].url;
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  }
