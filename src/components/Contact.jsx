import React from "react";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLink,
  faLocationDot,
  faFax,
  faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import {SectioWrapper} from "../hoc";

const Contact = () => {
  return (
    <footer className="p-5" dir="rtl">
      <div className="containers text-white ">
        <div>
          <div className="box">
            <h1>تواصل معنا</h1>
            <ul className="social">
              <li>
                <a
                  href="https://web.facebook.com/Specefic.Education.TantaUniversity.Official"
                  target="_blank"
                  className="facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a
                  href="https://spe.tanta.edu.eg/"
                  target="_blank"
                  className="youtube">
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </li>
            </ul>
          </div>

          <div className="box">
            <div className="line ">
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>

              <div className="info">العنوان: طنطا - شارع بطرس</div>
            </div>
            <div className="line">
              <i>
                {" "}<FontAwesomeIcon icon={faFax} />
              </i>
              <div className="info">الفاكس : 0403307190</div>
            </div>
            <div className="line">
              <i>
                {" "}<FontAwesomeIcon icon={faPhoneVolume} />
              </i>
              <div className="info">
                <span> الهاتف : 0403307190 </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.3141628946955!2d31.00866472083191!3d30.793822989827564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c973c3ebc873%3A0xcd2dc7c87407014!2z2YPZhNmK2Kkg2KfZhNiq2LHYqNmK2Kkg2KfZhNmG2YjYudmK2Kkg2KzYp9mF2LnYqSDYt9mG2LfYpw!5e0!3m2!1sar!2seg!4v1681094140665!5m2!1sar!2seg"
            width="300"
            height="300"
            style={{border: 0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <p className="copyright ">Made With &lt;3 <h2 className="font-bold mt-2 tracking-[.25em] md:text-[25px] ">Mohamed Fouad</h2> </p>
      <div className="box text-center">
        <ul className="social">
          <li>
            <a
              href="https://web.facebook.com/profile.php?id=100009643743141"
              target="_blank"
              className="facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Mohammedfouadd"
              target="_blank"
              className="youtube">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>{" "}
          <li>
            <a
              href="https://www.linkedin.com/in/mohamed-fouad-306093240/"
              target="_blank"
              className="linkin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default SectioWrapper(Contact, "contact");
