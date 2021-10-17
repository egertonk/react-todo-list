import React, { useState } from 'react'; //Import react using useState
import PlanForm from './PlanForm'; //Import PlanForm
import { RiCloseCircleLine } from 'react-icons/ri'; //Delete icon
import { TiEdit } from 'react-icons/ti'; //Edit Icon

//Process plans, completePlan, removePlan, updatePlan
const Plan = ({ plans, completePlan, removePlan, updatePlan }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updatePlan(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    //Will return to PlanForm
    return <PlanForm edit={edit} onSubmit={submitUpdate} />;
  }

  return plans.map((Plan, index) => (
    <div
      className={Plan.isComplete ? 'plan-row complete' : 'plan-row'}
      key={index}
    >
      <div key={Plan.id} onClick={() => completePlan(Plan.id)}>
        {Plan.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removePlan(Plan.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: Plan.id, value: Plan.text })}
          className='edit-icon'
        />
      </div>
    </div>
  )); 
};

export default Plan;