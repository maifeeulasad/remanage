/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable max-len */
import React from 'react';
// @ts-ignore
import { v4 as uuid } from 'uuid';
// @ts-ignore
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

const board = {
  columns: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Card title 1',
          description: 'Card content',
        },
        {
          id: 2,
          title: 'Card title 2',
          description: 'Card content',
        },
        {
          id: 3,
          title: 'Card title 3',
          description: 'Card content',
        },
      ],
    },
    {
      id: 2,
      title: 'Doing',
      cards: [
        {
          id: 9,
          title: 'Card title 9',
          description: 'Card content',
        },
      ],
    },
    {
      id: 3,
      title: 'Q&A',
      cards: [
        {
          id: 10,
          title: 'Card title 10',
          description: 'Card content',
        },
        {
          id: 11,
          title: 'Card title 11',
          description: 'Card content',
        },
      ],
    },
    {
      id: 4,
      title: 'Production',
      cards: [
        {
          id: 12,
          title: 'Card title 12',
          description: 'Card content',
        },
        {
          id: 13,
          title: 'Card title 13',
          description: 'Card content',
        },
      ],
    },
  ],
};

const ColumnAdder = ({ addColumn }:{ addColumn:any }) => (
  <div onClick={() => { addColumn({ id: uuid(), title: 'hmm' }); }}>
    Add column
  </div>
);

const Kanban = () => (
  <div>
    <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      initialBoard={board}
      renderColumnAdder={({ addColumn }:{ addColumn:any }) => <ColumnAdder addColumn={addColumn} />}
      allowAddCard={{ on: 'top' }}
      onNewCardConfirm={(draftCard:any) => ({
        id: new Date().getTime(),
        ...draftCard,
      })}
      onCardNew={console.log}
    />
  </div>
);

export { Kanban };
