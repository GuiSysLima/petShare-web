import { InputHTMLAttributes } from "react"
import { Container, SearchButton } from "./styles"
import { FaSearch } from "react-icons/fa"

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    width?: string
}

const SearchInput = ({ label, width, ...rest }: SearchInputProps) => {
    return (
        <Container width={width}>
            {label && <label>{label}</label>}
            <div style={{ width: width }}>
                <input type="text" {...rest} />
                <SearchButton>
                    <FaSearch size={19} />
                </SearchButton>
            </div>
        </Container>
    )
}

export default SearchInput