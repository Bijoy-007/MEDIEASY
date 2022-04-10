- [Contexts](#contexts)

  - [The Problem It Solves](#the-problem-it-solves)
  - [Challenges we ran into](#challenges-we-ran-into)
  - [Live Demo](#live-demo)
  - [Hosting Platforms](#hosting-platforms)
  - [Images](#images)
  - [Repo Links](#repo-links)
  - [Environments Setup](#environments-setup)
  - [Start Server](#start-server)
  - [Start ADMIN Web Application](#start-admin-web-application)
  - [Start MEDIEASY Web Application](#start-medieasy-web-application)
  - [Huge Shoutout to](#huge-shoutout-to)
  - [Tech Stack](#tech-stack)
  - [Used Location API](#used-location-api)
  - [Why not GOOGLE MAPS API ?](#why-not-google-maps-api)
  - [Next Steps](#next-steps)
  - [Contributers](#contributers)
  - [Feel Free to Contribute](#feel-free-to-contribute)

## MEDIEASY

---

MEDIEASY is a Fully Optimized and Responsive web App that lets you find out nearby hospitals around your location, distance and necessary information at the time of your emergency.

---

## The Problem It Solves

It's 2022 already but to this date, many people die just because of late treatment. In the previous 2 years we've gone through the worst phrases ever. We've seen people running from place to place to arrange medical supplies, beds, and oxygens for their loved ones. But it's very hard to see that in this digital age we do not have platforms that can help in these situations.

This problem motivated us to develop something using our tech weapons to help us and others. Our project is MEDIEASY which is a healthcare platform. Which provides real-time data about hospitals. This data can be really handy in emergency cases. There are 2 main options
Search for a particular hospital
Search for nearby hospitals

After searching for a hospital all the details regarding that hospital will be displayed. NAME, ADDRESS, BED TYPES AND AVAILABILITY ,AVAILABILITY OF BLOODS, VACCINES, AMBULANCE, EMERGENCY and HELPLINE NUMBER, PHONE NUMBER DISTANCE

There are two separate applications MEDIEASY and MEDIEASY-ADMIN

MEDIEASY : This is the general application for all users to search for hospitals and access their details

MEDIEASY-ADMIN : This is for the hospital officials only. From this portal they can update corresponding hospital details which will reflect on the web app.

Example Scenario :
Let us consider Patient P who lives in a small town. He has a heart attack. There are two hospitals one in the north (Hospital A) and one in the south (Hospital B) from his house and it'll take 20 mins to reach anyone. His friends decide to go to hospital A but this hospital has already exceeded its emergency capacity. They run towards hospital B now (20 mins gone already) now it'll take 40 mins more to reach hospital B so overall it'll take 60 mins to get medical support. So if they have used our app then they'll get to know that Hospital a will not take any other emergency case so they would go to hospital B. So using our application will save precious time which is one of the most important factors for healthcare

## Challenges we ran into

- Unable to use Google Maps API Key due to credit Card
- Lack of Responsive Frameworks
- Low Location API Hit Credits (Caused Delay in Testing)
-

## Live Demo

- [MEDIEASY Web Application](https://medieasy.netlify.app/)
- [MEDIEASY Admin Web Application(For Hospital Officials)](https://medieasy-hospital.netlify.app/)
- [MEDIEASY API Services](https://medieasy-backend-apis.herokuapp.com/api/v1)

## Images

## MEDIEASY Web Application

<!-- ![image (4)](https://user-images.githubusercontent.com/71816694/162626802-e55b5ae1-a7cd-421a-a23f-615b8b88e757.png) -->
![WhatsApp Image 2022-04-10 at 9 26 49 PM (1)](https://user-images.githubusercontent.com/71816694/162628518-18fbe125-e90f-4f04-ac23-3ab80a77ec71.png)
![WhatsApp Image 2022-04-10 at 9 26 49 PM (2)](https://user-images.githubusercontent.com/71816694/162628521-b416bae3-ebbd-4df3-b3c8-036a2ff30797.png)
![WhatsApp Image 2022-04-10 at 9 26 49 PM](https://user-images.githubusercontent.com/71816694/162628523-9d42d123-9385-431a-b7a8-4c87b9b40fd6.png)


## MEDIEASY Admin Web Application(For Hospital Officials)

![image (5)](https://user-images.githubusercontent.com/71816694/162626717-e32effb8-f123-42e5-a0b8-3f29c7104c14.png)

![image (6)](https://user-images.githubusercontent.com/71816694/162626920-e772acc3-7945-4f3c-bc80-4e2ea798eed7.png)

## Video Demo

## Pictures

## Hosting Platforms

- [Heroku (For API)](http://www.heroku.com/)
- [Netlify](https://www.netlify.com/)

## Repo Links

- [MEDIEASY WEB APPLICATION](https://github.com/Bijoy-007/MEDIEASY/tree/dev)
- [MEDIEASY ADMIN WEB APPLICATION](https://github.com/Bijoy-007/MEDIEASY_ADMIN/tree/dev)
- [Server](https://github.com/Prodip-Kumar-Paul/MEDIEASY-BACKEND/tree/dev)

## Environments Setup

```bash
// .env for Local API Server

# DEV CRED
DEV_PORT=xxxxxxxxxxxxxxxxxxx
DEV_DB_NAME=xxxxxxxxxxxxxxxx
DEV_DB_URL=xxxxxxxxxxxxxxxxxx
DEV_DB_PASSWORD=xxxxxxxxxxxxxx
DEV_EMAIL=xxxxxxxxxxxxxxxxxxxx
DEV_PASSWORD=xxxxxxxxxxxxxxxx
DEV_LOCALIQ_API_KEY=xxxxxxxxx (API key for Location API Service)
DEV_JWT_ACTIVATE=xxxxxxxxxxxxxx

```

```bash
// .env for LOCAL ADMIN WEB APPLICATION

REACT_APP_BASE_URL=xxxxxxxxxxxxxxxxxxxx

```

## Start Server

```bash
git clone https://github.com/Prodip-Kumar-Paul/MEDIEASY-BACKEND.git
cd MEDIEASY-BACKEND
npm install
npm run strat:dev
```

## Start ADMIN Web Application

```bash
git clone https://github.com/Bijoy-007/MEDIEASY_ADMIN.git
cd MEDIEASY_ADMIN
npm install
npm start
```

## Start MEDIEASY Web Application

```bash
git clone https://github.com/Bijoy-007/MEDIEASY.git
cd MEDIEASY
npm install
npm start
```

## Huge Shoutout to

[nodemon](https://www.npmjs.com/package//nodemon)
[axios](https://www.npmjs.com/package/axios)
[bcryptjs](https://www.npmjs.com/package/bcryptjs)
[compression](https://www.npmjs.com/package/compression)
[cors](https://www.npmjs.com/package/cors)
[dotenv](https://www.npmjs.com/package/dotenv)
[express](https://www.npmjs.com/package/express)
[express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
[express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
[express-validator](https://www.npmjs.com/package/express-validator)
[helmet](https://www.npmjs.com/package/helmet)
[hpp](https://www.npmjs.com/package/hpp)
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
[mongoose](https://www.npmjs.com/package/mongoose)
[morgan](https://www.npmjs.com/package/morgan)
[nanoid](https://www.npmjs.com/package/nanoid)
[nodemailer](https://www.npmjs.com/package/nodemailer)
[xss-clean](https://www.npmjs.com/package/xss-clean)
[antd](https://www.npmjs.com/package/antd)
[react](https://www.npmjs.com/package/react)
[react-otp-input](https://www.npmjs.com/package/react-otp-input)
[react-redux](https://www.npmjs.com/package/react-redux)
[react-router-dom](https://www.npmjs.com/package/react-router-dom)
[react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
[react-bootstrap-typeahead](https://www.npmjs.com/package/react-bootstrap-typeahead)
[react-icons](https://www.npmjs.com/package/react-icons)

## Tech Stack

**Client:** React, Redux, antd, React-Bootstrap

**Server:** Node, Express

**DataBase** MongoDB

## Used Location API

- [LocationIQ](https://locationiq.com)
- [LocationIQ DOCS](https://locationiq.com/docs)

## Why not GOOGLE MAPS API ?

Google Maps Api key required Free Billing Account to use, which required Credit Card. As we can't afford credit card we can't use it. We could add more functionality and accuracy in this project by using Google Maps Api

## Next Steps

- Availability of Hospital Doctors
- Live Location Tracking
- User Can filter Hospitals by Diseases
- Live video call with Doctors
- SOS for Quick Response

## Contributers

- [Aritra Sen](https://github.com/aritrasen12345)
- [Bijoy Das](https://github.com/Bijoy-007)
- [Prodip Kumar Paul](https://github.com/Prodip-Kumar-Paul)
- [Aditya Bhagat](https://github.com/adityabhagat007)

## Feel Free to Contribute
