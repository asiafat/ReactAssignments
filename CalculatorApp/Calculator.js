import React from 'react';
  
class Calculator extends React.Component {
    render()
    {
    return (
    <div className="frame">
    <title value="Calculator"/>
    <div class="mainCalc">
    
    <div className="button-row">
      <button label={'Clear'}/>
      <button label={'Delete'}/>
      <button label={'.'}/>
      <button label={'/'}/>
    </div>
    <div className="button-row">
      <button label={'7'}/>
      <button label={'8'}/>
      <button label={'9'}/>
      <button label={'*'}/>
    </div>
    <div className="button-row">
      <button label={'4'}/>
      <button label={'5'}/>
      <button label={'6'}/>
      <button label={'-'}/>
    </div>
    <div className="button-row">
      <button label={'1'}/>
      <button label={'2'}/>
      <button label={'3'}/>
      <button label={'+'}/>
    </div>
    <div className="button-row">
      <button label={'0'}/>
      <button label={'='}/>
    </div>
    </div>
    </div>
    );
  }
}
  
export default Calculator;