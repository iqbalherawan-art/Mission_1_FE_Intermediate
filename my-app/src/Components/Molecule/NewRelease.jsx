import React from 'react'
import '../Molecule/MenuPage.css'
import ArrowLeft from '../../assets/Images/Arrow_left.png'
import LargeMovie1 from '../../assets/Images/Large-movie-vertical-1.3.png'
import LargeMovie2 from '../../assets/Images/Large-movie-vertical-2.3.png'
import LargeMovie3 from '../../assets/Images/Large-movie-vertical-3.3.png'
import LargeMovie4 from '../../assets/Images/Large-movie-vertical-4.3.png'
import LargeMovie5 from '../../assets/Images/Large-movie-vertical-5.3.png'

export default function NewRelease() {
    return (
        <>
        <div className="row">
  <heading3 className="Title_scroll">Rilis Terbaru</heading3>
  <button className="arrow_left_vertical">
    <img src={ArrowLeft} alt="" width={20} />
  </button>
  <button className="arrow_right_vertical">
    <img src={ArrowLeft}    alt="" width={20} />
  </button>
  <div className="row_potrait_poster_scroll">
    <div className="row_posters">
      <div className="rating_lanjut_film">
        <img
          src={LargeMovie1}
          alt=""
          className="row_poster_vertical row__posterlarge"
        />
      </div>
    </div>
    <div className="row_posters">
      <div className="rating_lanjut_film">
        <img
          src={LargeMovie2}
          alt=""
          className="row_poster_vertical row__posterlarge"
        />
      </div>
    </div>
    <div className="row_posters">
      <div className="rating_lanjut_film">
        <img
          src={LargeMovie3}
          alt=""
          className="row_poster_vertical row__posterlarge"
        />
      </div>
    </div>
    <div className="row_posters">
      <div className="rating_lanjut_film">
        <img
          src={LargeMovie4}
          alt=""
          className="row_poster_vertical row__posterlarge"
        />
      </div>
    </div>
    <div className="row_posters">
      <div className="rating_lanjut_film">
        <img
          src={LargeMovie5}
          alt=""
          className="row_poster_vertical row__posterlarge"
        />
      </div>
    </div>
  </div>
</div>
</>
    )
}   