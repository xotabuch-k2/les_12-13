import React from "react";

function Article() {
    return (
        <div className="article__top">
            <div className="article__title">
            <h2>NVIDIA Accelerated AI on Azure</h2>
            </div>
             <ArcticleDody />
            <ArcticleActions />
            <ArticleAuthor />
            
        </div>
    );
  }
  function ArcticleDody() {
    return (
        <div className="article__body">
            <h3>Article Description</h3>
            <p>NVIDIA on Azure is bringing Ai, networking, and high-performance computing to the enterprice</p>
        </div> 
    );
  }
  function ArcticleActions() {
    return (
        <div className="article__actions">
            <div className="article__button">
                <button className="Abutton"> <span>Read</span> </button>
                <button className="Abutton"> <span>Mars as read</span> </button>
                <button className="Abutton"> <span>Mars is unred</span></button>
            </div>
        </div> 
    );
    }
    function ArticleAuthor() {
        return(
            <div className="article__author">
                <div>Author:Mike</div>
                <div>Publisheed: 06/12/2022</div>
                <div> Them: Videocard</div>
            </div>
        );     
    }
  export default Article;