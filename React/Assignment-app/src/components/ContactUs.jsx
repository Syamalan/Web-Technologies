import './ContactUs.css'
let Contact = function(){
    var email = "Syamala.n@gmail.com"
    var url = "https://ics.com"
    var phNo="9951012595"
    return(
       <div className="ContactUs">
        <h2>Contact Us!</h2>
        <div>Email: {email}</div>
        <div><a href="#"></a>URL: {url}</div>
        <div>Phone No: {phNo}</div>
       </div>
    )
}
export default Contact