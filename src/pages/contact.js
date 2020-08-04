import React from 'react';
import Layout from '../components/layout';

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
    console.log(this.state)
  }

  handleOptionChange = changeEvent => {
    this.setState({
      option: changeEvent.target.value
    })
    console.log(this.state)
  }

  handleSubmit = event => {
    event.preventDefault()
    alert("Thank you for your message, we will reply soon")
    console.log(this.state)
  }

  render() {
    return <Layout>
      <form onSubmit={this.handleSubmit}>
        <label>
          名前
          <input 
            type="text" 
            name="contactName" 
            value={this.state.contactName}
            onChange={this.handleInputChange} />
        </label>
        <label>
          メールアドレス
          <input 
            type="email" 
            name="email" 
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <p>Select an option:</p>
        <div>
          <label>
            Value A
            <input 
              type="radio" 
              name="option" 
              value="value A"
              checked={this.state.option === "value A"}
              onChange={this.handleOptionChange}/>
          </label>
          <label>
            Value B
            <input 
              type="radio" 
              name="option" 
              value="value B"
              checked={this.state.option === "value B"}
              onChange={this.handleOptionChange}/>
          </label>
          <label>
            Value C
            <input 
              type="radio" 
              name="option" 
              value="value C"
              checked={this.state.option === "value C"}
              onChange={this.handleOptionChange}/>
          </label>
          <label>
            特記事項
            <input 
              type="textarea" 
              name="message" 
              value={this.state.message}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </Layout>
  }
}
