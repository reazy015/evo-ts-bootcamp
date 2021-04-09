import React from 'react';
import './App.css';
import generateRandomIntArray from './utils/generateRandomIntArray';
import bubbleSort from './utils/bubbleSort';

type AppState = {
  divList: number[];
  intervalId?: NodeJS.Timeout;
  isSorting: boolean;
};

type AppProps = {};

export default class App extends React.Component<AppProps, AppState> {
  state = {
    divList: generateRandomIntArray(25),
    intervalId: undefined,
    isSorting: false
  };

  onClickHandler = (): void => {

    const sortingInterval = setInterval(() => {
      const { divList, intervalId } = this.state;
      const newSortedList = bubbleSort(divList);

      if (newSortedList) {
        return this.setState({ divList: newSortedList })
      }

      clearInterval(intervalId);
      this.setState({
        isSorting: false
      });
    }, 100);

    this.setState({
      intervalId: sortingInterval,
      isSorting: true
    })
  };

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value }} = e;

    this.setState({
      divList: generateRandomIntArray(Number(value))
    })
  }

  render() {
    const { divList, isSorting } = this.state;

    return (
      <div className='wrapper'>
        <div className='input'>
          <label>
            Number of items
            <input
              type="number"
              value={ divList.length }
              onChange={ this.onChangeHandler }
              disabled={ isSorting }
            />
          </label>
        </div>
        <button
          className='button'
          onClick={ this.onClickHandler }
          disabled={ isSorting }
        >
          { isSorting ? 'Please wait' : 'Start sorting' }
        </button>
        <div className='list-wrapper'>
          { divList.map((item) => (
            <div style={{ height: item }} className='item' />
          )) }
        </div>
      </div>
    )
  }
}