import React, { useEffect, useState } from 'react';
import Kartlar from '../Cards';
import MyMenu from '../MyMenu';
import {DndContext} from '@dnd-kit/core';

import {Draggable} from '../Dnd-kit/Draggable';
import {DroppableArea} from '../Dnd-kit/Droppable';
import Example from '../Dnd-kit/Draggable_card';
function App() {
  return (
    <div>
     <MyMenu/>
    </div>
  );
}

export default App;
