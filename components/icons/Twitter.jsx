import { useEffect, useState } from "react";

const Twitter = () => {
  const [hover, setHover] = useState(false);
  const [size, setSize] = useState({ width: "20px", height: "20px" });

  const handleMouseOver = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  useEffect(() => {
    const handleResize = (e) => {
      if (e.target.innerWidth <= 480) {
        setSize({ width: "20px", height: "20px" });
      } else if (e.target.innerWidth <= 768) {
        setSize({ width: "24px", height: "24px" });
      } else {
        setSize({ width: "30px", height: "30px" });
      }
    };

    window.addEventListener("resize", (e) => handleResize(e));

    return window.removeEventListener("resize", (e) => handleResize(e));
  }, []);

  return (
    <svg
      fill={hover ? "#FA0C1B" : "#090A0E"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseLeave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size.width}
      height={size.height}
    >
      {" "}
      <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
    </svg>
  );
};

export default Twitter;
