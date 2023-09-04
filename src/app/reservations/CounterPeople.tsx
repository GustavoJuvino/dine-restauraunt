'use client';

import React, { useState } from 'react';
import { Minus, Plus } from '../../../public/assets/svgs';

function CounterPeople() {
  const [people, setPeople] = useState(4);

  return (
    <div
      className="
        mt-9
        flex
        h-[41px]
        w-full
        items-center
        justify-between
        border-b-[1px]
        border-[#8E8E8E]
        px-8
        pb-4
      "
    >
      <Minus className="cursor-pointer" />
      <h3 className="text-base font-bold mobile:text-body-2">
        {`${4} people`}
      </h3>
      <Plus className="cursor-pointer" />
    </div>
  );
}

export default CounterPeople;
