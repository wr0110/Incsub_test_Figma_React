import React from 'react';
import { Icon } from '@iconify/react';
import './_Home.sass';
import icon from '../../images/Icon - discount.png';
import { Link } from 'react-router-dom';

interface IHome {}

const Home: React.FC<IHome> = () => {
  return (
    <>
      <div className="logo">My Account</div>
      <section className="homeContainer">
        <div className="homeContainer_wrapper">
          <div className="iconCross">
            <Icon icon="akar-icons:cross" />
          </div>
          <div className="icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="homeContainer_text">
            <div className="title">
              Before You Go... Would 50% Off For 6 Months Help?
            </div>
            <div className="description">
              <p className="subText colorGrey">
                We know things REALLY suck in the world right now - and many
                businesses and freelancers are struggling to stay afloat during
                this COVID-19 crisis.
              </p>
              <p className="subText colorBlack lineHeight">
                So if you could use the extra cushion, grab 50% off for 6
                months.
              </p>
              <p className="subText colorGrey marginBottom">
                We hope you’re staying safe and healthy!
              </p>
              <div className="btns">
                <div className="btn btnStyles">50 % OFF For 6 Months</div>
                <Link to={'/survey'}>
                  <div className="btn btnColor">No, thanks! I’ll cancel</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
