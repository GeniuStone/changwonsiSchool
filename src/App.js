import './App.css';
import Container from './components/Conatainer';
import Title from './components/Title';
import SearchBox from './components/SearchBox';
import SchoolList from './components/SchoolList';
import Pagination from './components/Pagination';

const App = () => {
    return (
        <Container>
            <Title></Title>
            <SearchBox></SearchBox>
            <SchoolList></SchoolList>
            <Pagination></Pagination>
        </Container>
    );
};

export default App;
