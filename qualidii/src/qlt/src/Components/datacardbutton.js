import axios from "../API/axiosconfig";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const dataButtonConfig = {
  available: {
    text: "Available",
    variant: "flat",
    disabled: false,
    class: "available",
  },
  unavailable: {
    text: "Unavailable",
    variant: "flat",
    disabled: true,
    class: "taken",
  },
  owned: {
    text: "Release",
    variant: "flat",
    disabled: false,
    class: "owned",
  },
  loading: {
    text: "Loading...",
    variant: "flat",
    disabled: true,
  },
};

const DataCardButton = (props) => {
  const [button, setButton] = useState(buttonConfigManager(props));

  function buttonConfigManager(props) {
    if (props.userLoggedIn === props.productOwner) {
      return dataButtonConfig["owned"];
    } else if (props.productOwner) {
      return dataButtonConfig["unavailable"];
    } else {
      return dataButtonConfig["available"];
    }
  }

  //call setButton in here
  function buttonOnClickHandler() {
    if (button.text === "Available") {
      axios
        .post(`users/data/${props.userLoggedIn.userID}`, {ProductID: props.productId})
        .then(setButton(dataButtonConfig["owned"]))
        .then(console.log(props))
    } else if (button.text === "Release") {
      axios
        .post("products/unlock", { data: { productId: props.productId } })
        .then(setButton(dataButtonConfig["available"]));
    }
  }
  return (
    <>
      <style type="text/css">
        {`
                .btn:focus, .btn:active{
                    outline: none !important;
                    outline-offset: none !important;
                }
                .available, .available:focus {
                    background-color: white;
                    border-color: #44479A;
                    color: #44479A;
                }
                .available:hover {
                    background-color: #44479A;
                    border-color: #44479A;
                    color: white;
                }
                .available:hover span{
                    display: none;
                }
                .available:hover:before{
                    content: "Check Out";
                }
                .owned, .owned:focus{
                    background-color: #93BCD8;
                    border-color: #93BCD8;
                    color: white;
                }
                .owned:hover{
                    background-color: #82A6C2;
                    border-color: #82A6C2;
                    color: white;
                }

                .taken{
                    background-color: #B2B6BD;
                    color: white;
                    content: "Checked out by: ${props.ownerName}";
                }
            `}
      </style>
      <Button
        variant={`${button.variant}`}
        className={`${button.class}`}
        style={{ margin: "5px" }}
        disabled={button.disabled}
        onClick={buttonOnClickHandler}
      >
        <span>{button.text}</span>
      </Button>
    </>
  );
};

export default DataCardButton;
