import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  <Button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </Button>;
};

export default Button;
