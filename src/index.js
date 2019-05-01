import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author= "Sam" timeAgo="Today at 4:45PM" comment="Nice blog post!" img={faker.image.avatar()}/>
            <CommentDetail author= "Alex" timeAgo="Today at 6:40PM" comment="good blog post!" img={faker.image.avatar()}/>
            <CommentDetail author= "Ping"timeAgo="Today at 7:35PM" comment="not bad blog post!" img={faker.image.avatar()}/>
            <CommentDetail author= "Jane"timeAgo="Today at 10:15PM" comment="So so blog post!" img={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(
    <App/>, document.querySelector('#root')
);
