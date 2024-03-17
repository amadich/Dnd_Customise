# Customise the Appearance of an App during a Drag using react-beautiful-dnd snapshot Values

![image](https://github.com/amadich/Dnd_Customise/assets/74735976/13714f7a-adc7-40af-bd04-9ef1db29e6ec)

# react-beautiful-dnd -> hello-pangea/dnd (NextJS 14)
```bash
$npm i @hello-pangea/dnd
```

# snapshot Customise
```tsx
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
```
```ts
snapshot.isDragging ? 'bg-green-500' : 'bg-blue-400'
```

# You can now get a favorite list by moving the list of characters to the Favorite Characters list
Important: You must check whether the characters are present with the same id in your favorite characters so that you do not experience an error when moving between the two lists, because it prevents the presence of the same draggableId.

```ts
const [characters , UpdateCharacters] = useState(Characters);
  const [fav , UpdateFav] = useState(Fav);

  useEffect(() => {
    const filteredCharacters = characters.filter(character => 
      !fav.some(fav => fav.id === character.id));
  
      UpdateCharacters(filteredCharacters);
  
  },[]);
```

```ts
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
```
```tsx
<DragDropContext onDragEnd={handleOnDragEnd} >
          
                  <div className="flex space-x-4 " >
                    <Colum characters={characters}  listTitle="All Characters" droppableId="column1" />
                    <Colum characters={fav}  listTitle="Favorite List" droppableId="column2" />
                  </div>
               
</DragDropContext>
```
![image](https://github.com/amadich/Dnd_Customise/assets/74735976/2f6f7e35-0600-4131-802a-5aba94fafa94)


Thanks , Dont Forget to Add Star ⭐
