import React, { useEffect, useState } from 'react';
import Kartlar from '../Cards';
import MyMenu from '../MyMenu';
import {DndContext} from '@dnd-kit/core';

import {Draggable} from '../Draggable';
import {DroppableArea} from '../Droppable';
function App() {
  return (
    <div>
     <MyMenu/>
    </div>
  );
}

export default App;
