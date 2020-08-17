import React, { useEffect } from 'react';


const ResultPage = ({result}) => (
  <div>
    {useEffect(() => {
      window.scrollTo(0, 0)
    }, [])}
    {result === "Result 1" && 
      <h2>This is result 1</h2>
    }
    {result === "Result 2" && 
      <h2>This is result 2</h2>
    }
    {result === "Result 3" && 
      <h2>This is result 3</h2>
    }
    {result === "Result 4" && 
      <h2>This is result 4</h2>
    }
    {result === "Result 5" && 
      <h2>This is result 5</h2>
    }
  </div>
)

export default ResultPage;