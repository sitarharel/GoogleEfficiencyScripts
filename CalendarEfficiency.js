function calendarMatch() {
   var hwCal = CalendarApp.getCalendarsByName("Homework")[0];
   var doCal = CalendarApp.getCalendarsByName("Do")[0];
   
   var now = new Date();
   var aWeekFromNow = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000));
   var events = CalendarApp.getDefaultCalendar().getEvents(now, aWeekFromNow);
   
   Logger.log('Number of events: ' + events.length)
   for each(var event in events){
        sortCal(event, "hw ", hwCal);
        sortCal(event, "task ", doCal);  
   }
}

function sortCal(event, keyword, targetCal){
  var l = keyword.length;
  if(event.getTitle().substring(0, l) == keyword){
       Logger.log("Found " + event.getTitle().substring(l));
       targetCal.createEvent(event.getTitle().substring(l), event.getStartTime(), event.getEndTime(), {location: event.getLocation(), description: event.getDescription()});
       event.deleteEvent();
     }
}
