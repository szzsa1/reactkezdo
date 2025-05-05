import React, { useState } from 'react'
import Alert from './Alert';
interface iProp{
    onClick: () => void;
    children: React.ReactNode;
}

const Button = (props: iProp) => {
    const [showAlert, setShowAlert] = useState(false)
    function click()
    {
        //alert("Kattintottál");
        setShowAlert(true);
        props.onClick();
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }
  return (
    <>
    <button onClick={click}>
          {props.children}
    </button>
    {
        showAlert && <Alert/>
    }
    
    </>
  )
}

export default Button