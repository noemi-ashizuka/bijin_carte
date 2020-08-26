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
    alert("Thank you for your message, we will reply soon")
    // console.log(this.state)
    
    // const form = ev.target;
    // const data = new FormData(form);
    // const xhr = new XMLHttpRequest();
    // xhr.open(form.method, form.action);
    // xhr.setRequestHeader("Accept", "application/json");
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState !== XMLHttpRequest.DONE) return;
    //   if (xhr.status === 200) {
    //     form.reset();
    //     this.setState({ status: "SUCCESS" });
    //   } else {
    //     this.setState({ status: "ERROR" });
    //   }
    // };
    // xhr.send(data);
  }

  render() {
    return (<Layout>
      <h1 className="form-title">Contact Us</h1>
      {/* <h3 className="form-subtitle">あなたの綺麗を見つけるお手伝い</h3> */}
      <p className="form-subtitle"><span>あなたの綺麗を見つけるお手伝い</span> <br></br> ご予約はもちろん、レッスン内容などに関するお問い合わせも、お気軽にお問い合わせください。取材や撮影のご依頼もこちらからお願いいたします。</p>
      <Form onSubmit={this.handleSubmit} 
        method="POST" 
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
                value="メイク体験"
                checked={this.state.option === "メイク体験"}
                onChange={this.handleOptionChange}
                className="form-radio" />
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
                <Form.Check 
                inline label="ポーチのお悩み解決します" 
                type={type} 
                id={`inline-${type}-4`} 
                name="option" 
                value="ポーチのお悩み解決します"
                checked={this.state.option === "ポーチのお悩み解決します"}
                onChange={this.handleOptionChange}
                className="form-radio" />
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
              className="form-input" />
        </Form.Group>
         <button type="submit" className="button-styled-form">Send</button>
        {/* <button type="submit" className="button-styled-form">Send</button> */}
      </Form>
    </Layout>
  )}
}
