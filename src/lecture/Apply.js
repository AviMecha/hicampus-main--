import { useEffect, useState } from "react";

export default ({history}) => {

    let unblock;
    useEffect(() => {
        unblock = history.block('정말 취소하시겠습니까?');
        return () => {
            if (unblock) {
                unblock();
            }
        };
    });

    const handlerCancel = () => {
        history.goBack();
    };

    const handlerApply = () => {
         if (unblock) { unblock(); }
        history.push('./myPage/MyPage');
    };

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (
        <>
            <h1 >수강 신청</h1>
            <div>
                이름 : <input type="text"
                              placeholder="이름을 입력하세요"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value)
                                }} /><br/>
                전화번호 : <input type="text"
                                  placeholder="예) 000-0000-0000"
                                  value={phone}
                                  onChange={(e) => {
                                    setPhone(e.target.value)
                                  }} /><br/>
                이메일 : <input type="text" 
                          placeholder="이메일을 입력하세요"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                          }}/><br/>
            </div>
            <div>
                <button onClick={handlerCancel}>취소</button>
                <button onClick={() => {alert(`이름: ${name}\n나이: ${phone}\n이메일: ${email}`); 
                                        setName('');
                                        setPhone('');
                                        setEmail('');
                                        handlerApply();
                                    }}>신청완료</button>
            </div>
        </>
    );
};
