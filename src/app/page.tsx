'use client';
import Characters from "@/api/characters.json";
import Colum from "@/components/Colum";
import { useState } from "react";

import { DragDropContext } from "@hello-pangea/dnd";

export default function Home() {

  const [characters , UpdateCharacters] = useState(Characters);

  const handleOnDragEnd = (result: any) => {
    if(!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    UpdateCharacters(items);

  };

  return (
    <main className=" block items-center m-auto  " >
        
        <h1 className=" text-center text-blue-500 font-[cursive] font-bold text-xl border-b-2 border-b-black p-3 m-3 " >Adventeure Time Characters</h1>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          
                  <Colum characters={characters} />
               
        </DragDropContext>
        
        

    </main>
  );
}

