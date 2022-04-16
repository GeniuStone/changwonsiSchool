import '../src/sass/App.sass';
import Container from './components/Conatainer';
import Title from './components/Title';
import SearchBox from './components/SearchBox';
import SchoolList from './components/SchoolList';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const serviceKey =
        '55dW2uKFLL1jV5Io%2BWUr6Yr7%2FqB8VbAzqyBAGam8Ue10Wnnsr%2Fyq8jbC8vQ511f7ENplgA9YST6Q13hnCEm2OA%3D%3D&edcSportNm=%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%EC%B0%BD%EC%9B%90%EA%B5%90%EC%9C%A1%EC%A7%80%EC%9B%90%EC%B2%AD';

    useEffect(() => {
        const getData = async () => {
            setLoading(true);

            try {
                const response = await axios.post(
                    'http://api.data.go.kr/openapi/tn_pubr_public_schul_atndskl_zn_drw_lnkinfo_api?serviceKey=' +
                        serviceKey +
                        '&pageNo=1&numOfRows=42&type=json',
                );
                setData(response.data.response.body.items);
            } catch (e) {
                console.log(e);
            }

            setLoading(false);
        }

        getData();
    }, [])

    const onChangeValue = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <Container>
            <Title></Title>
            <SearchBox inputValue={inputValue} onChangeValue={onChangeValue}></SearchBox>
            <SchoolList inputValue={inputValue} data={data} loading={loading}></SchoolList>            
        </Container>
    );
};
/*  */

export default App;
