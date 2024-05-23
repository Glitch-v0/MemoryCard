export default function GetCatData() {
  return fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then((response) => {
      // Check if the response status is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the response as JSON
      return response.json();
    })
    .then((data) => data.map((item) => ({
      id: item.id,
      url: item.url,
      width: item.width,
      height: item.height,
    })))
    .catch((error) => {
      // Handle any errors that occur during fetch or JSON parsing
      console.error('Error fetching cat data:', error);
      return [];
    });
}
