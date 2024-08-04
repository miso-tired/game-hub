import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (ref.current) onSearch(ref.current.value)
      }}>
      <InputGroup>
          <Input ref={ref} borderRadius={10} variant='filled' placeholder='Search games...' />
          <InputLeftElement children={<BsSearch />} />
      </InputGroup>
    </form>
  )
}

export default SearchInput