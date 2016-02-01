function calendarMatch() {
   var hwCal = CalendarApp.getCalendarsByName("Homework")[0];
   var doCal = CalendarApp.getCalendarsByName("Do")[0];
   
   var now = new Date();
   var aWeekFromNow = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000));
   var events = CalendarApp.getDefaultCalendar().getEvents(now, aWeekFromNow);
   
   Logger.log('Number of events: ' + events.length)
   for each(var event in events){
     if(event.getTitle().substring(0,3) == 'hw '){
       Logger.log("Found " + event.getTitle().substring(3));
       hwCal.createEvent(event.getTitle().substring(3), event.getStartTime(), event.getEndTime(), {location: event.getLocation(), description: event.getDescription()});
       event.deleteEvent();
     }else if(event.getTitle().substring(0,5) == 'task '){
       Logger.log("Found " + event.getTitle().substring(5));
       hwCal.createEvent(event.getTitle().substring(5), event.getStartTime(), event.getEndTime(), {location: event.getLocation(), description: event.getDescription()});
       event.deleteEvent();
     }
   }
}
