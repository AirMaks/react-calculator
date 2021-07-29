import React, {useState} from "react";
import './App.css';

function App() {

  let [num1, setNum1] = useState('');
  let [num2, setNum2] = useState('');
  let [sign, setSign] = useState('');
  let [total, setTotal] = useState();
  let [signed, setSigned] = useState(true);

  const getSign = (sign) => {
     
    if(num1 === '') return false;
    setSigned(false)
    setSign(sign)

    if(total) {
      setNum1(total);
      setNum2('')
      setTotal('')
    } 
  }

  const getNum = (num) => {
    if(total) return false;
    signed ? setNum1(num1.replace('', '') + num) : setNum2(num2.replace('', '') + num)
  }

  const clear = () => {
    setNum1('');
    setNum2('');
    setTotal('')
    setSign('')
    setSigned(true)
  }


  const getTotal = () => {

    if(sign === '-') {
      setTotal(+num1 - +num2)
    } else if(sign === '+') {
      setTotal(+num1 + +num2)
    } else if(sign === '*') {
      setTotal(+num1 * +num2)
    } else if(sign === '/') {
      setTotal(+num1 / +num2)
    }
    
  }

  return (
    <div className='container'>
      <h1 className='header'>React Calculator</h1>
      <div className='num_container'>
        <div className='num'>{num1}</div>
        <div className='sign'>{sign}</div>
        <div className='num'>{num2}</div>
        <div className='sign'> = </div>
        <div className='num'>{total}</div>
      </div>
      <div className='calculator'>
        <div className='calculator_item' onClick={e => getNum(e.target.innerHTML)}>1</div>
        <div className='calculator_item' onClick={e => getNum(e.target.innerHTML)}>2</div>
        <div className='calculator_item' onClick={e => getNum(e.target.innerHTML)}>3</div>
        <div className='calculator_item' onClick={e => getNum(e.target.innerHTML)}>4</div>
        <div className='calculator_item' onClick={e => getNum(e.target.innerHTML)}>5</div>
        <div className='calculator_item' onClick={e => getNum(e.target.innerHTML)}>6</div>
        <div className='calculator_item' onClick={e => getNum(e.target.innerHTML)}>7</div>
        <div className='calculator_item' onClick={e => getNum(e.target.innerHTML)}>8</div>
        <div className='calculator_item' onClick={e => getNum(e.target.innerHTML)}>9</div>
        <div className='calculator_item_dot' onClick={e => getNum(e.target.innerHTML)}>.</div>
        <div className='calculator_item' onClick={e => getNum(e.target.innerHTML)}>0</div>

        <div className='calculator_item_sign' onClick={e => getSign(e.target.innerHTML)}>*</div>
        <div className='calculator_item_sign' onClick={e => getSign(e.target.innerHTML)}>/</div>
        <div className='calculator_item_sign' onClick={e => getSign(e.target.innerHTML)}>+</div>
        <div className='calculator_item_sign' onClick={e => getSign(e.target.innerHTML)}>-</div>
        
        <div className='calculator_item_clear' onClick={clear}>Clear</div>
        <div className='calculator_item_equal' onClick={getTotal}>=</div>
      </div>
    </div>
  );
}

export default App;
