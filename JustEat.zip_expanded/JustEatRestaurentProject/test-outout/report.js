$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Janak/eclipse-workspace/JustEat-master.zip_expanded/JustEat-master/src/test/java/feature/searchRes.feature");
formatter.feature({
  "line": 1,
  "name": "Use the website to find restaurants for hungry customer in my area",
  "description": "",
  "id": "use-the-website-to-find-restaurants-for-hungry-customer-in-my-area",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "search for restaurants in area",
  "description": "",
  "id": "use-the-website-to-find-restaurants-for-hungry-customer-in-my-area;search-for-restaurants-in-area",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I want food in \"AR51 1AA\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for restaurants",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see some restaurants in \"AR51 1AA\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchResDefination.I_want_food_in_AR511AA()"
});
formatter.result({
  "duration": 13661916600,
  "status": "passed"
});
formatter.match({
  "location": "SearchResDefination.I_search_for_restaurants()"
});
formatter.result({
  "duration": 4547268000,
  "status": "passed"
});
formatter.match({
  "location": "SearchResDefination.I_should_see_some_restaurants_in_AR511AA()"
});
formatter.result({
  "duration": 174130500,
  "status": "passed"
});
formatter.match({
  "location": "SearchResDefination.close_the_browser()"
});
formatter.result({
  "duration": 1021907900,
  "status": "passed"
});
});