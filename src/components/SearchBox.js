import { VscSearch } from 'react-icons/vsc';

const SearchBox = ({ inputValue, onChangeValue }) => {
    return (
        <div className="inputBox">
            <div className="searchIcon">
                <VscSearch></VscSearch>
            </div>
            <input
                type="text"
                placeholder="학교명을 입력해주세요"
                onChange={onChangeValue}
                value={inputValue}
            />
        </div>
    );
};

export default SearchBox;
