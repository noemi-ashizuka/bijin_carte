import React from 'react';
import Layout from '../components/layout';

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    option: ""
  }
  render() {
    return <Layout>
      <form>
        <label>
          名前
          <input type="text" name="name" />
        </label>
        <label>
          メールアドレス
          <input type="email" name="email" />
        </label>
        <p>Select an option:</p>
        <div>
          <label>
            Value A
            <input type="radio" name="option" value="value A"></input>
          </label>
          <label>
            Value B
            <input type="radio" name="option" value="value B"></input>
          </label>
          <label>
            Value C
            <input type="radio" name="option" value="value C"></input>
          </label>
          <label>
            特記事項
            <input type="textfield" name="message" />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </Layout>
  }
}
