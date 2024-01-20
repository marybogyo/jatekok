export default function Elem(props) {
  function kattintas(){
    console.log("hahó",props.index)
    props.kattintasfv(props.index)
    /**ez történik, ha rákattintunk az elemre
     * meghívjuk a szülő megfelelő metódusát
     */
    
  }
  
    return (
    <div className="elem" onClick={kattintas}>
      <p>{props.ertek}</p>
    </div>
  );

}
