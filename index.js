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


class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
    const Xdirection = 
    
    
  }
  
  estimatedTime(peak=false) {

    if (peak === true) {
      return (this.blocksTravelled()/2)
    }
    else {
      return (this.blocksTravelled()/3);
    }
  }
}