export default function Contact(){
    return(
        <div>
           <h2 className="contact-me">Contact me!</h2>
            <form className="form">
                <label>
                    Name:  <input type="text" name="name" required/>
                </label>
                <label>
                    Email: <input type="text" name="email" id="email" required/>
                </label>
                <textarea name="comment" cols="40" rows="10" placeholder="Write a comment"></textarea>
                <input type="submit" value="Submit" className="btnsubmit"/>
            </form>
        </div>
    )
}