import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup>
        <Input borderRadius={10} variant='filled' placeholder='Search games...' />
        <InputLeftElement children={<BsSearch />} />
    </InputGroup>
  )
}

export default SearchInput