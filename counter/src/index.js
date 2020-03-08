import React, { Component } from 'react';
import {render} from 'react-dom';

// import Counter from './counter-props';
import Counter from './counter-state';
render(<Counter /> , document.getElementById('root'));
// render(<Counter initCount={10} /> , document.getElementById('root'));
// render(<Counter initCount="10" /> , document.getElementById('root'));