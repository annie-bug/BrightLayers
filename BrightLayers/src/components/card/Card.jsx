import { forwardRef } from "react";
import PropTypes from "prop-types";

// Use forwardRef to forward the ref to the div element inside Card
const Card = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="overflow-x-hidden">
      <div className="max-w-full w-[23.26rem] h-[35.9375rem] bg-[#1a3f60] rounded-3xl overflow-hidden mx-auto">
        <div className="w-[19.5625rem] h-[21.75rem] text-white text-left text-[1.4rem] font-light font-pSans leading-[2rem] tracking-tight mx-auto mt-10">
          {props.content}
        </div>
        <div className="w-[20.5625rem] h-[5.0625rem] mx-auto mt-20">
          <span className="text-white text-xl font-semibold font-pSans leading-[1.905rem] tracking-tight">
            {props.name}
            <br />
          </span>
          <span className="text-white text-[1rem] font-light font-pSans leading-7 tracking-tight">
            {props.title}
            <br />
          </span>
        </div>
      </div>
    </div>
  );
});

// Set the display name explicitly for better debugging
Card.displayName = "Card";

// Define propTypes for the Card component to ensure proper validation
Card.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
