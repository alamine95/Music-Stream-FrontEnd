import React from 'react';

const Main = () => {
    return (
        <div className="main">
            <div className="upperNav">Testing</div>
            <div className="mainContent">
                <h1>Vos Musics</h1>
                <div className="cardsWrap">
                    <div className="card">
                        <div className="cardImage">
                            <img src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1
                            &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8
                            &auto=format&fit=crop&w=1470&q=80" alt="Image1" />
                        </div>
                        <div className="cardContent">
                            <h3>Liked Songs</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;