import React, {useState} from "react";

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  header: {
    color: '#222',
    fontFamily: 'Roboto',
    fontWeight: 400,
    marginTop: '50px',
    marginBottom: '60px'
  },
  calculator: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '400px',
    fontSize: '20px',
    fontFamily: 'Roboto',
    
  },
  calculator_item: {
    width: '30%',
    height: '100px',
    border: '1px solid rgb(65, 214, 111)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '5px',
    background: 'rgb(65, 214, 111)',
  },
  calculator_item_sign: {
    width: '30%',
    height: '100px',
    border: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '5px',
    background: '#ccc'
  },

  calculator_item_dot: {
    width: '30%',
    height: '100px',
    border: '1px solid #4a81ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '5px',
    background: '#4a81ff'
  },

  calculator_item_clear: {
    width: '30%',
    height: '100px',
    border: '1px solid #c00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '5px'
  },

  calculator_item_equal: {
    width: '30%',
    height: '100px',
    border: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '5px',
    
  },
  num_container: {
    display: 'flex',
    width: '400px'
  },
  num: {
    borderBottom: '1px solid #111',
    width: 'auto',
    minWidth: '122px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px 5px 20px',
    fontFamily: 'Roboto',
    fontSize: '16px'
  },

  sign: {
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px 0'
  }
};

function App() {

  let [num1, setNum1] = useState('');
  let [num2, setNum2] = useState('');
  let [sign, setSign] = useState('');
  let [total, setTotal] = useState();
  let [signed, setSigned] = useState(true);

  const getSign = (sign) => {
    setSigned(signed = false)
    setSign(() => sign)
  }

  const getNum = (num) => {
    if(signed) {
      setNum1(() => num1.replace('', '') + num)
    } else {
      setNum2(() => num2.replace('', '') + num)
    }
    
  }

  const clear = () => {
    setNum1(num1 = '');
    setNum2(num2 = '');
    setTotal(total = '')
    setSign(() => sign = '')
    setSigned(signed = true)
  }


  const getTotal = () => {

    if(sign === '-') {
      setTotal(total = +num1 - +num2)
    } else if(sign === '+') {
      setTotal(total = +num1 + +num2)
    } else if(sign === '*') {
      setTotal(total = +num1 * +num2)
    } else if(sign === '/') {
      setTotal(total = +num1 / +num2)
    }
    
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>React Calculator</h1>
      <div style={styles.num_container}>
        <div style={styles.num}>{num1}</div>
        <div style={styles.sign}>{sign}</div>
        <div style={styles.num}>{num2}</div>
        <div style={styles.sign}> = </div>
        <div style={styles.num}>{total}</div>
      </div>
      <div style={styles.calculator}>
        <div style={styles.calculator_item} onClick={e => getNum(e.target.innerHTML)}>1</div>
        <div style={styles.calculator_item} onClick={e => getNum(e.target.innerHTML)}>2</div>
        <div style={styles.calculator_item} onClick={e => getNum(e.target.innerHTML)}>3</div>
        <div style={styles.calculator_item} onClick={e => getNum(e.target.innerHTML)}>4</div>
        <div style={styles.calculator_item} onClick={e => getNum(e.target.innerHTML)}>5</div>
        <div style={styles.calculator_item} onClick={e => getNum(e.target.innerHTML)}>6</div>
        <div style={styles.calculator_item} onClick={e => getNum(e.target.innerHTML)}>7</div>
        <div style={styles.calculator_item} onClick={e => getNum(e.target.innerHTML)}>8</div>
        <div style={styles.calculator_item} onClick={e => getNum(e.target.innerHTML)}>9</div>
        
        <div style={styles.calculator_item_dot} onClick={e => getNum(e.target.innerHTML)}>.</div>
        <div style={styles.calculator_item} onClick={e => getNum(e.target.innerHTML)}>0</div>
        <div style={styles.calculator_item_sign} onClick={e => getSign(e.target.innerHTML)}>*</div>
        
        <div style={styles.calculator_item_sign} onClick={e => getSign(e.target.innerHTML)}>/</div>
        <div style={styles.calculator_item_sign} onClick={e => getSign(e.target.innerHTML)}>+</div>
        <div style={styles.calculator_item_sign} onClick={e => getSign(e.target.innerHTML)}>-</div>
        
        <div style={styles.calculator_item_clear} onClick={clear}>Clear</div>
        <div style={styles.calculator_item_equal} onClick={getTotal}>=</div>
      </div>
    </div>
  );
}

export default App;
