import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [alphabet, setAlphabet] = useState(false);
  const [length, setLength] = useState(false);
  const [reverse, setReverse] = useState(false);

  const goods = [...goodsFromServer];

  if (alphabet) {
    goods.sort((a, b) => a.localeCompare(b));
  }

  if (length) {
    goods.sort((a, b) => a.length - b.length);
  }

  if (reverse) {
    goods.reverse();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${alphabet ? '' : 'is-light'}`}
          onClick={() => {
            setAlphabet(true);
            setLength(false);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${length ? '' : 'is-light'}`}
          onClick={() => {
            setLength(true);
            setAlphabet(false);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${reverse ? '' : 'is-light'}`}
          onClick={() => setReverse(!reverse)}
        >
          Reverse
        </button>

        {(alphabet || length || reverse) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setAlphabet(false);
              setLength(false);
              setReverse(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
