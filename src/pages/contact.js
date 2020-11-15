import React from 'react';
import Layout from '../components/layout';
import Textarea from 'react-expanding-textarea';
import {Form} from 'react-bootstrap';
import { navigate } from 'gatsby-link'
import swal from 'sweetalert'
import '../styles/form.scss';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      email: "",
      message: "",
      option: "",
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

  handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      // .then(() => navigate(form.getAttribute('action')))
      .then(() => {swal({
        title: "Thank you for your message!",
        text: "お問い合わせありがとうございます。返信までしばらくお待ちください",
        button: {
          text: "Close",
          value: true,
          visible: true,
          className: "alert-button",
          closeModal: true
        }
      }) 
      navigate('/')})
      .catch((error) => alert(error))
  }

  render() {
    return (<Layout>
      <h1 className="form-title">Contact Us</h1>
      {/* <h3 className="form-subtitle">あなたの綺麗を見つけるお手伝い</h3> */}
      <p className="form-subtitle"><span>あなたの綺麗を見つけるお手伝い</span> <br></br> ご予約はもちろん、レッスン内容などに関するお問い合わせも、お気軽にお問い合わせください。取材や撮影のご依頼もこちらからお願いいたします。</p>
      <Form onSubmit={this.handleSubmit} 
        method="POST" 
        // action="/thanks/"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
        className="form-wrapper">
        
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        
        <Form.Group className="form-field">
          <Form.Label className="form-label">名前</Form.Label>
            <Form.Control 
              type="text" 
              name="contactName" 
              value={this.state.contactName}
              onChange={this.handleInputChange}
              className="form-input"
              required
               />
        </Form.Group>
        
        <Form.Group className="form-field">
          <Form.Label className="form-label">メールアドレス</Form.Label>
           <Form.Control 
              type="email" 
              name="email" 
              value={this.state.email}
              onChange={this.handleInputChange}
              className="form-input"
              required
              />
        </Form.Group>

        <Form.Group className="form-field">
          <Form.Label className="form-label">ご希望の内容</Form.Label>
        
          {['radio'].map((type) =>(
            <div key={`inline-${type}`} className="mb-3">

              {/* <Form.Check 
                inline label="メイク体験" 
                type={type} 
                id={`inline-${type}-1`} 
                name="option" 
                value="メイク体験"
                checked={this.state.option === "メイク体験"}
                onChange={this.handleOptionChange}
                className="form-radio" /> */}
              <Form.Check 
                inline label="オンラインメイクレッスン" 
                type={type} 
                id={`inline-${type}-2`} 
                name="option" 
                value="オンラインメイクレッスン"
                checked={this.state.option === "オンラインメイクレッスン"}
                onChange={this.handleOptionChange}
                className="form-radio" />
              <Form.Check 
                inline label="美人カルテ" 
                type={type} 
                id={`inline-${type}-3`} 
                name="option" 
                value="美人カルテ"
                checked={this.state.option === "美人カルテ"}
                onChange={this.handleOptionChange}
                className="form-radio" />
                {/* <Form.Check 
                inline label="ポーチのお悩み解決します" 
                type={type} 
                id={`inline-${type}-4`} 
                name="option" 
                value="ポーチのお悩み解決します"
                checked={this.state.option === "ポーチのお悩み解決します"}
                onChange={this.handleOptionChange}
                className="form-radio" /> */}
                <Form.Check 
                inline label="その他" 
                type={type} 
                id={`inline-${type}-5`} 
                name="option" 
                value="その他"
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
              className="form-input"
              required
              />
        </Form.Group>
         <button type="submit" className="button-styled-form">Send</button>
        {/* <button type="submit" className="button-styled-form">Send</button> */}
      </Form>
    </Layout>
  )}
}
