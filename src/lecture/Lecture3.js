import React from 'react';
import { useHistory } from 'react-router-dom';
import './Lecture.css';


const Lecture3 = () => {

    const computerDevel = useHistory();
    function handleComDev() {
        computerDevel.push('/Lecture1')
    }

    const computerTax = useHistory();
    function handleComTax() {
        computerTax.push('/Lecture2');
    }

    const computerAbility = useHistory();
    function handleComAbil() {
        computerAbility.push('/Lecture3')
    }

    const lectureApply = useHistory();
    function handleApply() {
        lectureApply.push('/Apply')
    }


    return (
        <>
        <div class="d-flex" id="wrapper">
            {/* <!-- Sidebar--> */}
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">강의소개</div>
                <div class="list-group list-group-flush">
                    <button class="list-group-item list-group-item-action list-group-item-light p-3" onClick={handleComDev}>웹 개발자 과정</button>
                    <button class="list-group-item list-group-item-action list-group-item-light p-3" onClick={handleComTax}>전산 세무 과정</button>
                    <button class="list-group-item list-group-item-action list-group-item-light p-3" onClick={handleComAbil}>컴퓨터 활용능력 과정</button>
                </div>
            </div>

            {/* <!-- Page content wrapper--> */}
            <div id="page-content-wrapper">
 
            {/* <!-- Top navigation--> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div class="container-fluid">
                        <button class="btn btn-primary" id="sidebarToggle" onClick={handleApply}>수강신청하기</button>
                    </div>
                </nav>
                {/* <!-- Page content--> */}
                <div class="container-fluid">
                    <h1 class="mt-4">강사소개</h1>
                    <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202006/11/img_20200611165120_90eb2298.webp"
                    alt="주방장스폰지밥" width="400" htight="400" align="center" border="0"></img>
                    <p>전직 UDT 출신의 컴퓨터활용능력 명품강의!!</p>
                    <p>
                        Wow!! 친구들 빢빢이 아저씨야 오늘은 컴활에 대해 알아보자고
                    </p>
                </div>

                <div class="container-fluid">
                    <button class="btn bottom-primary" id="sidebarToggle" onClick={handleApply}>수강신청하기</button>
                </div>

            </div>
        </div>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
    
        </>
    );
};

export default Lecture3;