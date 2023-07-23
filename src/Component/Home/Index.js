import { Container, Box, Button, Grid, Link, Alert, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Index'
import TodoDashboard from './TodoDashboard'
import SearchData from '../Header/SearchData'
import AddTask from '../Header/AddTask'
import Snackbar from '@mui/material/Snackbar';

const Index = () => {

  const [todoData, setTodoData] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [open, setOpen] = useState(false);

  //Add todo
  function addTodo(task, description){
    const lastVal = todoData[todoData.length - 1];
    setTodoData([...todoData, {id : lastVal? lastVal.id + 1 : 1, title:task, description:description, stage:1}]);
    setSearchValue([]);
  }

  //Search todo list
  function searchAction(value){
    const matches = todoData.filter(({title}) =>{
      if(title.includes(value)){
        return true
      }
    });
    setSearchValue(matches.length>0?matches:[{}])
  }

  //Move action 
  function moveAction(id, stage){
    console.log(id, stage)

    const filterData = todoData.map(val => {
      if(val.id == id){
        return {...val, stage:stage}
      }else{
        return val
      }
    })
    setTodoData(filterData)
  }

  // Delete Action
  function removeAction(id){
    const filtertodoData = todoData.filter(val => val.id != id);
    setTodoData(filtertodoData);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <Box py={3}>
          <Container maxWidth="xl">
            <Box>
              <Grid justifyContent='space-between' container>
                <Grid xs={3}>
                  <SearchData searchAction={searchAction} searchValue={searchValue}/>
                </Grid>
                <Grid xs={3} align="end">
                  <AddTask
                    addTodo={addTodo}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <TodoDashboard
            todoData={todoData}
            searchValue={searchValue}
            moveAction={moveAction}
            removeAction={removeAction}
        />

<Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Your Task deleted successfully
            </Alert>
          </Snackbar>
    </>
  )
}

export default Index