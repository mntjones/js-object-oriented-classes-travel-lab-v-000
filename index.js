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
    
    // gives index locations in array for beginning and end points
    const Xstart = eastWest.indexOf(this.beginningLocation.horizontal);
    const Xend = eastWest.indexOf(this.endingLocation.horizontal);
    
    const Yblocks = this.endingLocation.vertical - this.beginningLocation.vertical;
    
    return (Math.abs(Xend-Xstart)) + (Math.abs(Yblocks));
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