import React from "react";
import { Droppable , Draggable } from "@hello-pangea/dnd";

interface ColumProps {
    characters: { id: number; name: string; image: string; }[]; // Update the characters prop to accept an array of objects
    droppableId: string;
    listTitle?: string;
}

export default class Colum extends React.Component<ColumProps> {
   render(): React.ReactNode {
      const { characters , droppableId , listTitle } = this.props;
      return (
         <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
               <ul className="table m-auto border bg-green-300 " {...provided.droppableProps} ref={provided.innerRef}>
                  <li className="text-xl font-bold" > { listTitle } </li>
                  {characters.map((character, index) => (
                     <Draggable key={character.id} draggableId={character.id.toString()} index={index}>
                        {(provided, snapshot) => (
                           <li 
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className={`flex items-center space-x-4 select-none border-b border-b-[#333] p-2  ${snapshot.isDragging ? 'bg-green-500' : 'bg-blue-400'}`}  >
                              <img src={character.image} alt={character.name} width={30} draggable={false} />
                              <div className="flex space-x-4 items-center justify-between">
                                 <p key={character.id}>{character.name}</p>
                                 <span className=" text-slate-100 text-sm font-bold" > id/@{character.id} </span>
                              </div>
                           </li>
                        )}
                     </Draggable>
                  ))}
                  {provided.placeholder}
               </ul>
            )}
         </Droppable>
      );
   }
}