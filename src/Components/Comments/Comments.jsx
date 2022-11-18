import { Box, Button, Container, Grid, Paper } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { commentContext } from "../../Contexts/CommentsContextProvider";
import { authContext } from "../../Contexts/AuthContextProvider";
import "./Comments.css";
const Comments = () => {
  const { addComment, comments, readComments } = useContext(commentContext);
  // console.log(comments);
  const { user } = useContext(authContext);
  const [comment, setComment] = useState("");
  const [customer, setCustomer] = useState([]);
  // console.log(customer);
  useEffect(() => {
    setCustomer(user.email);
  }, [user]);
  function handleAdd() {
    if (!user.email) {
      alert("Please, Sign In first.");
      return;
    }
    let obj = {
      comment,
      customer,
    };
    addComment(obj);
    setComment("");
    // setCustomer("");
  }
  useEffect(() => {
    readComments();
  }, []);

  return (
    <Grid bgcolor="black" height="100%" py="20px">
      <Container maxWidth="lg">
        <Paper>
          <Box textAlign="center">
            <h2>Please, leave some review for us.</h2>
            <h3>We'll do our best to make your viewing more pleasant!</h3>
          </Box>
          <Grid
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            width="100%"
            className="comments__block">
            <Box className="comments__block-left" px="10px" width="40%">
              <textarea
                name=""
                id="comments__block-textarea"
                cols="30"
                rows="10"
                value={comment}
                onChange={e => setComment(e.target.value)}></textarea>
              <Box
                className="comments__block-mail-btn"
                display="flex"
                alignItems="center"
                gap="10px"
                // width="53%"
                py="10px">
                {user.email ? (
                  <Avatar sx={{ fontSize: "12px", backgroundColor: "red" }}>
                    {user.email[0].toUpperCase()}
                  </Avatar>
                ) : null}
                {user.email ? (
                  <h5 style={{ margin: "0" }}>{user.email}</h5>
                ) : null}
                <Button
                  id="comments__block-left-btn"
                  variant="contained"
                  color="primary"
                  onClick={() => handleAdd()}>
                  Send
                </Button>
              </Box>
            </Box>
            <Box
              className="comments__block-right"
              width="40%"
              display="flex"
              flexDirection="column"
              gap="10px"
              pb="10px">
              {comments.length !== 0
                ? comments.map(elem => (
                    <Box
                      margin="10px"
                      border="2px solid black"
                      borderRadius="10px"
                      key={elem.id}>
                      <Box width="96%" px="10px" py="10px">
                        <div
                          style={
                            {
                              // display: "flex",
                              // alignItems: "center",
                              // gap: "5px",
                            }
                          }>
                          <Avatar sx={{ fontSize: "12px", bgcolor: "red" }}>
                            {elem.customer[0].toUpperCase()}
                          </Avatar>
                          <h4 style={{ margin: "0" }}>{elem.customer}</h4>
                        </div>
                        <div style={{ hyphens: "auto" }}>{elem.comment}</div>
                      </Box>
                    </Box>
                  ))
                : null}
            </Box>
          </Grid>
        </Paper>
      </Container>
    </Grid>
  );
};

export default Comments;
