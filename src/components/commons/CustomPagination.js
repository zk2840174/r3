

const getClassNames = (current) => {

    if(!current){
  
      return "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  
    }else {
  
      return "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
  
    }
  }
  
  
  
  const CustomPagination = ({pageNumList, prev, prevPage, start, current, end, next, nextPage, onPageClick}) => {
  
  
    return ( 
  
    <ul className="inline-flex items-center -space-x-px  ">
  
      {prev &&
      <li>
        <a onClick={() => onPageClick(prevPage)} className={getClassNames(false)}> 이전 </a>
      </li>
      }
      {pageNumList.map( pageNum => {
  
        const css = getClassNames(pageNum === current)
  
        return (
          <li key={pageNum}>
            <a onClick={() => onPageClick(pageNum)} className={css}> {pageNum} </a>
          </li>
        )
      })}
      {next &&
      <li>
        <a onClick={() => onPageClick(nextPage)} className={getClassNames(false)}> 다음 </a>
      </li>
      }
    </ul>
  
  
     );
  }
   
export default CustomPagination;
