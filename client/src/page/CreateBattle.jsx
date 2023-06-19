import React from 'react';

import { pageHOC } from '../components';

const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Hello From CreateBattle</h1>
    </div>
  )
};

export default pageHOC(
  CreateBattle,
  <>Create <br/> a new Battle</>,
  <>Create your own battle and wait for other players to join you</>
);