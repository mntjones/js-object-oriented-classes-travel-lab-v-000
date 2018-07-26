class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = startDate;
  }
  
  startDate() {
    this.startDate = new Date(startDate);
    return this.startDate
  }
  
  yearsExperienceFromBeginningOf (year) {
    return (new Date(year)) - (yearDate.prototype.getFullYear(yearstartDate()))
  }
}