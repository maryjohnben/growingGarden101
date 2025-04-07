view the app: https://growinggarden101-front.onrender.com/ (some issues with backend deployment, will fix soon)
## The Application uses AI to give personalized plant care instructions based on the current location and weather of the user.
![Screenshot (430)](https://github.com/user-attachments/assets/8c65ef0f-0f1b-4761-b861-74e9a1df2007)
**Final Project Documentation**

**1. End-User documentation**

Introduction

GrowGarden101 is a personal gardening assistant. This app helps you to
grow a healthy garden that is customized to your location. The app can
provide you with real time weather data and other care suggestions based
on plant preferences and location.

Installation (before deployment, refer to the end of documentation to
get more information on installation and environment variables)

- **Clone** the repository into the local system:

> *git clone https://github.com/maryjohnben/growingGarden101.git*

- **Navigate** to the newly cloned repository:

> *cd growingGarden101*

- **Install** dependencies:

Backend (assuming Python is already installed locally):

> *cd garden-backend*

*pip install -r requirements.txt*

Frontend (assuming node v22 or above is already installed locally):

*cd garden-frontend*

*npm install*

- **Build** Project:

Backend:

*python server.py*

Frontend:

*npm run dev*

Features

- **Search Plants:** Ability to find details about various garden plants
  > including scientific names, watering needs, shade requirements, and
  > other tips.

- **Personalized Recommendations:** Based on location and weather the
  > ideal AI-assisted recommendations are provided.

- **Plant Recommendation**: Based on location and general weather
  > conditions a list of ideal plants to grow in the region can be
  > viewed.

- **Watering and Fertilizer Recommendation:** Based on weather and
  > location AI-assisted watering and fertilizer schedule is provided.

Other Menu options:

- **Easy Plants -** Listing of the top 10 easiest plants to grow.

- **Fun Facts -** A list of Fun Facts about Gardening detailing trivia
  > about gardening and plants.

- **About -** Info about the app.

Operation:

1)  Enter a search query.![](media/image4.png){width="6.4375in"
    > height="3.0416666666666665in"}

2)  Search results with option for AI enhancement

![](media/image2.png){width="6.5in" height="3.0416666666666665in"}

Troubleshooting

- **No plant Found:** Make sure there is an active internet connection.

- **Location Issues:** Make sure location services are enabled and
  > appropriate permissions are provided.

- **Weather Updates:** There should be an active stable internet to make
  > sure accurate date data is provided.

Support

For any issues regarding the app, please contact our support team at:

<benjaminm2996@uhcl.edu>, or <walkerf4475@uhcl.edu>, or
e1996taylor@gmail.com

Enjoy Gardening!

**2. Technical Documentation**

**[Introduction]{.underline}  
**Growing Garden 101 is a utility program to assist in growing and
successfully curating plants and flowers. A database will hold key
details for each plant that will be used to set watering and lighting
schedules based on geographical and climate input.

Third-party APIs will be utilized for geolocation and weather queries.
User will set their location (manually or automatically), optional
weather info, and type of plants after which the app will inform the
user the recommended watering schedule and other associated information
via the UI.

**  
[System Requirements]{.underline}**

Minimum system requirements: Windows OS (7 or higher). 1GHz CPU
requirements. 16GB Ram

Web Browser (any type)

**  
[Architecture Overview]{.underline}**

Backend

- Growing Garden 101 backend will be coded in Python.

  - Flask-based REST API

  - Uses Flask-CORS for cross-origin requests

  - Interacts with MongoDB for plant data

Frontend

- Growing Garden 101 frontend will be built using React.

  - Material UI will be used for additional styling.

  - Uses React Router for navigation

  - Communicated with the backend through RESTful API calls.

Database

- Plant data is stored in a database which is to be MongoDB.

- The database will store (at a minimum):

1.  Plant name

2.  Watering info

3.  Time of year to plant

4.  Soil content

5.  Scientific name**  
    > **

Inputs will be user-selected plants, location-based basic weather, and
user geographical data.

The output should be displayed as a text to state if watering of
plant(s) is needed (Yes/No and time) or if fertilizer is needed (yes/no
boolean), and other pertinent data.

Current state of soil nutrient

**  
**![](media/image1.png){width="6.5in" height="4.861111111111111in"}

**Figure 1. Block diagram of application**

**  
  
**![](media/image10.png){width="6.5in" height="4.791666666666667in"}**  
**

**Figure 2. Flow diagram of Growing Garden application**

**[API Documentation]{.underline}  
**

Trefle API -- Fetches plant details like scientific name, shade
requirements, images, etc.

Google Gemini API - Geolocation data.

OpenWeather API - Local weather data.

*Weather & Location Data*:

Weather Forecast API ( https://openweathermap.org/api) -- Provides
real-time weather conditions to help optimize plant care.

Location API (Geocoding API or similar) -- Converts user input (e.g.,
city or zip code) into coordinates for better regional plant
suggestions.

*AI & Optimization*:

Gemini API -- Used to generate gardening tips, insights, and AI-powered
recommendations. Also, used to retrieve data when the database does not
have the requested plant.

**  
[Code Documentation]{.underline}:**

Application will have in-line comments and explanations within the
source code, as well as any standalone documents that describe the code
structure and logic.

**  
  
[Testing and Validation]{.underline}  
  
**Testing will increase in complexity with each Sprint and tailored to
its planned functionality.

Early testing will exercise API and core database functionality. Before
advanced features can be implemented it is crucial that any issues with
accessing database records and third party API calls are fleshed out.

Later testing will look into maturing the UI, checking for accuracy, and
error handling. Normal and abnormal use cases will be developed.

When appropriate, automated test scripts may be utilized for unit
testing and more complicated test cases.

Test cases to include:

- Geolocation API queries

- Multiple API utilization

- Back end/front end compatibility tests

- Data manipulation

- Database functionality

- Output checking

- UI tests

- User Story verification

- Error checking / exception handling

For validation, tests will be geared to determine not only that the
output is as expected, but that functionality of the program provides a
valid user experience. Output and UI must not also be accurate, but
provide value to the end user. How data is presented and how useful that
data is must be considered.

**  
  
[Glossary]{.underline}**

AI - Artificial Intelligence

API - Application Program Interface

CPU - Central Processor Unit

GB - Gigabytes

GHz - Gigahertz

OS - Operating system

UI - User Interface

**3. Updated user stories**

**User Stories**

- As a gardener, I want to choose a sunny location for my vegetable
  > garden, So that my plants receive 6-8 hours of direct sunlight daily
  > and can grow healthy and strong.

  - Acceptance Criteria: Verify daylight information is given based on
    > geolocation.

- As a gardener, I want to establish an effective watering routine, So
  > that my plants stay hydrated and healthy.

  - Acceptance Criteria: Verify watering cycle information is presented

- As a gardener, I want to ensure my vegetables get enough light, so
  > that they can grow properly.

  - Acceptance Criteria: Verify Verify daylight information is given
    > based on geolocation and plant type.

- As a gardener, I want information presented to me to help protect my
  > plants from extreme weather, so that they stay healthy and
  > productive.

  - Acceptance Criteria: Verify weather data is presented for decision
    > making.

- As a gardener, I want to prepare fertile, well-drained soil, So that
  > my plants have the nutrients they need to thrive.

  - Acceptance Criteria: Verify soil information is displayed.

- As a gardener, I want to grow a variety of vegetables to enjoy a
  > diverse and bountiful harvest.

  - Acceptance Criteria: Verify program has detailed information for a
    > variety of plants.

- As a gardener, I want to fertilize my vegetable garden properly, So
  > that my plants receive the necessary nutrients for optimal growth.

  - Acceptance Criteria: Verify fertilization information is displayed
    > to the user.

- As a first-time gardener, I want information to know how to grow
  > vegetables so that the chance of the garden failing the first time
  > can be lowered.

  - Acceptance Criteria: Verify information is complete and displayed in
    > plain english.

- As a plant fanatic (scientist / Botanist), I want to search for plants
  > by scientific name, so that I can make sure the right kind of plant
  > is displayed.

  - Acceptance Criteria: Verify search criteria and results include both
    > common and scientific plant names.

- As a consumer of food, I want to enjoy fruits and vegetables that are
  > full of flavor, so that all my efforts at growing are rewarded.

  - Acceptance Criteria: Verify that growing data presented to the user
    > facilitates the curation of healthy plants.

- As a first-time gardener, I want to know when is the best time of the
  > year to plant my vegetables to have a plentiful harvest.

  - Acceptance Criteria: Verify that growing data includes information
    > for meat times/dates for growing and planting desired vegetables.

- As a home chef, I want to know the best type of soil to grow my
  > produce in for my kitchen.

  - Acceptance Criteria: Verify growing data includes soil information
    > for best results.

- As a user, I want to be able to search for detailed information about
  > growing the plant of my choosing.

  - Acceptance Criteria: Verify search function properly returns
    > detailed information based on the users specific search query.

**4. Sprints backlogs, product backlogs, burndown charts, burnup charts,
and working agreements.**

![](media/image5.png){width="6.5in" height="3.861111111111111in"}

![](media/image8.png){width="3.5729166666666665in"
height="3.0416666666666665in"}

![](media/image7.png){width="6.5in" height="2.9722222222222223in"}

**Burnup Chart**

![](media/image6.png){width="6.5in" height="4.875in"}

![](media/image3.png){width="6.5in" height="3.138888888888889in"}

**Burn Down Chart**

![](media/image9.png){width="6.5in" height="2.1666666666666665in"}

**Working Agreement**

Project Title: Growing Garden 101

Team Members:

- Mary Benjamin

- Eli Taylor

- Fitz Walker

Project Goals:

- Develop a full stack website capable of assisting amateur and
  > professional gardeners to grow home gardens depending on the weather
  > and time of the day.

Communication Plan:

- Meeting Schedule: Thursdays at 6 pm CST

- Preferred Communication: Whatsapp Group Chat

- Response Time: Preferably within 24 hours unless notified earlier

Decision Making:

- All team members must agree on major changes to the project.

Project Progress:

- Each team member is responsible for the assigned task. If any help is
  > needed, approach the team so that ideas can be brainstormed and
  > issues can be resolved promptly.

- The Project will be shared using Github and team members will need to
  > periodically initiate pull and push requests to make sure errors are
  > resolved timely.

- The team agreed on Python for the backend, JavaScript for the front
  > end, and MongoDB for the database.

- The tools can be tweaked as needed as the project progresses if all
  > team members agree.

**5. The code/executable code/Application**

Source Code Link:  
[[https://github.com/maryjohnben/growingGarden101.git]{.underline}](https://github.com/maryjohnben/growingGarden101.git)

Follow these steps to successfully clone the project

Clone the Repository:

*git clone
[[https://github.com/maryjohnben/growingGarden101.git]{.underline}](https://github.com/maryjohnben/growingGarden101.git)*

Navigate to the Repository Directory:

Ensure growingGarden101 is the main folder with 2 subfolders
garden-backend and garden-frontend so that project works smoothly.

Once in main folder change to garden-backend:

*cd garden-backend*

Once in garden-backend run:

*pip install -r requirements*

*python server.py* (ensure python is already installed)

This should start the server, then cd back to garden-frontend:

*cd garden-frontend*

Once in garden-frontend run:

*npm install* (Make sure node v22 or above is installed already)

Then start frontend:

*npm run dev*

This should start React Vite and the website can be displayed in any
browser.

Environment Variables are required to execute the source code.
