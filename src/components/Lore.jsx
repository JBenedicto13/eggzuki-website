import '../App.css';
import '../styles/lore.css';
import React, { useState } from 'react';
import { ChapterData } from './ChapterData';

function Lore() {

  const [selectedChapter, setSelectedChapter] = useState("");

  function getSelectedChapter(val) {
    if (val === "Chapter 1") {
      setSelectedChapter("Chapter 1")
    } else if (val === "Chapter 2") {
      setSelectedChapter("Chapter 2")
    }
  }

  return (
    <div className="lore">
      <div className='content'>
        <img src='https://img.freepik.com/free-vector/map-pirate-island-treasure_23-2147629202.jpg?w=740&t=st=1676380322~exp=1676380922~hmac=8e8f4f361cad1e29380f0ca4152583ee054bab909dbb4b0bb94f14c4a3d6d427' useMap="#image-map"></img>
        
        <div onClick={()=>getSelectedChapter("Chapter 1")} className='areas' id='area1' data-bs-toggle="modal" data-bs-target="#staticBackdrop"></div>
        <div onClick={()=>getSelectedChapter("Chapter 2")} className='areas' id='area2' data-bs-toggle="modal" data-bs-target="#staticBackdrop"></div>

        <map name="image-map">
            <area target="_blank" alt="Chapter 1" title="Chapter 1" href="https://youtube.com" coords="457,510,12" shape="circle"/>
            <area target="_blank" alt="Chapter 2" title="Chapter 2" href="https://twitter.com" coords="294,470,13" shape="circle"/>
        </map>

      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          {ChapterData.map((item, key) => {
            if (item.chapter === selectedChapter) {
              return (
                <div key={key} className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">{item.chapter}: {item.title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>{item.content}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Lore
