import { useState } from "react";
import TicTacToeModel from "../model/tictactoeModel";
import Elem from "../view/Elem";
import "./tictactoe.css";
const tictacToeModel = new TicTacToeModel();
//komponensen kívűl példányosítjuk a modelt
export default function TicTacToe(props) {
  
  //const list = tictacToeModel.getList();

const [list, setList]=useState(tictacToeModel.getList())
const [aktJatekos, setAktJatekos] = useState(tictacToeModel.getAktjatekos())


  function kattintas(id){
    /**Itt kezdjük el a gyerektől jövő infót-szülő komponensben */
    console.log(id)
    tictacToeModel.setAllapot(id)
    setAktJatekos(tictacToeModel.getAktjatekos())
   //újra lekésrjük a lista értékét
    setList(tictacToeModel.getList())

  }

  const [szam, setSzam]=useState(0)

  function novel(){
    //szam++ nem lehet
    let a = szam+1
    setSzam(a)
  }
  
  return (
    <div className="jatek">

    <div className="pelda">
    <h3>State használata példa</h3>
    <button onClick={novel}>növel</button>
    <p>{szam}</p>
    </div>

      <h2>Tic-Tac-Toe</h2>
      <div className="jatekter">
        {list.map((elem, index) => {
          return <Elem kattintasfv={kattintas} ertek={elem} key={index} index={index}/>;
        //ertek
        })}
      </div>
      <p>A következő játékos: {aktJatekos}</p>
    </div>
  );
}
