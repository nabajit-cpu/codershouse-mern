import React from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";

const StepName = ({ onNext }) => {
  return (
    <>
      <Card title='What is your full name' logo='./images/Emojiavatar.png'>
        <div className='mid'>Name component</div>
        <Button text='Next' onClick={onNext} />
      </Card>
    </>
  );
};

export default StepName;
