import { Element } from "react-scroll";
import { links} from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";

const Contact = () => {
  return (
    <section>
      <Element
        name="Contact"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="caption-aboutme uppercase text-p2">CONTACT</div>

          {/* Social Media Links */}
          <div className="mt-12 flex flex-wrap gap-8 justify-center">
            {links.map(({ platform, url, icon }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-p4 hover:text-p1 transition-all"
              >
                {/* Social Media Icon */}
                <img
                  src={icon}
                  alt={platform}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg font-semibold">{platform}</span>
              </a>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Contact;
