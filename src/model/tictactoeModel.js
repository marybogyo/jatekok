export default class TicTacToeModel{
#list=[]
#aktjatekos="X"
    constructor(){

        this.#list=["", "", "", "O", "", "X", "", "", ""]
    }
    getList(){
        //a listával úgy térünk vissza, hogy új memeóriaterületre másoljuk
        //teljesen új listát hoz létre
        return [...this.#list];
    }

    getAktjatekos(){
        return this.#aktjatekos
    }

    setAllapot(id){
        this.#list[id]=this.#aktjatekos;
        if(this.#aktjatekos === "X"){
            this.#aktjatekos="O"
        }else{
            this.#aktjatekos="X"
        }
        console.log(this.#aktjatekos)
        console.log(this.#list)
    }
}

