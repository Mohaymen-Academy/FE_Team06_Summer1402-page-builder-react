import React, { useState, useContext, useRef, useReducer, useEffect } from 'react';
import "../assets/Styles/Page1.css"
import { ElementsContext } from './Layout';
import DropAbleDiv from './DropAbleDiv';
import { v4 as uuid } from 'uuid'
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      // const id = uuid()
      return [...state, action.id];
    // return [...state, action.id];
    case 'delete':
      state.splice(action.deleteitem, 1)
      return [...state];
    case 'reorder':
      var element = state[action.selecteditem];
      state.splice(action.selecteditem, 1);
      state.splice(action.replaceditem, 0, element);
      return [...state];

  }
}

function WhitePage({
  id, pagename, leftsidepager, elements, elementsID
}) {
  useEffect(() => {
    const interval = setInterval(checkdata, 5000);
    return () => clearInterval(interval);
  }, [])
  // console.log()
  async function checkdata() {
    // console.log(Object(elements))

    // console.log('checkdata', canvasvalues.current.elements);
    // fetch('http://localhost:3000/pages',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       [id]: {
    //         elements: canvasvalues.current.elements
    //       }
    //     })

    //   })
  }
  function zarp() {

  }
  // console.log(elements)

  const [isDragging, setIsDragging] = useState(false); // New state for drag state
  const values = useContext(ElementsContext);
  const [theelements, dispatch] = useReducer(reducer, elementsID)
  // console.log(theelements)
  const canvasvalues = useRef(
    {
      elements: elements,
      draggedItemHeight: 0,
      itemIsDragged: false,
      direction: '',
      selecteditem: null,
      replaceditem: null,
      choosenitem: null,
    }
  );
  function handleonDrop(e) {
    e.preventDefault();
    if (values.current.dragged) {
      const id = uuid();
      canvasvalues.current.choosenitem = theelements.length;
      canvasvalues.current.elements[id] = { type: values.current.dragged, states: {} };
      dispatch({ type: 'add', newitem: values.current.dragged, id: id })
      values.current.dragged = null;
    }
  }
  // console.log(canvasvalues.current.elements, 'here')
  // console.log(theelements, 'thelements')
  return (
    <>
      <div
        data-zarp={'zarp'}
        // id={id}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleonDrop}
        className={`flex flex-col max-w-[350px] h-[40rem] w-[100%] vsmmobile:h-[550px] smmobile:h-[550px] mobile:h-[550px] mb-5  tablet:h-[550px] bg-white`}
      >
        <div className={` ${elements.length != 0 ? "hidden" : ''} group flex flex-col justify-center items-center border-dashed border-2  border-[#0066FF] rounded-lg  vsmmobile:h-[140px]  h-[150px] m-7`}>
          <div className="flex flex-col justify-center items-center w-[50px] h-[50px] mt-3 vsmmobile:h-[35px] vsmmobile:w-[35px] rounded-lg bg-[#dce5f1]">
            <img className="w-[80%] h-[80%] m-[1px]" src="images/plus.png" />
          </div>
          <div className="text-[#0066FF] m-4 mb-1">یک قالب را بکشید و رها کنید</div>
        </div>
        <div
          className='flex flex-col px-[10px] mt-5 overflow-y-auto'>
          {theelements.map((canvas, index) => {
            // console.log(canvas)
            return <DropAbleDiv key={canvas} type={canvasvalues.current.elements[canvas].type} canvasvalues={canvasvalues} index={index} dispatch={dispatch} leftsidePager={leftsidepager} id={canvas} states={canvasvalues.current.elements[canvas].states} />
          })}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default WhitePage;