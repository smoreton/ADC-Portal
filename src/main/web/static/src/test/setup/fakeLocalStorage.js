class FakeLocalStorage {
  storage=[]

  constructor(){

  }

  getItem(itemRef){
    if(this.storage[itemRef]!= undefined){
      return this.storage[itemRef];
    }else{
      return {};
    }
  }

  setItem(itemRef, item){
    this.storage[itemRef]=item;
  }
}

export default new FakeLocalStorage();