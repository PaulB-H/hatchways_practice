# Front-End Practice Assessment

The goal of this assessment is to replicate the frontend application below (as close as
possible). You are allowed to use any frontend framework (React.js, Vue.js, etc.) or use
plain Javascript, HTML, and CSS. We recommend using a frontend framework as parts of the assessment will be difficult without it.

This practice assessment will **not** be graded, however the official assessment will be graded based on the following criteria (so it is good practice to keep these categories in mind while completing this practice assessment):

- Correctness: Is your solution complete and does it pass different test cases?
- Code Organization, Readability, & Maintainability: Is your code easy to read and
  well organized?
- Code Performance: Is your code efficient? Did you use appropriate data
  structures?
- Best Practices: Did you utilize good programming practices (avoid anti-patterns)? Did you show a good grasp of your language/framework of choice?

## Part 1

The first step of the assessment is to get weather data from an API. We will be displaying this data in the next few steps. The specific data that we'll want to have is the high and low temperatures for today and the next 4 days of any location of your choice (feel free to hardcode the location), along with some data that will help you decide which weather icon to display (this could be an ID or a string such as "partially cloudy", it will depend on the API you choose).

There are many possible [free weather APIs](https://github.com/public-apis/public-apis#weather) you can use, but we recommend you use the [OpenWeatherMap API](https://openweathermap.org/api), which is free for use, but will require you to sign-up to get an API key (most APIs will).

## Part 2

The next step of the assessment is to display the data for today, and match the following mock:

![Screenshot from 2021-08-17 16-19-34.png](https://raw.githubusercontent.com/PaulB-H/hatchways_practice/main/frontend/img1.png)

We want to use the data that was received from the API to do sot. Note: you may have to convert the min and max temperatures from Kelvin to Centigrade or Fahrenheit.

You can download the icons to display [here](https://openweathermap.org/weather-conditions#:~:text=primary.%20An%20example-,How%20to%20get%20icon%20URL,-For%20code%20500).

## Part 3

The third and last step of the assessment is to expand what you wrote in part 2 to create a 5 day forecast that looks as follows:

![Screenshot from 2021-08-17 16-20-44.png](https://raw.githubusercontent.com/PaulB-H/hatchways_practice/main/frontend/img2.png)

When finished, the application should look like this:

![Screenshot from 2021-08-17 16-18-35.png](https://raw.githubusercontent.com/PaulB-H/hatchways_practice/main/frontend/img3.png)
