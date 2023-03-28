import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"


const ListSearchComponent = () => {

  const [typeStr, setTypeStr] = useState('')
  const [keyword, setKeyword] = useState('')


  const [searchParams, setSearchParams] = useSearchParams()
  const size = searchParams.get("size") || 10


  const handleChangeOption = (e) => {
    
    setTypeStr(e.target.value)
  }

  const handleChangeInput = (e) => {
    setKeyword(e.target.value)
  }

  const handleClickSearch = (e) => {

    const query = {page:1, size:size, typeStr:typeStr, keyword:keyword, date: Date.now()}

    setSearchParams(query)

  }

  const handleClickClearAll = (e) => {


    const query = {page:1, size:10, date: Date.now()}

    setSearchParams(query)
    setTypeStr('')
    setKeyword('')

  }


  return (
    <div className="w-full bg-blue-500 flex justify-end px-6 ">

        <select 
        className="border-solid border-2 rounded m-1 p-2"
        onChange={handleChangeOption} 
        value = {typeStr} >
          <option value="">----------</option>
          <option value="t">Title</option>
        </select>

        <input 
        type='text' 
        className="border-solid border-2 rounded m-1 p-2 w-1/6 "
        value={keyword}
        onChange = {handleChangeInput}
        ></input>
        
        <button 
        className="m-1 p-2 text-white bg-blue-400 rounded"
        onClick={handleClickSearch}>Search
        </button>
        
        <button 
        className="m-1 p-2 text-white bg-orange-400 rounded"
        onClick={handleClickClearAll}>Clear All
        </button>

      </div>
  )

}
 
export default ListSearchComponent;
