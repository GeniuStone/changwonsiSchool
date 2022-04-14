import '../sass/Pagination.sass';

const Pagination = () => {
    return (
        <div className='pageContainer'>
            <div className='prevBtn'>이전</div>
            <div className='pageNum'>
                1               
            </div>
            <div className='nextBtn'>다음</div>
        </div>
    );
};

export default Pagination;
