export function GetCatData() {
    let cat_pictures = []
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then((response) => {
      // Check if the response status is OK (status code 200-299)
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response as JSON
      return response.json();
  })
  .then((data) => {
    console.log(data) // This will log the array of cat image objects
    data.forEach(item => {
      console.log(item.id, item.url, item.width)
      cat_pictures.push(item)
    })
    return cat_pictures
  })
  .catch((error) => {
      // Handle any errors that occur during fetch or JSON parsing
      console.error('Error fetching cat data:', error);
  });
}
