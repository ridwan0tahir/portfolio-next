import { useEffect, useState } from "react";

const LinkedIn = () => {
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
      <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z" />
    </svg>
  );
};

export default LinkedIn;
