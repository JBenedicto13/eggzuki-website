import '../App.css';
import '../styles/lore.css';
import React, { useState } from 'react';
import { ChapterData } from './ChapterData';
import ImageMapper from "react-image-mapper";

function Lore() {

  const [selectedChapter, setSelectedChapter] = useState("");

  const getSelectedChapter = (area) => {
    if (area.name === "Chapter 1") {
      setSelectedChapter("Chapter 1")
      document.getElementById("btnShowChapter").click()
    } else if (area.name === "Chapter 2") {
      setSelectedChapter("Chapter 2")
      document.getElementById("btnShowChapter").click()
    }
  }

  var MAP = {
    name: "Loremap",
    areas: [
    {
        name: "Chapter 1",
        shape: "circle",
        coords: [456,511,12],
        preFillColor: "green",
        lineWidth: 3,
        fillColor: "#0000ff",
    },
    {
        name: "Chapter 2",
        shape: "circle",
        coords: [569,283,23],
        preFillColor: "pink",
        lineWidth: 3,
        strokeColor: "#0000ff",
    },
    ]
  }

  var URL = "https://img.freepik.com/free-vector/map-pirate-island-treasure_23-2147629202.jpg?w=740&t=st=1676380322~exp=1676380922~hmac=8e8f4f361cad1e29380f0ca4152583ee054bab909dbb4b0bb94f14c4a3d6d427";

  return (
    <div className="lore">
      <div className='content'>
        <ImageMapper 
          src={URL} 
          map={MAP}
          onClick={(area) => getSelectedChapter(area)}
        />
        <button id='btnShowChapter' hidden type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  ShowChapter
</button>
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
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
