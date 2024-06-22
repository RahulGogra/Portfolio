const ContactForm = () => {
    return (
        <>
            <div className="formHeading">
                <a>Contact</a>
            </div>
            <div className="form">
                <div className="fleximage">
                    <img src="/images/tiger.png" alt="Tiger" />
                </div>
                <div>
                    <form id="submit-form">
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                        <textarea
                            type="text"
                            id="message"
                            placeholder="Anything you want to ask?"
                            required
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
