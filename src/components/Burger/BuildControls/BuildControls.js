import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const Controls = [
  { lable: "Lettuce", type: "alettuce" },
  { lable: "Bacon", type: "bacon" },
  { lable: "Cheese", type: "cheese" },
  { lable: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  <div className={classes.BuildControls}>
    <p>
      Subtotal: <strong>${props.price.toFixed(2)}</strong>
    </p>
    {Controls.map((ctrl) => {
      <BuildControl
        key={ctrl.lable}
        lable={ctrl.lable}
        added={() => props.ingredientAdded(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />;
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      {props.isAuth ? "Order Now" : "SIGN UP TO ORDER"}
    </button>
  </div>;
};

export default BuildControls;
