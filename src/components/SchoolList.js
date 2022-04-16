const SchoolList = ({ data, loading, inputValue }) => {
    if (loading) {
        return <div>데이터를 불러오는 중입니다..</div>;
    }

    if (!data) {
        return null;
    }

    return (
        <div className="listTable">
            <table cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>소속</th>
                        <th>학교명</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .filter((item) => {
                            if (inputValue === '') {
                                return item;
                            } else if (item.schulNm.includes(inputValue)) {
                                return item;
                            }
                        })
                        .filter((school, idx, arr) => {
                            return (
                                arr.findIndex(
                                    (item) => item.schoolId === school.schoolId,
                                ) === idx
                            );
                        })
                        .map((item) => (
                            <tr key={item.schoolId}>
                                <td>{item.edcSportNm}</td>
                                <td>{item.schulNm}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default SchoolList;
