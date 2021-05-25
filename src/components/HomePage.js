import React, { Component } from "react";
import  CheckBox  from './CheckBox';
import axios from "axios";
import './HomePage.css';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      fName: "mai",
      lName: "",
      email: "",
      frequency: "",
      visibility: "invisible",
      checkAll: true,
      message: "",
      selectedOption: "1Week",
      topics: [
        {id: 1, value: "deals", isChecked: true},
        {id: 2, value: "reviews", isChecked: true},
        {id: 3, value: "packages", isChecked: true},
        {id: 4, value: "starships", isChecked: true}
      ],
      destinations: [
        {id: 1, value: "mars", isChecked: true},
        {id: 2, value: "jupiter", isChecked: true},
        {id: 3, value: "moon", isChecked: true},
        {id: 4, value: "pluto", isChecked: true},
        {id: 5, value: "thesun", isChecked: true},
        {id: 6, value: "venus", isChecked: true},
        {id: 7, value: "mercury", isChecked: true},
        {id: 8, value: "saturn", isChecked: true},
        {id: 9, value: "uranus", isChecked: true},
        {id: 10, value: "neptune", isChecked: true},
        {id: 11, value: "nearest_blackHole", isChecked: true},
        {id: 12, value: "endlessVoid", isChecked: true}
      ],
      input: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  handleChange(e, stateName) {

    //this.setState({user: {[stateName]: e.target.value}});
    this.setState({[stateName]: e.target.value});
    this.setState({visibility: "visible"});

    if(e.target.name){
      let input = this.state.input;
      input[e.target.name] = e.target.value;
      this.setState({
        input
      });
    }

  }
  handleSubmit(event){
    event.preventDefault();
    if(this.validate()){
      this.postRequest();
    }
  }
  postRequest() {
    console.log("Deals option selected",this.state.topics[0].isChecked);
    axios({
      method: 'post',
      url: 'https://spacey-server.herokuapp.com/subscribers',
      data: {
        first_name: this.state.fName,
        last_name: this.state.lName,
        email: this.state.email,
        deals: this.state.topics[0].isChecked,
        reviews: this.state.topics[1].isChecked,
        packages: this.state.topics[2].isChecked,
        star_ships:this.state.topics[3].isChecked,
        mars: this.state.destinations[0].isChecked,
        jupiter: this.state.destinations[1].isChecked,
        moon: this.state.destinations[2].isChecked,
        saturn: this.state.destinations[7].isChecked,
        uranus: this.state.destinations[8].isChecked,
        neptune: this.state.destinations[9].isChecked,
        the_nearest_black_hole: this.state.destinations[10].isChecked,
        the_endless_void: this.state.destinations[11].isChecked,
        the_sun:this.state.destinations[4].isChecked,
        venus:this.state.destinations[5].isChecked,
        pluto:this.state.destinations[3].isChecked,
        mercury:this.state.destinations[6].isChecked,
        frequency: this.state.selectedOption
      }
    })
    .then((response) => {
      this.setState({message: "Thank you" + response.data.subscriber.first_name + "for subscribing to our news letter"})
    }, (error) => {
      this.setState({message: "Sorry there is some glitch in the network, please try again"})
    });
  }
  validate(){

      let input = this.state.input;
      let errors = {};
      let isValid = true;

      if (!input["FirstName"]) {
        isValid = false;
        errors["FirstName"] = "Please enter first name.";
      }
      if (!input["LastName"]) {
        isValid = false;
        errors["LastName"] = "Please enter last name.";
      }

      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }

      if (typeof input["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }

      this.setState({
        errors: errors
      });
      return isValid;
  }

  handleAllChecked = (event) => {
    this.setState({checkAll: !this.state.checkAll})
    let topics = this.state.topics;
    let destinations = this.state.destinations;
    topics.forEach(topic => topic.isChecked = event.target.checked)
    destinations.forEach(destination => destination.isChecked = event.target.checked)
    this.setState({topics: topics})
    this.setState({destinations: destinations})
  }
  handleCheckChieldElement = (event) => {

    let topics = this.state.topics
    topics.forEach(topic => {
       if (topic.value === event.target.value)
          topic.isChecked =  event.target.checked
    })
    this.setState({topics: topics})
    let destinations = this.state.destinations
    destinations.forEach(destination => {
       if (destination.value === event.target.value)
          destination.isChecked =  event.target.checked
    })
    this.setState({destinations: destinations})
  }
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }
  render() {
    return (
      <div class="home">
        <h3> Keep up to(star) date on all our offerings. Subscribe now! </h3>
        <div className="subscribeForm">
        <form onSubmit={this.handleSubmit}>
          <div class="inputForm">
            <input

              type="text"
              name="email"
              placeholder="Email"
              className="userName email"
              onChange={(e) => this.handleChange(e, "email")}
            />
            <input
              type="text"
              name="FirstName"
              placeholder="FirstName"
              className="userName"
              onChange={(e) => this.handleChange(e, "fName")}
            />
            <input
              type="text"
              name="LastName"
              placeholder="LastName"
              className="userName"
              onChange={(e) => this.handleChange(e, "lName")}
            />

          </div>
          <h4>*SpaceX will keep your data private; morning, moon and night. That is our privacy policy in nutshell</h4>
          <div className="text-danger">{this.state.errors.FirstName}</div>
          <div className="text-danger">{this.state.errors.LastName}</div>
          <div className="text-danger">{this.state.errors.email}</div>


          <div className={this.state.visibility}>
            <h3>Topics</h3>
            <br />
            <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" checked={this.state.checkAll} /> Check / Uncheck All
              <ul class="list">
              {
                this.state.topics.map((topic) => {
                  return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...topic} />)
                })
              }
              </ul>
              <h3>Destinations</h3>
              <ul class="list">
              {
                this.state.destinations.map((destination) => {
                  return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...destination} />)
                })
              }
              </ul>
              <label>
                <input
                  type="radio"
                  value="1Week"
                  checked={this.state.selectedOption === "1Week"}
                  onChange={this.onValueChange}
                />
                1 Week
              </label>
              <label>
                <input
                  type="radio"
                  value="2Weeks"
                  checked={this.state.selectedOption === "2Weeks"}
                  onChange={this.onValueChange}
                />
                2Weeks
              </label>
              <label>
                <input
                  type="radio"
                  value="Monthly"
                  checked={this.state.selectedOption === "Monthly"}
                  onChange={this.onValueChange}
                />
                Monthly
              </label>
              <br/>
              <button class="subscribe" onClick={this.handleSubmit}> Subscribe </button>
              <div>
              {this.state.message}
              </div>
          </div>

        </form>
        </div>
      </div>
    );
  }
}
export default HomePage;
