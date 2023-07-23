import { Box, Button, Card, CardContent, Container, Grid, IconButton, Typography, capitalize } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const TodoDashboard = ({todoData, searchValue, moveAction, removeAction}) => {

    const [data, setData] = useState();

    useEffect(()=>{
        if(searchValue.length > 0){
            setData(searchValue);
        }else{
            setData(todoData);
        }
    }, [searchValue, todoData])

  return (
    <>
        <Box className="todoDashboard">
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item md={3}>
                        <Box className="taskStep" id="openTask" p={2}>
                            <Typography variant="h3" fontSize={14} textTransform='capitalize' fontWeight='600' color='#2c2c2c' mb={3}>
                                open
                            </Typography>
                            <Box className="innerTaskList">
                                {
                                    data?.map(({id, title, description, stage})=>{
                                        if(stage == 1){
                                            return(
                                                <Box mb={2} key={id}>
                                                    <Card variant="outlined" >
                                                        <CardContent>
                                                            <Box display='flex' alignItems='center' justifyContent="space-between">
                                                                <Typography variant='h6' fontSize='14px' fontWeight='600'>{id}</Typography>
                                                                <Button size="small" color="error" startIcon={<DeleteIcon/>} onClick={() => removeAction(id)}>
                                                                    Delete
                                                                </Button>
                                                            </Box>
                                                            <Box container my={2}>
                                                                <Typography variant='h5' fontSize='18px' fontWeight='500' mb={1}>{title}</Typography>
                                                                <Typography variant='p' fontSize='12px' fontWeight='500' mb={1}>{description}</Typography>
                                                            </Box>
                                                            <Grid >
                                                                <Grid align="end">
                                                                    <IconButton  size="small" color="default" onClick={()=>moveAction(id, stage+1)}>
                                                                        <ArrowCircleRightIcon fontSize="inherit" />
                                                                    </IconButton>
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </Card>
                                                </Box>
                                            )
                                        }
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Box className="taskStep" id="inprogressTask" p={2}>
                            <Typography variant="h3" fontSize={14} textTransform='capitalize' fontWeight='600' color='#2c2c2c' mb={3}>
                                In Progress
                            </Typography>
                            <Box className="innerTaskList">
                                {
                                    data?.map(({id, title, description, stage})=>{
                                        if(stage == 2){
                                            return(
                                                <Box mb={2} key={id}>
                                                    <Card variant="outlined" >
                                                        <CardContent>
                                                            <Box display='flex' alignItems='center' justifyContent="space-between">
                                                                <Typography variant='h6' fontSize='14px' fontWeight='600'>{id}</Typography>
                                                                <Button size="small" color="error" startIcon={<DeleteIcon/>} onClick={() => removeAction(id)}>
                                                                    Delete
                                                                </Button>
                                                            </Box>
                                                            <Box container my={2}>
                                                                <Typography variant='h5' fontSize='18px' fontWeight='500' mb={1}>{title}</Typography>
                                                                <Typography variant='p' fontSize='12px' fontWeight='500' mb={1}>{description}</Typography>
                                                            </Box>
                                                            <Grid container justifyContent="space-between">
                                                                <Grid item>
                                                                    <IconButton size="small" color="default" onClick={()=>moveAction(id, stage-1)}>
                                                                        <ArrowCircleLeftIcon fontSize="inherit" />
                                                                    </IconButton>
                                                                </Grid>
                                                                <Grid item align="end">
                                                                    <IconButton  size="small" color="default" onClick={()=>moveAction(id, stage+1)}>
                                                                        <ArrowCircleRightIcon fontSize="inherit" />
                                                                    </IconButton>
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </Card>
                                                </Box>
                                            )
                                        }
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Box className="taskStep" id="inQATask" p={2}>
                            <Typography variant="h3" fontSize={14} textTransform='capitalize' fontWeight='600' color='#2c2c2c' mb={3}>
                                In QA
                            </Typography>
                            <Box className="innerTaskList">
                                {
                                    data?.map(({id, title, description, stage})=>{
                                        if(stage == 3){
                                            return(
                                                <Box mb={2} key={id}>
                                                    <Card variant="outlined" >
                                                        <CardContent>
                                                            <Box display='flex' alignItems='center' justifyContent="space-between">
                                                                <Typography variant='h6' fontSize='14px' fontWeight='600'>{id}</Typography>
                                                                <Button size="small" color="error" startIcon={<DeleteIcon/>} onClick={() => removeAction(id)}>
                                                                    Delete
                                                                </Button>
                                                            </Box>
                                                            <Box container my={2}>
                                                                <Typography variant='h5' fontSize='18px' fontWeight='500' mb={1}>{title}</Typography>
                                                                <Typography variant='p' fontSize='12px' fontWeight='500' mb={1}>{description}</Typography>
                                                            </Box>
                                                            <Grid container justifyContent="space-between">
                                                                <Grid item>
                                                                    <IconButton size="small" color="default" onClick={()=>moveAction(id, stage-1)}>
                                                                        <ArrowCircleLeftIcon fontSize="inherit" />
                                                                    </IconButton>
                                                                </Grid>
                                                                <Grid item align="end">
                                                                    <IconButton  size="small" color="default" onClick={()=>moveAction(id, stage+1)}>
                                                                        <ArrowCircleRightIcon fontSize="inherit" />
                                                                    </IconButton>
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </Card>
                                                </Box>
                                            )
                                        }
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <Box className="taskStep" id="doneTask" p={2}>
                            <Typography variant="h3" fontSize={14} textTransform='capitalize' fontWeight='600' color='#2c2c2c' mb={3}>
                                Done
                            </Typography>
                            <Box className="innerTaskList">
                                {
                                    data?.map(({id, title, description, stage})=>{
                                        if(stage == 4){
                                            return(
                                                <Box mb={2} key={id}>
                                                    <Card variant="outlined" >
                                                        <CardContent>
                                                            <Box display='flex' alignItems='center' justifyContent="space-between">
                                                                <Typography variant='h6' fontSize='14px' fontWeight='600'>{id}</Typography>
                                                                <Button size="small" color="error" startIcon={<DeleteIcon/>} onClick={() => removeAction(id)}>
                                                                    Delete
                                                                </Button>
                                                            </Box>
                                                            <Box container my={2}>
                                                                <Typography variant='h5' fontSize='18px' fontWeight='500' mb={1}>{title}</Typography>
                                                                <Typography variant='p' fontSize='12px' fontWeight='500' mb={1}>{description}</Typography>
                                                            </Box>
                                                            <Grid container justifyContent="space-between">
                                                                <Grid item>
                                                                    <IconButton size="small" color="default" onClick={()=>moveAction(id, stage-1)}>
                                                                        <ArrowCircleLeftIcon fontSize="inherit" />
                                                                    </IconButton>
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>
                                                    </Card>
                                                </Box>
                                            )
                                        }
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
  )
}

export default TodoDashboard