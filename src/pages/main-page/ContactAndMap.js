import React, {useRef} from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";

function ContactAndMap() {
    const messageTextRef = useRef(null);
    const mapStyles = {
        border: "0",
        width: "600px",
        height: "450px",
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Required";
        }
        if (!values.email) {
            errors.email = "Required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.question) {
            errors.question = "Required";
        }
        return errors;
    };

    const handleSubmit = (values, { setSubmitting }) => {
        fetch("http://localhost:9999/support/sendQuestion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    messageTextRef.current.innerText = "Success";
                } else {
                    messageTextRef.current.innerText = "You have already sent a question";
                }
                setSubmitting(false);
            })
            .catch((error) => {
                console.error("Ошибка при отправке запроса:", error);
                setSubmitting(false);
            });
    };

    return (
        <section className="contact">
            <h2 className="pre-title section-title text-center">Зв'яжіться з нами</h2>
            <div className="row">
                <iframe
                    className="map"
                    width="600"
                    height="450"
                    style={mapStyles}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1424.7487903408642!2d30.656982233289494!3d50.43089228604645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5237c9e42e1%3A0x8b28c21d6ae95ddd!2z0JrQuNGX0LLRgdGM0LrQuNC5INC60L7Qu9C10LTQtiDQutC-0LzQv2DRjtGC0LXRgNC90LjRhSDRgtC10YXQvdC-0LvQvtCz0ZbQuSDRgtCwINC10LrQvtC90L7QvNGW0LrQuCDQndCw0YbRltC-0L3QsNC70YzQvdC-0LPQviDQsNCy0ZbQsNGG0ZbQudC90L7Qs9C-INGD0L3RltCy0LXRgNGB0LjRgtC10YLRgw!5e0!3m2!1sen!2sus!4v1695537199936!5m2!1sen!2sus"
                ></iframe>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        question: ""
                    }}
                    validate={validateForm}
                    onSubmit={handleSubmit}>
                    {() => (
                        <Form>
                            <h2 className="pre-title section-title">Lorem, ipsum.</h2>
                            <span id="message_text" ref={messageTextRef}></span>
                            <div className="inputBox">
                                <span className="fas fa-user"></span>
                                <Field type="text" name="name" placeholder="name" />
                                <ErrorMessage name="name" component="div" className="error-message" />
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-user"></span>
                                <Field type="email" name="email" placeholder="email" />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-envelope"></span>
                                <Field type="text" name="question" placeholder="question" />
                                <ErrorMessage name="question" component="div" className="error-message" />
                            </div>
                            <div className="inputBox">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}

export default ContactAndMap;
