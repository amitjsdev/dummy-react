import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(()=>{
          console.log('count=',count)
          return count 
  },[count]
  );

  const hanleCOuntIncrease = () => {
    console.log('item=',item)
    setItem(item + 1)
  }

  return <div>
	  <h2>{multiCountMemo}</h2>
	  <button onClick={()=>{setCount(count + 1)}}>Increase Count</button>
	  <h2>{item}</h2>
	  <button onClick={hanleCOuntIncrease}>Increase Item</button>
	  </div>;
}

export default UseMemo;
