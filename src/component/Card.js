export default function Card(props) {
  function kattintas(){
    console.log(props.obj.id)
    props.kattintas(props.obj.id)
  }
  return (
    <div className="card col-sm-4">
      <div className="card-header">
        <h5>{props.obj.nev}</h5>
      </div>
      <div className="card-body">
      <img
        src={props.obj.img}
        className="card-img-top"
        alt="..."
      />
     
      </div>
      <div className="card-footer">
      <button type="button" onClick={kattintas}>Foglalás</button>
          
      </div>
    </div>
  );
}
