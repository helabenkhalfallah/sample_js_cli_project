import React, { Component } from "react";

class AppHome extends Component {
  componentWillMount() {}

  componentDidMount() {}

  sonarTest() {
    var Car = function(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.engineState = "stopped";
      this.messageToDriver = "";
    };

    let aCar = new Car("Volks Wogen", "Polo 6", "2017");
    //console.log('aCar : ', aCar);

    //prepare array
    var myArray = ["a", "b", "c", "d", "e", "f", "h"];
    //console.log("item to delete : ",myArray[2]);

    // removes 1 element from index 2
    delete myArray[2];
    var removed = myArray.splice(2, 1);
    //console.log("deleted item : ", removed);
    var x = 2;
    var y = 5;
    if (x == 2 || y == 5) {
      console.log("sum is : ", x + y);
    }
  }

  render() {
    this.sonarTest();
    return <div>AppHome</div>;
  }
}

export default AppHome;
