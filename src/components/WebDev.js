import React from "react";
import { Col, Row, Container } from "../components/Grid";
import holiday_wish_list1 from "../images/holiday_wish_list1.png";
import wta_seoul1 from "../images/wta_seoul1.png";
import quiz from "../images/quiz.png";
import scheduler from "../images/scheduler.png";
import weather from "../images/weather.png";
import add1 from "../images/add1.png";
import "../styles/WebDev.css";

function WebDev() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
          <h1>Web Developer</h1>
          <hr></hr>
        </Col>
      </Row>

      <Row>
        <Col size="md-3"></Col>
        <Col size="md-3">
          <img src={holiday_wish_list1} alt="holiday wish list sign up form"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <strong>Project Title: </strong>Holiday Wish List<br></br>
            <strong>Application Link:</strong> <a href="https://project-two-gwu.herokuapp.com/">Holiday Wish List Link</a>
            <br></br>
            <strong>GitHub Repository:</strong> <a href="https://github.com/ed-sivick/project_two">GitHub Link</a>
            <br></br>
            <strong>Project Description:</strong><br></br>
            Holiday gift giving can be stressful for many who are unfamiliar with the gift preferences of
            friends and/or family. The ‘Holiday Wish List’ is an app that enables each participant to
            add gifts to their list, and view or select gifts to give from the lists of other participants.<br></br>
            The app will initially take the user to a <strong>Sign Up Form</strong> where they can join a group
            of participants or proceed to a <strong>Login Form</strong> if they are already a member. After
            successful entry, they can retrieve and add to their personal wish list, view the wish lists created
            by other participants, and select wish list items to purchase from other participants. When an item
            is selected from the list of another participant, the item is removed from that participant’s list.
            However, the updated list showing the removal of the item is not visible to the creator of the list.<br></br>
            The app is created using Node and Express web server. The wish lists are created/modified using
            MySQL database with a Sequelize ORM. The HTML layouts utilize Handlebars templates to display the
            data which is added and retrieved using Express GET and POST route methods.
            </p>
        </Col>

        <Col size="md-3">
          <img src={wta_seoul1} alt="city and country information including weather forecast for Seoul, South Korea"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <strong>Project Title: </strong>Worldwide Travel Assistant<br></br>
            <strong>Application Link:</strong> <a href="https://ed-sivick.github.io/world-wide-travel-assistant/index.html">Worldwide Travel Assistant Link</a>
            <br></br>
            <strong>GitHub Repository:</strong> <a href="https://github.com/ed-sivick/world-wide-travel-assistant">GitHub Link</a>
            <br></br>
            <strong>Project Description:</strong><br></br>
          Business and leisure travel to many states or countries can be difficult if you are not equipped
          with the proper attire, or knowledge of specific holidays in that area. The ability to view this
          information before visiting the region can save the traveler time and effort through pre-planning.
          The travel input criteria including: visiting city, start travel date, and end travel date will
          initialize a server-side API from <a href="https://calendarific.com/">Calendarific</a>, providing
          them with holiday information as well as useful facts about their destination. Information
          pertaining to the destination country is supplied to the app by means of an API from
          <a href="https://restcountries.eu/#rest-countries">Rest Countries</a>. The traveler can also
          utilize the weather information for that destination, and select the proper clothing or make
          appropriate plans to adjust for it. The input data is used to initiate another server-side API from
          <a href="https://openweathermap.org/">OpenWeather</a> to provide the weather information. The date
          information is displayed using <a href="https://momentjs.com/">Moment.js</a>.
          </p>
        </Col>
      </Row>

      <Row>
        <Col size="md-3"></Col>
        <Col size="md-3">
          <hr class="divider"></hr>
          <img src={quiz} alt="image of javascript quiz"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <strong>Project Title: </strong>Timed Code Quiz<br></br>
            <strong>Application Link:</strong> <a href="https://ed-sivick.github.io/4-timed_code_quiz/">Timed Code Quiz Link</a>
            <br></br>
            <strong>GitHub Repository:</strong> <a href="https://github.com/ed-sivick/4-timed_code_quiz">GitHub Link</a>
            <br></br>
            <strong>Project Description:</strong><br></br>
            This is an application that introduces a timed code quiz with multiple-choice questions. The app
            will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. It
            also features a clean and polished user interface and is responsive, ensuring that it adapts to
            multiple screen sizes. When the user clicks a start button, a timer will start and the user is
            presented with a question. When the question is answered, another question is presented. If the
            question is answered incorrectly, additional time is subtracted from the timer. The game is over
            when all questions are answered or the timer reaches 0. The user can then save their initials and
            quiz score.
            </p>
        </Col>

        <Col size="md-3">
          <hr class="divider"></hr>
          <img src={scheduler} alt="image of work day schedule"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <strong>Project Title: </strong>Work Day Scheduler<br></br>
            <strong>Application Link:</strong> <a href="https://ed-sivick.github.io/5-Work_Day_Scheduler/">Work Day Scheduler Link</a>
            <br></br>
            <strong>GitHub Repository:</strong> <a href="https://github.com/ed-sivick/5-Work_Day_Scheduler">GitHub Link</a>
            <br></br>
            <strong>Project Description:</strong><br></br>
            This is an application that creates a daily planner to manage time effectively by posting hourly
            events and/or tasks into assigned timeblocks. The current day is displayed at the top of the
            calendar. Timeblocks in the form of rows are assigned for standard business hours (9AM to 5PM).
            When viewing timeblocks for the current day, each block is color coded to indicate whether that
            specific block is in the past, present, or future. When the user clicks on a timeblock, they are
            able to enter an event or task associated with that time period. They can save the information by
            pressing the corresponding save button for that timeblock. The information is then saved into
            local storage.
          </p>
        </Col>
      </Row>

      <Row>
        <Col size="md-3"></Col>
        <Col size="md-3">
          <hr class="divider"></hr>
          <img src={weather} alt="image of weather dashboard showing current and five day forecast for weather in Miami, Florida"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <strong>Project Title: </strong>Weather Dashboard<br></br>
            <strong>Application Link:</strong> <a
              href="https://ed-sivick.github.io/6-weather_dashboard/">Weather Dashboard Link</a>
            <br></br>
            <strong>GitHub Repository:</strong> <a
              href="https://github.com/ed-sivick/6-weather_dashboard">GitHub Link</a>
            <br></br>
            <strong>Project Description:</strong><br></br>
            This is an application that creates a weather dashboard using weather data from
            <a href="https://openweathermap.org/">OpenWeather</a> to view current and future
            weather for a city. The user is able to input a city and view its relative weather data.
            The city name, date, and weather icon representing the weather on the current date will appear.
            The temperature, humidity, wind speed, and UV index will also appear below the city name and
            date. The UV index will be color coded to identify the severity: favorable (green),
            moderate (yellow), or severe (orange-red-violet). The future weather will be displayed as a
            5-day forecast displaying the date; a weather icon representing the weather on that date;
            the temperature, and the humidity. The user will be able to click on a city stored in the search
            history, and again view its current and future weather. When re-opening the app, it will display
            the current and future weather for the last city that was searched. If there were no cities
            searched, it will display the weather for New York, New York.
            </p>
            <br></br><br></br>
        </Col>

        <Col size="md-3">
          <hr class="divider"></hr>
          <img src={add1} alt="image of burger logger app showing Add a new Burger card, Burgers To Eat card, and Burgers Eaten card"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <strong>Project Title: </strong>Eat-Da-Burger!<br></br>
            <strong>Application Link:</strong> <a
              href="https://arcane-inlet-67971.herokuapp.com/">Eat-Da-Burger! Link</a>
            <br></br>
            <strong>GitHub Repository:</strong> <a href="https://github.com/ed-sivick/13-burger">GitHub Link</a>
            <br></br>
            <strong>Project Description:</strong><br></br>
            Eat-Da-Burger! is a restaurant app that is created using MySQL, Node, Express, and Handlebars.
            It allows users to input the names of burgers they would like to eat. Whenever a user submits a
            burger's name, the app will display the burger on the left side of the page, waiting to be
            devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks
            it, the burger will move to the right side of the page. The app stores every burger in a
            database (burgers_db), whether devoured or not.
          </p>
          <br></br><br></br>
        </Col>
      </Row>

      <Col size="md-3"></Col>

    </Container >
  );
}

export default WebDev;