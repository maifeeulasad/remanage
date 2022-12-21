import React from 'react';
import { Kanban } from '../kanban/Kanban';

const Landing = () => (
  <Kanban columns={[{
    id: 'Backlog',
    title: 'Backlog',
    tasks: ['prem', 'taka', 'time', 'poralekha'],
  },
  {
    id: 'ToDo',
    title: 'To Do',
    tasks: ['hmmm... shob'],
  },
  {
    id: 'WIP',
    title: 'WIP',
    tasks: ['janinah'],
  },
  {
    id: 'Completed',
    title: 'Completee',
    tasks: [],
  },
  ]}
  />
);

export { Landing };
