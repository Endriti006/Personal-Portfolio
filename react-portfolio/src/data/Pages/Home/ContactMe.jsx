export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <div >
                <p className="sub-ttile">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quos.</p>
            </div>
            <form className="conatct--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" name="first-name" id="first-name" className="contact--input text-md" required />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" name="last-name" id="last-name" className="contact--input text-md" required />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" name="email" id="email" className="contact--input text-md" required />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone-number</span>
                        <input type="number" name="phone-number" id="phone-number" className="contact--input text-md" required />
                    </label>
                </div>
                <label htmlFor="chodoe-topic" className="contact--label">
                        <span className="text-md">Chose a topic</span>
                       <select name="chodoe-topic" id="chodoe-topic" className="contact--input text-md">
                        <option>Select One...</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                       </select>
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Messeage</span>
                        <textarea name="message" id="message" className="contact--input text-md" rows="8" placeholder="Type your message" />
                    </label>
                    <label htmlFor="checkbox" className="checkbox--label">
                        <input type="checkbox" required name="checkbox" id="checkbox"/>
                        <span className="text-sm">I accept the the terms</span>
                    </label>
                    <div><button className="btn btn-primary contact--form--btn">Submit</button></div>
            </form>
        </section>
    )
}