import React from 'react';

class UserBadge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log(this.props.name + "Child Constructor");
    }

    componentDidMount() {
        console.log(this.props.name + "Child ComponentDidMount");
    }

    render() {
        console.log(this.props.name + "Child RENDER");
        return (
            <div>
                <h1>User Badge</h1>
            </div>
        );
    }
}

/* 
Parent Constructor AboutPage.js:7:12
Parent Render AboutPage.js:15:12
firstChild Constructor UserClass.js:12:12
firstChild Render UserClass.js:19:12
thirdChild Constructor UserBadge.js:9:16
thirdChild RENDER UserBadge.js:17:16
secondChild Constructor UserClass.js:12:12
secondChild Render UserClass.js:19:12
thirdChild Constructor UserBadge.js:9:16
thirdChild RENDER UserBadge.js:17:16
thirdChild ComponentDidMount UserBadge.js:13:16
firstChild ComponentDidMount UserClass.js:16:12
thirdChild ComponentDidMount UserBadge.js:13:16
secondChild ComponentDidMount UserClass.js:16:12
Parent ComponentDidMount AboutPage.js:11:12
*/

export default UserBadge;