
import { Link } from "react-router-dom";
const FooterComponent =  () => {
 
    return(

        <div className="footer-coninter h-16 w-full bg-pink-100 absolute bottom-auto">
            <footer className="footer mx-96 text-center text-lg">
                <ul className="footer-ele-ul nav-option-list flex justify-between font-bold" >
                    <li className="footer-ele-li my-5"><Link to="/">Home</Link></li>
                    <li className="footer-ele-li my-5"><Link to="/about">About</Link></li>
                    <li className="footer-ele-li  my-5"><Link to="/contact">Contact Us</Link></li>
                    <li className="footer-ele-li my-5">Help & Support</li>
                </ul>
            </footer>
        </div>
    );

}

export default FooterComponent;