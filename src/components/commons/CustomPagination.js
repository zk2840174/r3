  
  const CustomPagination = ({pageNumList, prev, prevPage, start, current, end, next, nextPage, onPageClick}) => {
  
  
    return ( 
  
    <ul className="flex ">
      {prev &&
      <li 
      className="m-1 border-solid border-2 border-indigo-200  rounded py-1.5 px-3"
      onClick={() => onPageClick(prevPage)}
      >
        이전
      </li>
      }
      {pageNumList.map( pageNum => {

        const currentColor = pageNum === current ? 'bg-blue-300' : ''
  
        return (
          <li  
          className={' m-1 border-solid border-2 border-indigo-200 rounded py-1.5 px-3 ' + currentColor } 
          key={pageNum}
          onClick={() => onPageClick(pageNum)}>
            {pageNum} 
          </li>
        )
      })}
      {next &&
      <li   
      className="m-1 border-solid border-2 border-indigo-200 rounded py-1.5 px-3" 
      onClick={() => onPageClick(nextPage)}
      >
        다음
      </li>
      }
    </ul>
  
  
     );
  }
   
export default CustomPagination;
