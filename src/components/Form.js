import React from "react";
import FormOne from "./FormOne";
import './Form.css'
class Form extends React.Component {
  state={
    name:"",
    department:"",
    rating:"",
    data:[],
    cond:false,
  }
  inputHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler=(e)=>{
    e.preventDefault();
    if(this.state.name!=="" &&this.state.department!==""&&this.state.rating!==""){
      const tempObj={name:this.state.name,department:this.state.department,
      rating:this.state.rating,}
      const tempArr=this.state.data
      tempArr.push(tempObj)
      this.setState({data:tempArr})
      this.setState({name:"",
      department:"",
      rating:"",
      cond:true})
    } else alert("Please fill all the details")
  }
  render() {
    return (
      <div>
        <h1>Employee Feedback Form</h1>
        {!this.state.cond &&<form >
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" className="inputFrom" value={this.state.name} onChange={(e) => this.inputHandler(e)}/><br/>
          <label htmlFor="department">Department: </label>
          <input type="text" name="department" className="inputFrom" value={this.state.department} onChange={(e) => this.inputHandler(e)}/><br/>
          <label htmlFor="rating">Rating: </label>
          <input type="number" name="rating" className="inputFrom" value={this.state.rating} onChange={(e) => this.inputHandler(e)}/> <br/>
          <input type="submit" onClick={(e) => this.submitHandler(e)}/>
        </form> }
        
        {this.state.cond &&<FormOne formData={this.state.data}/>  }
        {this.state.cond && <input type="submit" value="Go Back" onClick={() => this.setState({cond:false})}/> }
      </div>
    );
  }
}

export default Form;