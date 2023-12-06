import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component{
  render(){
    return (
    
    <div className='contactus'>

      <form className='touch'>
        <label for="fname"> Full Name</label> 
        <input type="text" id="fname" name="fullname" placeholder='Enter Full Name..'  style={{fontSize:"20px"}}/><br/>
        <label for="Email">Email Id</label>
        <input type='text' id='email' name='email' placeholder='Enter Your Email..'  style={{fontSize:"20px"}}/><br/>
        <label for="Phoneno">Phone Number</label>
        <input type='text' id='phone' name='phone' placeholder='Enter Phone no..'  style={{fontSize:"20px"}}/><br/>
        <label for='city'>City</label>
        <select input id="City" type="City" style={{fontSize:"20px"}}><br/>
          <option value="TamilNadu">  Tamil Nadu</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Satara"> Satara</option>
        </select> <br/>

        <textarea id='subject' type='text' name='subject' placeholder='Enter your Query or Subject..' style={{height:"200px", width:"300px", fontSize:"20px"}}>

        </textarea><br/>

        <input id='button' value="submit" type="submit" className="button"/>
      </form>

    </div>)
  }
}

ReactDOM.render(<Header/>,document.getElementById('root'));
