import { observable, action, makeObservable } from "mobx";

class HeaderStore{
    open = false;
    constructor() {
        this.changeOpen = this.changeOpen.bind(this);
        makeObservable(this, {
            open: observable,
            changeOpen: action
        })
    }
    changeOpen(value:boolean) {
        this.open = value;
      }
}

const headerStore = new HeaderStore();
export default headerStore;