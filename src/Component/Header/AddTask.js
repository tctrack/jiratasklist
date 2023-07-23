import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor:'pointer'
};

const AddTask = ({addTodo}) => {

    //Modal popup
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Todo
    const [task, setTask] = useState();
    const [description, setDescription] = useState();

    const handleChange = (e) =>{
        if(e.target.name == "task"){
            setTask(e.target.value)
        }else if(e.target.name == "description"){
            setDescription(e.target.value)
        }
    }

    const actionTodo = (task, description) =>{
        addTodo(task, description);
        handleClose();
        setTask('');
        setDescription('');
    }
    
  return (
    <>
        <Button variant="contained" startIcon={<AddIcon me={5} />} onClick={handleOpen}>
            Add Task
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <CloseIcon sx={closeButtonStyle} onClick={handleClose}/>
                <Typography id="modal-modal-title" variant="h5" fontWeight={600} component="h2" align='center' mb={3} mt={1}>
                    Add your task
                </Typography>
                <TextField label="Add Title" variant="filled" fullWidth size="small" onChange={handleChange} value={task} name="task" />
                
                <Box mt={2}>
                <TextField
                    label="Description"
                    multiline
                    rows={4}
                    variant="filled"
                    fullWidth
                    value={description}
                    name="description"
                    onChange={handleChange}
                />
                </Box>
                <Box align="center" mt={3}>
                    <Button variant="contained" onClick={() => {actionTodo(task, description)}}>
                        Add Task
                    </Button>
                </Box>
            </Box>
        </Modal>
    </>
  )
}

export default AddTask