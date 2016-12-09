import React, { Component } from 'react';

class Stuff extends Component {
    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h2>STUFF</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam odio est, tristique et volutpat ut, lobortis nec est.
                    Mauris ut dolor sapien. Duis vel commodo purus
                    </p>
                    <ol>
                        <li>Nulla pulvinar diam</li>
                        <li>Facilisis bibendum</li>
                        <li>Vestibulum vulputate</li>
                        <li>Eget erat</li>
                        <li>Id porttitor</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Stuff;
