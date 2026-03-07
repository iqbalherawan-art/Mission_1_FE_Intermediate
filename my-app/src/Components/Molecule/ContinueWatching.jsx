import React from 'react'
import '../Molecule/MenuPage.css'
import ArrowLeft from '../../assets/Images/Arrow_left.png'
import DownArrow from '../../assets/Images/Down.png'
import LargeMovie1 from '../../assets/Images/Large-Movie-1.png'
import LargeMovie2 from '../../assets/Images/Large-Movie-2.png'
import LargeMovie3 from '../../assets/Images/Large-Movie-3.png'
import LargeMovie4 from '../../assets/Images/Large-Movie-4.png'

export default function ContinueWatching() {
    return (
        <>
        <div className="row">
            <h3 className="Title_scroll">Melanjutkan Tonton Film</h3>
            <button className="arrow_left">
              <img src={ArrowLeft} alt="Previous" width={19} />
            </button>
            <button className="arrow_right">
              <img src={ArrowLeft} alt="Next" width={19} />
            </button>
  <div className="row_landscape_poster_scroll">
    <div>
      <div className="rating_lanjut_film">
        <div className="judul_dan_rating">
          <h6 className="Movie_title">Don't Look Up</h6>
          <p className="rating">☆4.5/5</p>
        </div>
        <img
          src={LargeMovie1}
          alt="Don't Look Up"
          className="row_poster_horizontal row__posterlarge"
        />
      </div>
    </div>
    <div>
      <div className="rating_lanjut_film">
        <div className="judul_dan_rating">
          <h6 className="Movie_title">All of Us Are Dead</h6>
          <p className="rating">☆4.2/5</p>
        </div>
        <img
          src={LargeMovie2}
          alt="All of Us Are Dead"
          className="row_poster_horizontal row__posterlarge"
        />
      </div>
    </div>
    <div>
      <div className="rating_lanjut_film">
        <div className="judul_dan_rating">
          <h6 className="Movie_title">Blue Lock</h6>
          <p className="rating">☆4.6/5</p>
        </div>
        <img
          src={LargeMovie3}
          alt="Blue Lock"
          className="row_poster_horizontal row__posterlarge"
        />
      </div>
    </div>
    <div>
      <div className="rating_lanjut_film">
        <div className="judul_dan_rating">
          <h6 className="Movie_title">A Man Called Otto</h6>
          <p className="rating">☆4.4/5</p>
        </div>
        <img
          src={LargeMovie4}
          alt="A Man Called Otto"
          className="row_poster_horizontal row__posterlarge"
        />
      </div>
    </div>
  </div>
</div>
</>
    )
}   