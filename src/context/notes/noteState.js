import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const notesInitial = [
            {
              "_id": "66a8bc76d16291840b723e2c",
              "user": "66a82214e1d037a56cd872cf",
              "title": "Drink Water",
              "description": "Don't forget to drink water today!!!",
              "tag": "General",
              "date": "2024-07-30T10:12:06.239Z",
              "__v": 0
            },
            {
              "_id": "66a8bd50e857c1ed566d639d",
              "user": "66a82214e1d037a56cd872cf",
              "title": "Eat food regularly",
              "description": "Don't forget to eat food everyday!!!",
              "tag": "body-health",
              "date": "2024-07-30T10:15:44.193Z",
              "__v": 0
            },
    ];

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState