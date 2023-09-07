import React from 'react';
import { setTopic } from '../../pages/Articles/redux/topicSortSlice';
import { useDispatch } from 'react-redux';
import SignUp from '../SignUpNewsletter/signUp';
import SupportUs from '../SupportUs/support';

function Footer() {
    const dispatch2 = useDispatch();
    return (

        <div className="footer-container">

            <div className="footer-content">

                <dl className="row m-0">
                    <dt className="col"><a className="footer-nav-headline" onClick={() => dispatch2(setTopic("Halsa"))}>Hälsa</a></dt>
                    <dt className="col"><a className="footer-nav-headline" onClick={() => dispatch2(setTopic("SamhalleKonflikter"))}>Samhälle & Konflikter</a></dt>
                    <dt className="col"><a className="footer-nav-headline" onClick={() => dispatch2(setTopic("Miljo"))}>Miljö</a></dt>
                    <dt className="col"><a className="footer-nav-headline" onClick={() => dispatch2(setTopic("VetenskapTeknik"))}>Vetenskap & Teknik</a></dt>
                    <dt className="col"><a className="footer-nav-headline" onClick={() => dispatch2(setTopic("LivsstilFritt"))}>Livsstil & Fritid</a></dt>
                    <dt className="col"><a className="footer-nav-headline" onClick={() => dispatch2(setTopic("Ekonomi"))}>Ekonomi</a></dt>
                    <dt className="col"><a className="footer-nav-headline" onClick={() => dispatch2(setTopic("Religion"))}>Religion</a></dt>
                    <dt className="col"><a className="footer-nav-headline" onClick={() => dispatch2(setTopic("Idrott"))}>Idrott</a></dt>
                </dl>
            </div>

            <div className="elemento1"></div>

            <div className="row secondary-footer">

                <div className="signup col col-sm-3">
                    <SignUp />
                </div>

                <div className="gridfooter col col-sm-8">

                    <div className="row">
                        <div className="footer-box col">
                            <dl className="dl">
                                <dt className="dt-el"><a href="#" className="footer-box-el smaller">Hjälp</a></dt>
                                <dt className="dt-el"><a href="#" className="footer-box-el smaller">Klagomål</a></dt>
                                <dt className="dt-el"><a href="#" className="footer-box-el smaller">Rättelse</a></dt>
                                <dt className="dt-el"><a href="#" className="footer-box-el smaller">Kontakta oss</a></dt>
                                <dt className="dt-el"><a href="#" className="footer-box-el smaller">Kakor</a></dt>


                            </dl>
                        </div>

                        <div className="footer-box col">
                            <dl className="dl">
                                <dt className="dt-el"><a href="#" className="footer-box-el smaller">Alla teman</a></dt>
                                <dt className="dt-el"><a href="#" className="footer-box-el smaller">Jobba hos oss</a></dt>
                                <dt className="dt-el"><a href="#" className="footer-box-el smaller">Journalister</a></dt>
                                <dt className="dt-el"><a href="#" className="footer-box-el smaller">Arkiv</a></dt>


                            </dl>
                        </div>

                        <div className="footer-box col">
                            <dt className="dt-el"><a href="https://www.facebook.com/" className="footer-box-el smaller">Facebook</a></dt>
                            <dt className="dt-el"><a href="https://www.youtube.com/" className="footer-box-el smaller">YouTube</a></dt>
                            <dt className="dt-el"><a href="https://www.instagram.com/" className="footer-box-el smaller">Instagram</a></dt>
                            <dt className="dt-el"><a href="https://www.linkedin.com/" className="footer-box-el smaller">LinkedIn</a></dt>
                            <dt className="dt-el"><a href="https://twitter.com/" className="footer-box-el smaller">Twitter</a></dt>
                        </div>

                        <div className="col">
                            <SupportUs />
                        </div>
                    </div>

                </div>
            </div>

            <p className="text-center">&#169; 2023 Grupp3 WebbNews Mjaumjau. All rights reserved.</p>
        </div>
    );
}

export default Footer;