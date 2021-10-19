import React from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";

const StepOtp = ({ onNext }) => {
  return (
    <>
      <Card
        title='Enter the code we just texted you'
        logo='./images/Emojiotp.png'>
        <div className='mid'>Otp component</div>
        <Button text='Next' onClick={onNext} />
      </Card>
    </>
  );
};

export default StepOtp;
