import LogoImg from '../image/changwonsilogo.png';

const Title = () => {
    return (
        <div className="titleContainer">
            <div className="logo">
                <img src={LogoImg} alt="창원시" width="100" />
            </div>
            <div className="title">
                <span>경상남도창원교육지원청</span>
                <br />
                소속의 초등학교
            </div>
        </div>
    );
};

export default Title;
