import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'

const SearchData = ({searchAction, searchValue}) => {

  const [search, setSearch] = useState([]);

  useEffect(()=>{
    if(searchValue == ''){
      setSearch([]);
    }
  }, [searchValue])

  const filterSearch = (value) =>{
    setSearch(value);
    searchAction(value)
  }

  return (
    <>
        <TextField
            id="searchData"
            label="Search your task"
            variant="filled"
            size="small"
            fullWidth={true}
            InputProps={{
                endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
            }}
            onChange={(e) => {filterSearch(e.target.value)}}
            value={search}
        />
    </>
  )
}

export default SearchData