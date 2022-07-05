import { useEffect, useState } from 'react';
import NxWelcome from './nx-welcome';
import store from './store';
import { observer } from 'mobx-react-lite';
import { getPuzzle } from './getPuzzle';

interface SudokuInputProps {
  value?: number;
  fn?: (value: any) => void;
  isDisabled?: boolean;
  x: number;
  y: number;
}

const SudokuInput = observer(({ value, x, y, fn, isDisabled = false }: SudokuInputProps) => {
  return (
    <input
      type="number"
      value={store.array[x][y] === '0' ? '' : store.array[x][y]}
      onChange={(e) => {
        store.setArray(x, y, e);
      }}
      className="w-[50px] h-[50px]  text-center text-2xl"
      disabled={isDisabled}
    />
  );
});

const SudokuRow = observer(({ array, x }: { array: any; x: number }) => {
  return (
    <div className="flex flex-wrap">
      {array.map((number: number, idx: number) => {
        return <SudokuInput key={x + '' + idx + ''} x={x} y={idx} />;
      })}
    </div>
  );
});

const Sudoku = observer(() => {
  return (
    <div className="flex justify-center align-middle h-screen w-[100%] ">
      <div className="flex flex-col justify-center align-middle">
        {store.array.map((row, index) => (
          <SudokuRow array={store.array} x={index} key={index} />
        ))}

        <button
          onClick={() => {
            store.array = getPuzzle(1);
          }}
        >
          Get Puzzle
        </button>
      </div>
    </div>
  );
});

export default Sudoku;
