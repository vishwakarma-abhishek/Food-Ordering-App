
import { Link } from "react-router-dom";
const FooterComponent =  () => {
 
    return(

        <div className="footer-coninter">
            <footer className="footer">
                <ul className="footer-ele-ul">
                    <li className="footer-ele-li"><Link to="/">Home</Link></li>
                    <li className="footer-ele-li"><Link to="/about">About</Link></li>
                    <li className="footer-ele-li"><Link to="/contact">Contact Us</Link></li>
                    <li className="footer-ele-li">Help & Support</li>
                </ul>
            </footer>
        </div>
    );

}

export default FooterComponent;