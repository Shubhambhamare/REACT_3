import React from "react";
class FormOne extends React.Component {
  render() {
    return <div className="Container_1">{this.props.formData.map((item,index)=>{
      return <div className="Container_2" key={index}>Name: {item.name} | Department: {item.department} | Rating: {item.rating}</div>
  })}</div>;
  }
}

export default FormOne;