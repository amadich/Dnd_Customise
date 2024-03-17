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

Thanks , Dont Forget to Add Star ⭐
