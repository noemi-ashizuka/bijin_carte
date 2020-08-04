import React from 'react';
import Layout from '../components/layout';
import Textarea from 'react-expanding-textarea';
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
      <h1 className="form-title">Contact Us</h1>
      <h3 className="form-subtitle">ちょっとお仕事の連れようでしょ運動もできやっならて、どんなのからお主人議会からありまし。</h3>
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
          <p className="form-label">Choose an option</p>
          <label>
            <span className="form-label">Value A</span>
            <input 
              type="radio" 
              name="option" 
              value="value A"
              checked={this.state.option === "value A"}
              onChange={this.handleOptionChange}
              className="form-radio" />
          </label>
        
          <label>
            <span className="form-label">Value B</span>
            <input 
              type="radio" 
              name="option" 
              value="value B"
              checked={this.state.option === "value B"}
              onChange={this.handleOptionChange}
              className="form-radio" />
          </label>
        
          <label>
            <span className="form-label">Value C</span>
            <input 
              type="radio" 
              name="option" 
              value="value C"
              checked={this.state.option === "value C"}
              onChange={this.handleOptionChange}
              className="form-radio" />
          </label>
        </div>

        <div className="form-field">
          <label>
            <div className="form-label">特記事項</div>
            <Textarea 
              name="message" 
              value={this.state.message}
              onChange={this.handleInputChange}
              rows={5}
              cols={5}
              className="form-input" />
          </label>
        </div>
        <button type="submit" className="button-styled-form">Send</button>
      </form>
    </Layout>
  }
}
