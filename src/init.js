'use strict';

import { createNewListHandler } from './handlers/create-new-list.js'


document.getElementById('createNewList')
  .addEventListener('click', createNewListHandler);
