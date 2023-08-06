/* eslint-disable react/prop-types */
import { useState } from "react";
import { format, isSameWeek } from "date-fns";

import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import { VscDebugStepBack } from "react-icons/vsc";

const DateMonth = ({
  setSelectedDay,
  setToday,
  selectedDay,
  handlePrev,
  handleNext,
  showEntireMonth,
  disabled,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  let goBack = false;
  const formatted = format(selectedDay, "MMMM y");

  const theDay = new Date();

  if (!isSameWeek(selectedDay, theDay, { weekStartsOn: 1 })) goBack = true;

  function handleBack() {
    setSelectedDay(new Date());
    setToday(new Date());
  }
  return (
    <div>
      {isHovered ? (
        <AiFillLeftCircle
          className={showEntireMonth ? "btnWeek" : "hide"}
          onClick={handlePrev}
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : (
        <AiOutlineLeftCircle
          className={showEntireMonth ? "btnWeek" : "hide"}
          onClick={handlePrev}
          onMouseEnter={() => setIsHovered(true)}
        />
      )}
      {formatted}
      {isHoveredRight ? (
        <AiFillRightCircle
          className={showEntireMonth ? "btnWeek" : "hide"}
          onClick={handleNext}
          onMouseLeave={() => setIsHoveredRight(false)}
        />
      ) : (
        <AiOutlineRightCircle
          className={showEntireMonth ? "btnWeek" : "hide"}
          onClick={handleNext}
          disabled={disabled}
          onMouseEnter={() => setIsHoveredRight(true)}
        />
      )}
      {goBack && <VscDebugStepBack onClick={handleBack} />}
    </div>
  );
};

export default DateMonth;
