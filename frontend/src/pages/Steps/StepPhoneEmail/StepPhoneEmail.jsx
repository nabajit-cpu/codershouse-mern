import React from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";

const StepPhoneEmail = ({ onNext }) => {
  return (
    <>
      <Card title='Enter your phone number' logo='./images/Emojiphone.png'>
        <div className='mid'>Phone e mail component</div>
        <Button text='Next' onClick={onNext} />
      </Card>
    </>
  );
};

export default StepPhoneEmail;
