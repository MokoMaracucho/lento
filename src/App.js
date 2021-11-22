import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './html/home_page/Home'

import CreateAccount from './html/signup/create_account/CreateAccount'
import EmailConfirmation from './html/signup/email_confirmation/EmailConfirmation'
import MoreInformations from './html/signup/more_informations/MoreInformations'
import WaitingPage from './html/signup/waiting_page/WaitingPage'
import FrameworkContract from './html/signup/framework_contract/FrameworkContract'
import CreationAccountConfirmation from './html/signup/creation_account_confirmation/CreationAccountConfirmation'
import CreationAccountError from './html/signup/creation_account_error/CreationAccountError'

import { LivingPlaceRegistration } from './Pages/Registration/index'

/* import PageWithQuestions from './html/vhe_registration/page_with_questions/PageWithQuestions'
import Complex from './html/vhe_registration/complex/Complex'
import Residence from './html/vhe_registration/residence/Residence'
import ResidenceFloormap from './html/vhe_registration/residence_floormap/ResidenceFloormap'
import LivingPlaces from './html/vhe_registration/living_places/LivingPlaces' */

import SearchResult from './html/search_result/SearchResult'
import VheDetails from './html/vhe_details/VheDetails'

import './App.scss'

const App = () => {

  console.log(window.innerHeight)

  return (
    <>
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/vhes_list'>VHEs list</Link>
              </li>
              <li>
                <Link to='/vhe_details'>VHE details</Link>
              </li>
            </ul>
          </nav> */}
          
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/create_account'>
              <CreateAccount />
            </Route>
            <Route path='/email_confirmation'>
              <EmailConfirmation />
            </Route>
            <Route path='/more_informations'>
              <MoreInformations />
            </Route>
            <Route path='/waiting_page'>
              <WaitingPage />
            </Route>
            <Route path='/framework_contract'>
              <FrameworkContract />
            </Route>
            <Route path='/creation_account_confirmation'>
              <CreationAccountConfirmation />
            </Route>
            <Route path='/creation_account_error'>
              <CreationAccountError />
            </Route>

            <Route path='/living_place_registration'>
              <LivingPlaceRegistration />
            </Route>

            {/* <Route path='/living_place_registration_step_1'>
              <PageWithQuestions />
            </Route>
            <Route path='/living_place_registration_step_2'>
              <Complex />
            </Route>
            <Route path='/living_place_registration_step_3'>
              <Residence />
            </Route>
            <Route path='/living_place_registration_step_4'>
              <ResidenceFloormap />
            </Route>
            <Route path='/living_place_registration_step_5'>
              <LivingPlaces />
            </Route> */}

            <Route path='/search_result'>
              <SearchResult />
            </Route>
            <Route path='/vhe_details'>
              <VheDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
