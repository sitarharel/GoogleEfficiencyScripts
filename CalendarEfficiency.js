function calendarMatch() {
   var hwCal = CalendarApp.getCalendarsByName("Homework")[0];
   var doCal = CalendarApp.getCalendarsByName("Do")[0];
   var evCal = CalendarApp.getCalendarsByName("Events")[0];
   
   var now = new Date();
   var aWeekFromNow = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000));
   var events = CalendarApp.getDefaultCalendar().getEvents(now, aWeekFromNow);
   
   Logger.log('Number of events: ' + events.length)
   for each(var event in events){
        sortCal(event, "hw ", hwCal, true);
        sortCal(event, "task ", doCal, true);
        sortCal(event, "event ", evCal, true);    
//        sortCal(event, "hw", hwCal, false);
   }
}

function sortCal(event, keyword, targetCal, removeWord){
  var l = keyword.length;
  if(!removeWord && event.getTitle().indexOf(keyword) > 0 || event.getTitle().substring(0, l) == keyword){
       Logger.log("Found " + event.getTitle());
       targetCal.createEvent(removeWord ? event.getTitle().substring(l) : event.getTitle(), event.getStartTime(), event.getEndTime(), {location: event.getLocation(), description: event.getDescription()});
       event.deleteEvent();
   }
}

