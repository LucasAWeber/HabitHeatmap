import { HeatMapValue } from "@uiw/react-heat-map";
import Habit from "../components/Habit";
import { Backdrop, Box, Button, Fade, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

export type HabitData = {
    name : string,
    type : string,
    data : HeatMapValue[],
}

export default function Home() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSave = () => {
        let newHabitData : HabitData = {
            name : newHabitName,
            type : newHabitType,
            data : []
        }
        setHabits([... habits,newHabitData]);
        handleClose();
        setNewHabitName("");
        setNewHabitGoal("");
        setNewHabitType("");
    };

    const [newHabitName, setNewHabitName] = useState("");
    const [newHabitGoal, setNewHabitGoal] = useState("");
    const [newHabitType, setNewHabitType] = useState("");

    const [habits, setHabits] = useState<HabitData[]>([]);
    let endDate = new Date();
    let startDate = new Date();
    let currentYear : number = endDate.getFullYear();
    let previousYear : number = currentYear - 1;
    startDate.setFullYear(previousYear);
    return (
        <Box sx={{ p: 4 }}>
            {habits.map((habit : HabitData) => {
                return (
                    <Habit habitData={habit} startDate={startDate} endDate={endDate}/>
                );
            })}
            <Button
                variant='contained'
                color="success"
                onClick={handleOpen}
                sx={{
                    position: "fixed",
                    bottom: 50,
                    right: 50,
                    zIndex: 1300,
                }}
            >
                New Habit
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        minWidth: 300,
                        width: '90%',
                        maxWidth: 400,
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Add a New Habit
                        </Typography>
                        <TextField
                            value={newHabitName}
                            onChange={(e) => setNewHabitName(e.target.value)}
                            label="Habit Name"
                            fullWidth
                            sx={{ mb: 2 }}
                            variant="outlined"
                        />
                        <TextField
                            value={newHabitGoal}
                            onChange={(e) => setNewHabitGoal(e.target.value)}
                            label="Goal"
                            fullWidth
                            sx={{ mb: 2 }}
                            variant="outlined"
                        />
                        <TextField
                            value={newHabitType}
                            onChange={(e) => setNewHabitType(e.target.value)}
                            label="Unit"
                            fullWidth
                            sx={{ mb: 2 }}
                            variant="outlined"
                        />
                        <Button variant="contained" fullWidth onClick={handleSave}>
                            Save
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}