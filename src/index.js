import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h1>Warning!</h1>
                Are you sure you want to do this?
                </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author= "Sam" 
                timeAgo="Today at 4:45PM" 
                comment="Nice blog post!" 
                img={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author= "Alex" timeAgo="Today at 6:40PM" comment="good blog post!" img={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author= "Ping"timeAgo="Today at 7:35PM" comment="not bad blog post!" img={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author= "Jane"timeAgo="Today at 10:15PM" comment="So so blog post!" img={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App/>, document.querySelector('#root')
);
