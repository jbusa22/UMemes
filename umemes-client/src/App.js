import './App.css';
import '';

import React from 'react';
import { Formik } from 'formik';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        images: [],
        searching: false,
        error: false
    };
    this.queryImages = this.queryImages.bind(this);
  }
  async queryImages(query) {
    // GET request using fetch with async/await
    try {
      const response = await fetch(`http://localhost:8080/search?q=${query}`);
      const data = await response.json();
      if(data && data.length > 0) {
        this.setState({ images: data, error: false});
      } else {
        this.setState({ error: true});
      }
    } catch {
      this.setState({ error: true});
    }
  }
  clickedImage(e) {
    console.log(e);
  }
  constructImage(value, i) {
    var url = "https://farm" + value.farm + ".staticflickr.com/" 
                + value.server + "/" + value.id + "_" + value.secret + ".jpg";
                console.log(url);
    return <MemeImage key={"meme-select" + i} className="memeimage-select" i={i} src={url} alt="" onImageClick={this.clickedImage}/>;
  }
  render() {
    return (
      <div>
        <h1>My Form</h1>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={async (values, actions) => {
            setTimeout(async () => {
              await this.queryImages(values.name);
              actions.setSubmitting(false);
            }, 500);
          }}
        >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
        </Formik>
        <div className="memes">
          {!this.state.error 
              ? this.state.images.map((value, i) => (this.constructImage(value, i))) 
              : <div className="no-memes-found-box">
                  <div className="meme-sadness">
                    No memes found!
                  </div>
                  <div className="helpful-hint">
                    Maybe try a different query?
                  </div>
                </div>
          }
        </div>
      </div>

    )
  }
}
export default App;
