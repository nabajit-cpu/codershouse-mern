import React from "react";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";

const StepAvatar = ({ onNext }) => {
  return (
    <>
      <Card title='Okay buddy !' logo='./images/Emojiavatar.png'>
        <div className='mid'>Avatar component</div>
        <Button text='Next' onClick={onNext} />
      </Card>
    </>
  );
};

export default StepAvatar;
