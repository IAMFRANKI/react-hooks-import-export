import React from "react";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;

import {trees, wildlife} from "./parks/RockyMountain";

console.log(trees);
// => 'Aspen and Pine'

wildlife();
// => 'Elk, Bighorn Sheep, Moose'