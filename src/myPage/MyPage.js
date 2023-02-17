import React from 'react';
import './MyPage.css';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList'


const MyPage = () => {

    return (
        <TodoTemplate>
            <TodoHead/>
            <TodoList/>
        </TodoTemplate>
    );
};

export default MyPage;
