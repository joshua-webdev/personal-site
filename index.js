import './assets/css/styles.scss'
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import EmailIcon from './assets/images/email.svg?raw';
import LinkedinIcon from './assets/images/linkedin.svg?raw';

MouseFollower.registerGSAP(gsap);
new MouseFollower();

document.getElementById('emailSVG').innerHTML = EmailIcon;
document.getElementById('linkedinSVG').innerHTML = LinkedinIcon;
