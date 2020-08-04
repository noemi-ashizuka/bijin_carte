import React from 'react';
import Layout from '../components/layout';
import '../styles/form.scss';

export default class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      email: "",
      message: "",
      option: ""
    }
  }
  
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleOptionChange = changeEvent => {
    this.setState({
      option: changeEvent.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert("Thank you for your message, we will reply soon")
    console.log(this.state)
  }

  render() {
    return <Layout>
      <form onSubmit={this.handleSubmit} className="form-wrapper">
        
        <div className="form-field">
          <label>
            <div className="form-label">名前</div>
            <input 
              type="text" 
              name="contactName" 
              value={this.state.contactName}
              onChange={this.handleInputChange}
              className="form-input" />
          </label>
        </div>
        
        <div className="form-field">
          <label>
            <div className="form-label">メールアドレス</div>
            <input 
              type="email" 
              name="email" 
              value={this.state.email}
              onChange={this.handleInputChange}
              className="form-input" />
          </label>
        </div>
        
        <div className="form-field">
        <p className="form-label">Select an option:</p>
          <label>
            <div className="form-label">Value A</div>
            <input 
              type="radio" 
              name="option" 
              value="value A"
              checked={this.state.option === "value A"}
              onChange={this.handleOptionChange}
              className="form-input" />
          </label>
        
          <label>
            <div className="form-label">Value B</div>
            <input 
              type="radio" 
              name="option" 
              value="value B"
              checked={this.state.option === "value B"}
              onChange={this.handleOptionChange}
              className="form-input" />
          </label>
        
          <label>
            <div className="form-label">Value C</div>
            <input 
              type="radio" 
              name="option" 
              value="value C"
              checked={this.state.option === "value C"}
              onChange={this.handleOptionChange}
              className="form-input" />
          </label>
        </div>

        <div className="form-field">
          <label>
            <div className="form-label">特記事項</div>
            <input 
              type="textarea" 
              name="message" 
              value={this.state.message}
              onChange={this.handleInputChange}
              className="form-input" />
          </label>
        </div>
          
        
        <button type="submit">Send</button>
      </form>
    </Layout>
  }
}
