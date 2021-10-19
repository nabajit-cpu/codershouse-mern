import React from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";

const StepUsername = ({ onNext }) => {
  return (
    <>
      <Card title='Pick a username' logo='./images/Emojiusername.png'>
        <input type='text' placeholder='Username' />
        <div className='mid'>Phone e mail component</div>
        <Button text='Next' onClick={onNext} />
      </Card>
    </>
  );
};

export default StepUsername;
