## Sprint 2 - Build Project: Weather App
### Project Description:
For this project, we will be using an external API to retrieve weather data to create a webpage that prompts users to enter a zip code, then displays current weather information for that location or a friendly error message if the zip code is not found.

### Objective:
Learn how to consume APIs via Axios in the Weather App project

### Requirements:
To complete the assignment, you must complete the following:
- Use JS to render the entire app (only have a single <div id='main'></div> in the body of your index.html.
- Use https://openweathermap.org/’s API to fetch weather data.
- Allow the user to enter their location (zip code is probably easiest) and press a button to load the weather.
- Run an onClick or onSubmit that executes an Axios GET request to retrieve weather data from the API.
- Handle successful and unsuccessful attempts
    - If the request is successful, display the following in a 'mobile app' format:
      - City name
      - Current weather conditions
      - Current temperature in Kelvin, Fahrenheit, and Celsius
      - A unique image, decided by the current temperature (The API has icons built-in, be sure to read the docs)
    - If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
- Allow the user to continue entering new zip codes to get new weather data.
- Design should include a RESPONSIVE layout utilizing Bootstrap’s layout classes that works on both mobile and desktop (with different layouts) and applies atomic design principles for a professional looking presentation.
    

