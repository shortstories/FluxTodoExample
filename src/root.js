/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './views/TodoContainer';

ReactDOM.render(<TodoContainer />, document.getElementById('todoapp'));

// TODO: remove this

import TodoActions from './data/TodoActions';

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');