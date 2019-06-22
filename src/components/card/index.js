import React from 'react';

import style from './index.module.css';

const card = ({photo,races,name})=>(
<div className={style.customCard} >
<img className={style.imgPet} src={photo} alt="mascota.png"/>

<div>
  <title>{races}</title>
  <title>{name}</title>

</div>


</div>
)

export default card;

