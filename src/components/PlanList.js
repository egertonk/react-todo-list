import React, {useState} from 'react';  //Import react using useState
import PlanForm from './PlanForm';  //Import PlanForm
import Plan from './Plan';  //Import Plan

function PlanList() {
  const [plans, setPlans] = useState([]);
    
  //Process addPlan when submit button is clicked
  const addPlan = plan => {
    if (!plan.text || /^\s*$/.test(plan.text)) {
        alert("Please type out your plan");
      return;
    }
    
    //Create a new plan
    const newPlan = [plan, ...plans];
    //Set or store the new plan
    setPlans(newPlan);
    console.log(...plans);
  };

  //Update any change from user plan  
  const updatePlan = (planId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    //Set or store the new plan
    setPlans(prev => prev.map(item => (item.id === planId ? newValue : item)));
  };

  //Remove user plan from the list 
  const removePlan = id => {
    const removedPlan = [...plans].filter(plan => plan.id !== id);
    //Set or store the new plan
    setPlans(removedPlan);
  };

  //Add user plan to list 
  const completePlan = id => {
    let updatedPlans = plans.map(plan => {
        
      if (plan.id === id) {
        plan.isComplete = !plan.isComplete;
      }
      return plan;
    });
    //Set or store the new plan
    setPlans(updatedPlans);
  };

  //Html pass return to display on screen
  return (
    <>
      <h1>Today's Plan...</h1>
      
      <PlanForm onSubmit={addPlan} />   {/* Show form and onSubmit function called addPlan */}
      <Plan
        plans={plans}
        completePlan={completePlan}
        removePlan={removePlan}
        updatePlan={updatePlan}
      />   
      <p>Provided by Egerton.</p>
       {/* This will remove, update and complete plan */}
    </>
  );
}

export default PlanList;