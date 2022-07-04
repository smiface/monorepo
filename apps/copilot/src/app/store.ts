import { fail } from 'assert';
import { makeAutoObservable } from 'mobx';

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  array = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ];

  setArray(x: number, y: number, e: any) {
    const v = parseFloat(e.target.value).toString()[0];
    if (Number(e.target.value) > 0) this.array[x][y] = parseFloat(e.target.value).toString()[0];
    const failAlert = () => {
      e.target.style.background = 'pink';
    };

    // проверить соседние ячейки
    // если в строке
    if (this.array[x].filter((el) => el === v).length > 1) {
      failAlert();
      return;
    }

    // если в столбце
    for (let i = 0; i < 9; i++) {
      let length = 0;
      console.log(this.array[i][y]);
      if (this.array[i][y] == v && i !== x) {
       
        failAlert();
        return;
      }
    }

    e.target.color = 'black';
    e.target.style.border = 'border: 1px rgba(128, 128, 128, 0.374) solid;';
    e.target.style.background = 'unset';
    
  }
}
const store = new Store();
export default store;
