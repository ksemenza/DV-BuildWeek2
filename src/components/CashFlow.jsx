import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";



const CashFlow = props => {
  const [amtMonth, setAmtMonth] = useState(Number(""));
  const [incomeInput, setIncomeInput] = useState();

  //Month onChange
  const handleChanges = e => {
    setAmtMonth(Number(e.target.value));
    // console.log(amtMonth);
  };
  //Income onChange
  const handleIncomeChange = e => {
    setIncomeInput(e.target.value)
    console.log(e.target.value)
  };
  const submitForm = e => {
    e.preventDefault();
    setAmtMonth(amtMonth);
    setIncomeInput(incomeInput);

    //Passed to CashFlow
    console.log("submit " + props)
  };

  useEffect(() => {
    setAmtMonth(amtMonth);
    setIncomeInput(incomeInput);
    // console.log("useEff " + amtMonth);
    // console.log(incomeInput);
  }, [amtMonth, incomeInput]);

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="incomeInputField">Income </label>
        <input
          id="incomeInputField"
          type="number"
          name="incomeInputField"
          onChange={handleIncomeChange}
          value={props.incomeInput}
        />
        <br />
        <br />
        <label htmlFor="monthAmt">Months</label>
        <select
          id="monthAmt"
          type="select"
          name="monthAmt"
          onChange={handleChanges}
          value={props.amtMonth}
        >
          <option value="0">Months</option>
          <option id="monthOne" value="1">
            1
          </option>
          <option id="monthTwo" value="2">
            2
          </option>
          <option id="monthThree" value="3">
            3
          </option>
          <option id="monthFour" value="4">
            4
          </option>
          <option id="monthFive" value="5">
            5
          </option>
          <option id="monthSix" value="6">
            6
          </option>
          <option id="monthSeven" value="7">
            7
          </option>
          <option id="monthEight" value="8">
            8
          </option>
          <option id="monthNine" value="9">
            9
          </option>
          <option id="monthTen" value="10">
            10
          </option>
          <option id="monthEleven" value="11">
            11
          </option>
          <option id="yearOne" value="12">
            12
          </option>
        </select>
      </form>
      <h5>Cash Flow Forcast</h5>

      {/* Put in state props from budget inputted var */}
      <Dashboard amtMonth={amtMonth} incomeInput={incomeInput} />
    </div>
  )
};

export default CashFlow;
