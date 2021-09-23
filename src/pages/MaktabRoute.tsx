import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Fade,
  Grid,
  Slide,
  Snackbar,
  Typography,
} from "@material-ui/core";
import Header from "../components/header";
import EmployeeBox from "../components/employee-box";
import axios from "axios";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

interface IEmployee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}

const fetchEmployees = async () => {
  const res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
  return res.json();
};

function Route1() {
  const { data, status } = useQuery("employees", fetchEmployees);

  return (
    <>
      <Header disabled={status == "loading"} />
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {status == "loading" && <CircularProgress />}
      </div>
      <Container style={{ marginTop: "1.5rem" }}>
        <Grid container spacing={5} justifyContent="center">
          {status == "success" &&
            data.data.map((item: any, index: any) => (
              <Slide
                direction={index % 2 == 0 ? "up" : "right"}
                in={true}
                mountOnEnter
                unmountOnExit
                timeout={index * 90}
              >
                <Grid item>
                  <EmployeeBox
                    avatarSrc={"https://i.pravatar.cc/300?u=" + item.id}
                    name={item.employee_name}
                    age={item.employee_age}
                    salary={item.employee_salary.toString()}
                  />
                </Grid>
              </Slide>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Route1;
