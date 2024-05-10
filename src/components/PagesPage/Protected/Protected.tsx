import protected__img from '../../../image/protected.png';
import './Protected.css';

const Protected = () => {
  return (
    <div className="protected">
      <h1>Protected</h1>
      <p>
        Introducing Box Technology Security System: Your Comprehensive
        Protection Solution
      </p>
      <img className="protected__img" src={protected__img} alt="protected" />
      <p className="protected__text">
        Box Technology offers cutting-edge security solutions designed to
        safeguard your home or business with unparalleled reliability and
        efficiency. Our state-of-the-art security system combines advanced
        technology with intuitive design, ensuring comprehensive protection
        against intruders, theft, and emergencies.
      </p>
      <p>
        <strong>
          Key features of the Box Technology Security System include:
        </strong>
      </p>
      <ul>
        <li>
          1. <strong>Advanced Sensors:</strong> Our system is equipped with
          high-quality sensors strategically placed throughout your property to
          detect unauthorized access, motion, and environmental changes. From
          door and window sensors to motion detectors, our sensors provide early
          detection of potential threats.
        </li>
        <li>
          2. <strong>Real-Time Alerts:</strong> In the event of a security
          breach or emergency, our system instantly sends real-time alerts to
          your smartphone or designated monitoring service. Stay informed and
          take prompt action wherever you are, ensuring a swift response to any
          situation.
        </li>
        <li>
          3. <strong>Remote Monitoring:</strong> With our intuitive mobile app,
          you can remotely monitor your property's security status, access live
          camera feeds, and control system settings from anywhere in the world.
          Enjoy peace of mind knowing you have complete visibility and control
          over your security system at your fingertips.
        </li>
        <li>
          4. <strong>Professional Monitoring Services:</strong> For added peace
          of mind, our security system includes optional professional monitoring
          services. Our dedicated team of security experts is available 24/7 to
          monitor your property, respond to alerts, and dispatch emergency
          services when needed, ensuring round-the-clock protection.
        </li>
        <li>
          5. <strong>Easy Installation and Integration:</strong> Installation of
          the Box Technology Security System is seamless and hassle-free, with
          our team of experts guiding you through the process every step of the
          way. Plus, our system seamlessly integrates with other smart home
          devices, allowing for enhanced automation and customization.
        </li>
      </ul>
      <p className="protected__text">
        Protect what matters most with Box Technology Security System – your
        trusted partner in safety and security. Experience peace of mind knowing
        your home or business is always protected, backed by the latest in
        security technology and unparalleled customer support.
      </p>
    </div>
  );
};

export default Protected;
