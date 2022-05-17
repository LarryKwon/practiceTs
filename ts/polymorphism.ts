interface SStorage<T> {
    [key:string]:T
}

class LocalStroage<T>{
    private storage:SStorage<T> = {}
    set(key:string, value:T){
        this.storage[key] = value;
    }
    remove(key:string){}
    get(key:string): T{
        return this.storage[key];
    }
    clear(){
        this.storage = {};
    }
}

const stringsStorage = new LocalStroage<string>();
