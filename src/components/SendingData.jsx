import React, { useState } from "react";
import { Button, Box, CircularProgress } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";

function SendingData(props) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(props.data);
  console.log(props.confirm);

  function handleClick() {
    if (props.confirm) {
      setMessage("");
      setLoading(true);
      axios
        .post("https://simple-node-post.herokuapp.com/", {
          name: props.name
        })
        .then(function (response) {
          setLoading(false);
          console.log(response.data);
          setMessage(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div>
      <Box component="span" m={2} display="block"></Box>
      <Box component="span" display="block">
        <Button
          endIcon={<SendIcon />}
          variant="contained"
          size="large"
          color="primary"
          onClick={handleClick}
          type="submit"
          fullWidth
        >
          Send
        </Button>
      </Box>
      <Box component="span" display="block">
        <h1>{props.name}</h1>
        <h2>{message}</h2>
      </Box>
      {loading && <CircularProgress color="secondary" />}
    </div>
  );
}

export default SendingData;
