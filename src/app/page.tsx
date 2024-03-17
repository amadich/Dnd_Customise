'use client';
import Characters from "@/api/characters.json";
import Fav from "@/api/fav.json";
import Colum from "@/components/Colum";
import { useEffect, useState } from "react";

import { DragDropContext } from "@hello-pangea/dnd";

export default function Home() {

  const [characters , UpdateCharacters] = useState(Characters);
  const [fav , UpdateFav] = useState(Fav);

  useEffect(() => {
    const filteredCharacters = characters.filter(character => 
      !fav.some(fav => fav.id === character.id));
  
      UpdateCharacters(filteredCharacters);
  
  },[]);

  const handleOnDragEnd = (result: any) => {
    if(!result.destination) return;

    const { source, destination } = result;

    const sourceList = 
      source.droppableId === 'column1' ? characters : fav; 

    const destinationList = 
      destination.droppableId === 'column1' ? characters :fav;

    const [removed] = sourceList.splice(source.index, 1);
    destinationList.splice(destination.index, 0, removed);

    if (source.droppableId === 'column1') {
      UpdateCharacters([...sourceList]);
    } else {
      UpdateFav([...sourceList]);
    }

  };

  useEffect(() => {
    console.log(fav);
    console.log(characters);
    
  }, [characters, fav]);

  return (
    <main className=" block items-center m-auto  " >
        
        <h1 className=" text-center text-blue-500 font-[cursive] font-bold text-xl border-b-2 border-b-black p-3 m-3 " >Adventeure Time Characters</h1>

        <DragDropContext onDragEnd={handleOnDragEnd} >
          
                  <div className="flex space-x-4 " >
                    <Colum characters={characters}  listTitle="All Characters" droppableId="column1" />
                    <Colum characters={fav}  listTitle="Favorite List" droppableId="column2" />
                  </div>
               
        </DragDropContext>
        
        

    </main>
  );
}

