// Initialize object for storing data, this is an object
var todoItems = {};


// Display current date and time on site using moment.js...
var currentTime = moment();
jQuery("#currentDate").html(currentTime.format("dddd, MMMM Do YYYY"));
jQuery("#currentTime").html(currentTime.format("h:mm A"));

// Establish first timeslot of the day
var timeSlot = moment().set("hour", 8);


// Iterate through 1st column and set up time slots from 8am to 5pm...structure HTML
jQuery(".timeSlot").each(function(){
    
    jQuery(this).children(".timeBlock").html(timeSlot.format("h A"));
    jQuery(this).attr('id', "hour" + timeSlot.format("h"));
    
    //set class for row based on slot hour, this adds color
    if (timeSlot.hours() < currentTime.hours() ){
        jQuery(this).addClass("past");
    } else
    if (timeSlot.hours() > currentTime.hours() ){
        jQuery(this).addClass("future");
    }
    else {
        jQuery(this).addClass("present");
    }

    // increment timeslot...
    timeSlot = moment(timeSlot).add(1, 'hours');

});


// Load and parse local storage...
var loadItems = function() {
    
    // Error handling if nothing is there...
    var fromStorage = JSON.parse(localStorage.getItem("todoItems"));
    if(fromStorage){
        todoItems = fromStorage;

        for (const timeSlot in todoItems){
            jQuery("#" + timeSlot).find("textarea").html(todoItems[timeSlot]);
        } 
    }
};


// First time loading the local storage, execute the function...
loadItems();


// Store object to local storage as a string...seperate function as this may be needed later
var saveTodoItems = function() {
    // stringify converts the contents of object into a string...
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
};


// Generic listener for all buttons...utlizes parent ID to indentify timeslot and store text
jQuery(".timeSlot button").on("click", function(){
    
    // temporary varialbes, one for the text, one for the timeslot
    var todo = jQuery(this).parents(".timeSlot").find("textarea").val();
    var timeSlot = jQuery(this).parents(".timeSlot").attr('id');
    
    // save item into working memory object
    todoItems[timeSlot]=todo;
    
    // execute function to put object in local storage
    saveTodoItems();
});