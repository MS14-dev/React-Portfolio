import React, { Component } from 'react'

export default class Contact extends Component {

    state = {
        name:'',
        mail:'',
        comment:''
    }

    onChange=(event)=>{
        let value = event.target.value
        let key = event.target.name
        if(key == 'name'){
           this.setState({name:value})
        }if(key == 'mail'){
            this.setState({mail:value})
        }else{
            this.setState({comment:value})
        }
    }

    render() {
        var {name,mail,comment} = this.state
        return (
            <div id="contact">
                <div className="contact_title_div">
                   <h1 className="contact_title">Conatact</h1>
                </div>
                <div className="contact_div_outer">
                   <div className="contact_details_div">
                      <h2 className="contact_type">Telephone</h2>
                      <p className="contact_values">0112456789</p>
                      <h2 className="contact_type">Address</h2>
                      <p className="contact_values">No: 123, Main Plaza, York Street</p>
                      <h2 className="contact_type">Fax</h2>
                      <p className="contact_values">0112369852</p>
                   </div>
                   <div className="email_form_div">
                      <h2 className="send_email_title">Email to me</h2>
                      <form action="mailto:test@gmail.com" method="POST" enctype="text/plain" name="EmailForm">
                         <input name="mail" value={mail} onChange={this.onChange} className="email_from_inputs" type="email" required={true} placeholder="your email here" />
                         <input name="name" value={name} onChange={this.onChange} className="email_from_inputs" required={true} placeholder="enter your name" />
                         <textarea name="comment" value={comment} onChange={this.onChange} rows="6" className="email_from_inputs" required={true} placeholder="message here" />
                         <button type="submit" className="submit_btn">Send</button>
                      </form>
                   </div>
                </div>
            </div>
        )
    }
}
