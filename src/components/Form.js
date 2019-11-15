import React from "react"; 

//since it's a stateless function we don't have to do class Name extends React.Component
//We are returning only one method thus we don't need return or render type
const Form = form =>(
    <form onSubmit = {form.getWeather}>
        <input type="text" name = "city" placeholder = "City.."/>
        <input type="text" name = "country" placeholder = "Country"/>
        <button>Get Weather</button>
    </form>
)


export default Form; 