# Work Day Scheduler Starter Code

This is the assignment for the 5th module of the Berkeley Coding Bootcamp, 2020
Submitted by Justin Hanson

This code base is a day task scheduler that utilizes dynamic HTML, bootstrap, jQuery, Moment.js
One of the key challenges/objectives of this assignment was to get comfortable using third party libraries

This project allows users to input tasks for 1 hour timeblocks throughout the day and the color scheme is updated based on the time of day:
If the current time is later that the timeslot it will show up in grey; if the current time is before a timeslot the it shows up in green;
otherwise it shows up in red representing the current time slot

Another key feature of this assignment was to utilize local storage.  This was accomplished by using the JSON Stringify tool/code which may have been a bit
beyond the scope of this assignment.  JSON Stringify can convert an array or object into a string.  THis allows the coder to store just 1 variable that is a string
then "un-Stringify" it later as needed.  JSON appears to easily convert back and forth without any loss of data integrity.

Acceptance Criteria for Reference:
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
