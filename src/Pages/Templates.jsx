import React from 'react'
import { useNavigate } from 'react-router-dom';

function Templates() {
    let Navigate = useNavigate()
    function handleClickedDiv (e) {
        let storeClickedDiv = e.target.id;
        console.log(storeClickedDiv);
        if(storeClickedDiv === 'imgOneDiv'){
            Navigate('/buildportfolio/edu/wordhistory/summary/skills/projects/services/portfoliowebsite')
        }else if(storeClickedDiv === 'imgTwoDiv'){
            Navigate('/buildportfolio/edu/wordhistory/summary/skills/projects/services/templates/portfolioTwo')
        }
        else if(storeClickedDiv === 'imgThreeDiv'){
            Navigate('/buildportfolio/edu/wordhistory/summary/skills/projects/services/templates/portfolioThree')
        }
    }
  return (
    <div id='Templates'>
        <h1 id="pageNumber">.../Summary/Skills/Services/Templates</h1>
        <div className="workheading">
          <h1 className='workHeading'>Select the Theme</h1>
          <p id='workP'>Elivate Your Portfolio : Choose the perfect theme for impact</p>
        </div>

        <div className="themes">
            <div className="themeOne">
                <h1 className='themeOneHeading'>Theme One</h1>
                <div onClick={handleClickedDiv} className='imgDiv' id='imgOneDiv'></div>
            </div>
            <div className="themeOne">
                <h1 className='themeOneHeading'>Theme Two</h1>
                <div onClick={handleClickedDiv} className='imgDiv' id='imgTwoDiv'></div>
            </div>
            <div className="themeOne">
                <h1 className='themeOneHeading'>Theme Three</h1>
                <div onClick={handleClickedDiv} className='imgDiv' id='imgThreeDiv'></div>
            </div>
        </div>

    </div>
  )
}

export default Templates