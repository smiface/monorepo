import { makeAutoObservable } from "mobx"
class Store {
    constructor(){
        makeAutoObservable(this)
    }

    
}