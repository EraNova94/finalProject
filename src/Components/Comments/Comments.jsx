import { Box, Button, Container, Grid, Paper } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { commentContext } from "../../Contexts/CommentsContextProvider";
import { authContext } from "../../Contexts/AuthContextProvider";
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
          <Grid display="flex" justifyContent="space-evenly">
            <Box px="10px" width="40%">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={comment}
                onChange={e => setComment(e.target.value)}></textarea>
              <Box
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                width="53%"
                py="10px">
                {user.email ? (
                  <Avatar sx={{ fontSize: "12px" }}>
                    {user.email[0].toUpperCase()}
                  </Avatar>
                ) : null}
                {user.email ? <h5>{user.email}</h5> : null}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAdd()}>
                  Send
                </Button>
              </Box>
            </Box>
            <Box
              width="40%"
              height="100%"
              border="2px solid black"
              borderRadius="10px">
              {comments.length !== 0
                ? comments.map(elem => (
                    <Box width="96%" px="10px" py="10px" key={elem.id}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}>
                        <Avatar sx={{ fontSize: "12px" }}>
                          {elem.customer[0]}
                        </Avatar>
                        <h4 style={{ margin: "0" }}>{elem.customer}</h4>
                      </div>
                      <div style={{ hyphens: "auto" }}>{elem.comment}</div>
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
