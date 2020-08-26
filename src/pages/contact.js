import React from 'react';
import Layout from '../components/layout';
import Textarea from 'react-expanding-textarea';
import {Form} from 'react-bootstrap';
import '../styles/form.scss';

export default class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      email: "",
      message: "",
      option: ""
    };
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

  handleSubmit = e => {
    // event.preventDefault()
    // alert("Thank you for your message, we will reply soon")
    // console.log(this.state)
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (<Layout>
      <h1 className="form-title">Contact Us</h1>
      {/* <h3 className="form-subtitle">あなたの綺麗を見つけるお手伝い</h3> */}
      <p className="form-subtitle"><span>あなたの綺麗を見つけるお手伝い</span> <br></br> ご予約はもちろん、レッスン内容などに関するお問い合わせも、お気軽にお問い合わせください。取材や撮影のご依頼もこちらからお願いいたします。</p>
      <Form name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="form-wrapper">
        
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        
        <Form.Group className="form-field">
          <Form.Label className="form-label">名前</Form.Label>
            <Form.Control 
              type="text" 
              name="contactName" 
              value={this.state.contactName}
              onChange={this.handleInputChange}
              className="form-input" />
        </Form.Group>
        
        <Form.Group className="form-field">
          <Form.Label className="form-label">メールアドレス</Form.Label>
           <Form.Control 
              type="email" 
              name="email" 
              value={this.state.email}
              onChange={this.handleInputChange}
              className="form-input" />
        </Form.Group>

        <Form.Group className="form-field">
          <Form.Label className="form-label">ご希望の内容</Form.Label>
        
          {['radio'].map((type) =>(
            <div key={`inline-${type}`} className="mb-3">

              <Form.Check 
                inline label="メイク体験" 
                type={type} 
                id={`inline-${type}-1`} 
                name="option" 
                value="value A"
                checked={this.state.option === "メイク体験"}
                onChange={this.handleOptionChange}
                className="form-radio" />
              <Form.Check 
                inline label="オンラインメイクレッスン" 
                type={type} 
                id={`inline-${type}-2`} 
                name="option" 
                value="value B"
                checked={this.state.option === "オンラインメイクレッスン"}
                onChange={this.handleOptionChange}
                className="form-radio" />
              <Form.Check 
                inline label="美人カルテ" 
                type={type} 
                id={`inline-${type}-3`} 
                name="option" 
                value="value C"
                checked={this.state.option === "美人カルテ"}
                onChange={this.handleOptionChange}
                className="form-radio" />
                <Form.Check 
                inline label="ポーチのお悩み解決します" 
                type={type} 
                id={`inline-${type}-4`} 
                name="option" 
                value="value D"
                checked={this.state.option === "ポーチのお悩み解決します"}
                onChange={this.handleOptionChange}
                className="form-radio" />
                <Form.Check 
                inline label="その他" 
                type={type} 
                id={`inline-${type}-5`} 
                name="option" 
                value="value E"
                checked={this.state.option === "その他"}
                onChange={this.handleOptionChange}
                className="form-radio" />
            </div>
          ))}
        </Form.Group>

        <Form.Group className="form-field">
          <Form.Label className="form-label">本文</Form.Label>
            <Textarea 
              name="message" 
              value={this.state.message}
              onChange={this.handleInputChange}
              rows={5}
              cols={5}
              className="form-input" />
        </Form.Group>
         <button type="submit" className="button-styled-form">Send</button>
      </Form>
    </Layout>
  )}
}
