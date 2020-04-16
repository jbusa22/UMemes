import React from 'react';
import { Formik } from 'formik';

class MemeImage extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
            return (
                <Formik
                    initialValues={{ name: '' }}
                    onSubmit={async (values, actions) => {
                        setTimeout(async () => {
                        await this.props.queryImages(values.name);
                        actions.setSubmitting(false);
                        }, 500);
                    }}
                    >
                    {props => (
                    <form onSubmit={props.handleSubmit}>
                        <input
                        type="text"
                        className="meme-search"
                        placeholder="Search for an image..."
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                        name="name"
                        />
                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    </form>
                    )}
                </Formik>
        );
    }
}
export default MemeImage;

