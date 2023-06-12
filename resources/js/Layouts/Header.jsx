import { Fragment } from 'react';

export default function Header({ children }) {
  return (
    <Fragment>
    <div 
      id="header-secondary-outer" 
      data-lhe="animated_underline" 
      data-full-width="true" 
      data-permanent-transparent="false"
      className="relative border-b-[1px] border-[rgba(0,0,0,0.1)] bg-[#f8f8f8] min-h-[34px] z-10000"
    >
		  <div 
        className="container px-[28px] w-full max-w-full min-h-[34px]"
      >
			  <nav className="min-h-[34px] block">
				  <ul 
            id="social"
            className="float-left"
          >
            <li className="float-left">
              <a 
                target="_blank" 
                rel="noopener" 
                href="https://twitter.com/EdgeInformation"
              >
                <span 
                  className="screen-reader-text"
                >
                  twitter
                </span>
                <i 
                  className="fa fa-twitter" 
                  aria-hidden="true"
                ></i> 
              </a>
            </li>
            <li className="float-left">
                <a 
                  target="_blank" 
                  rel="noopener" 
                  href="https://www.facebook.com/EdgeInformationManagement/"
                >
                  <span 
                    className="screen-reader-text"
                  >
                    facebook
                  </span>
                  <i 
                    className="fa fa-facebook" 
                    aria-hidden="true"
                  ></i> 
                </a>
              </li>
              <li className="float-left">
                <a 
                  target="_blank" 
                  rel="noopener" 
                  href="https://www.linkedin.com/company/edge-information-management-inc/"
                >
                  <span 
                    className="screen-reader-text"
                  >
                    linkedin
                  </span>
                  <i 
                    className="fa fa-linkedin" 
                    aria-hidden="true"
                  ></i> 
                </a>
              </li>
              <li className="float-left">
                <a 
                  target="_blank" 
                  rel="noopener" 
                  href="https://www.youtube.com/user/GetEmployeeScreening"
                >
                  <span 
                    className="screen-reader-text"
                  >
                    youtube
                  </span>
                  <i 
                    className="fa fa-youtube-play" 
                    aria-hidden="true"
                  ></i> 
                </a>
              </li>
              <li className="float-left">
                <a 
                  target="_blank" 
                  rel="noopener" 
                  href="https://www.instagram.com/edgeinformationmanagement/"
                >
                  <span 
                    className="screen-reader-text"
                  >
                    instagram
                  </span>
                  <i 
                    className="fa fa-instagram" 
                    aria-hidden="true"
                  ></i> 
                </a>
              </li>
            </ul>				
						<ul 
              className="sf-menu sf-js-enabled sf-arrows float-right"
            >	
				   	  <li 
                id="menu-item-6361" 
                className="call-to-action phone menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item menu-item-6361 float-left"
              >
                <a 
                  href="tel:8007253343"
                >
                  <span 
                    className="menu-title-text"
                  >
                    800-725-3343
                  </span>
                </a>
              </li>
              <li 
                id="menu-item-6362" 
                className="call-to-action menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item menu-item-6362 float-left"
              >
                <a 
                  href="mailto:info@edgeinformation.com"
                >
                  <span 
                    className="menu-title-text"
                  >
                    Info@Edgeinformation.com
                  </span>
                </a>
              </li>
				  </ul>
								
			</nav>
		</div>
	</div>
  <div 
    id="header-space" 
    data-header-mobile-fixed="1" 
    style={{ height: '170px'}}
  >

  </div>
  <div 
    className="fixed pt-[28px] w-full top-0 left-0 bg-white"
  >	
	  <header id="top" className="w-full">		
		  <div className="w-full max-w-full px-[28px]">			
			  <div className="row flex">				  
				  <div className="flex mr-[2%]">					
					  <a 
              id="logo" 
              href="https://edgeinformation.com"
              className="relative mt-[45px] mb-[45px]"
            >
						  <img 
                className="stnd skip-lazy default-logo" 
                width="300" 
                height="183" 
                alt="Edge Information" 
                src="https://edgeinformation.com/wp-content/uploads/2021/01/Home-Page-1a.png" 
                style={{ height: '80px', width: 'auto' }}
              /> 
					  </a>
				  </div>				
				  <div 
            className="flex ml-auto w-auto"
          >
            <div 
              className="slide-out-widget-area-toggle mobile-icon slide-out-from-right" 
              data-icon-animation="simple-transform"
            >
							<div> 
                  <a 
                    href="#sidewidgetarea" 
                    className="closed"
                  > 
                    <span> 
                      <i 
                        className="lines-button x2"
                      > 
                        <i 
                          className="lines"
                        ></i> 
                      </i> 
                    </span> 
                  </a> 
                </div> 
       				</div>
					    <nav className="flex">
                  <ul 
                    className="buttons" 
                    data-user-set-ocm="off"
                  >
                    <li 
                      className="slide-out-widget-area-toggle" 
                      data-icon-animation="simple-transform"
                    >
										  <div> 
                        <a 
                          href="#sidewidgetarea" 
                          className="closed"
                        > 
                          <span> 
                            <i 
                              className="lines-button x2"
                            > 
                              <i 
                                className="lines"
                              >
                              </i> 
                            </i> 
                          </span> 
                        </a> 
                      </div> 
	       						</li>
									</ul>
						
									<ul 
                    className="flex"
                  >	
								    <li 
                      id="menu-item-6283" 
                      className="flex items-center"
                    >
                      <a 
                        href="https://edgeinformation.com/solutions/" 
                        className="sf-with-ul"
                      >
                        <span 
                          className="menu-title-text"
                        >
                          Solutions
                        </span>
                      </a>
                      <ul 
                        className="sub-menu tracked-pos" 
                        style={{ display: 'none'}}
                      >
	                      <li 
                          id="menu-item-6467" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6467"
                        >
                          <a 
                            href="https://edgeinformation.com/enterprise-employment-screening-solutions/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Enterprise Solutions
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6466" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6466"
                        >
                          <a 
                            href="https://edgeinformation.com/small-business-employment-screening-solutions/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Small Business Solutions
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li 
                      id="menu-item-6282" 
                      className="flex items-center"
                    >
                      <a 
                        href="https://edgeinformation.com/services/" 
                        className="ml-[10px] mr-[10px]"
                      >
                        <span 
                          className="menu-title-text"
                        >
                          Services
                        </span>
                      </a>
                      <ul 
                        className="sub-menu tracked-pos" 
                        style={{display: 'none'}}
                      >
                        <li 
                          id="menu-item-6429" 
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item menu-item-6429"
                        >
                          <a 
                            href="https://edgeinformation.com/services/background-searches/" 
                            className="sf-with-ul"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Background Screening
                            </span>
                            <span 
                              className="sf-sub-indicator"
                            >
                              <i 
                                className="fa fa-angle-right icon-in-menu" 
                                aria-hidden="true"
                              >
                              </i>
                            </span>
                          </a>
                          <ul 
                            className="sub-menu" 
                            style={{display: 'none'}}
                          >
                            <li 
                              id="menu-item-6578" 
                              className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6578"
                            >
                              <a 
                                href="https://edgeinformation.com/reference-checks/"
                              >
                                <span 
                                  className="menu-title-text"
                                >
                                  Reference Checks
                                </span>
                              </a>
                            </li>
                            <li 
                              id="menu-item-6577" 
                              className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6577"
                            >
                              <a 
                                href="https://edgeinformation.com/verifications/"
                              >
                                <span 
                                  className="menu-title-text"
                                >
                                  Verifications
                                </span>
                              </a>
                            </li>
                            <li 
                              id="menu-item-6576" 
                              className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6576"
                            >
                              <a 
                                href="https://edgeinformation.com/electronic-fingerprinting/"
                              >
                                <span 
                                  className="menu-title-text"
                                >
                                  Electronic Fingerprinting
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
	                      <li 
                          id="menu-item-6581" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6581"
                        >
                          <a 
                            href="https://edgeinformation.com/services/drug-testing/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Drug Testing
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-13548" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-13548"
                        >
                          <a 
                            href="https://edgeinformation.com/services/occupational-health-screening/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Occupational Health Screening
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6579" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6579"
                        >
                          <a 
                            href="https://edgeinformation.com/services/i-9-and-e-verify/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              I-9 and E-Verify
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6580" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6580"
                        >
                          <a 
                            href="https://edgeinformation.com/services/compliance/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Compliance
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li 
                      id="menu-item-8069" 
                      className="flex items-center"
                    >
                      <a 
                        href="https://edgeinformation.com/industries/" 
                        className="ml-[10px] mr-[10px]"
                      >
                        <span 
                          className="menu-title-text"
                        >
                          Industries
                        </span>
                      </a>
                      <ul 
                        className="sub-menu tracked-pos" 
                        style={{display: 'none'}}
                      >
                        <li 
                          id="menu-item-8106" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8106"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/staffing/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Staffing
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8105" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8105"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/retail/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Retail
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8104" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8104"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/technology/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Technology
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8112" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8112"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/transportation/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Transportation
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8103" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8103"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/healthcare/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Healthcare
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8102" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8102"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/long-term-care/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Long-term Care
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8101" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8101"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/financial/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Financial
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8099" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8099"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/insurance/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Insurance
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8100" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8100"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/energy/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Energy
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8098" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8098"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/field-services/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Field Services
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8097" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8097"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/education/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Education
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-8096" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-8096"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/government/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Government
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-9573" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-9573"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/nonprofit/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Nonprofit
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-9574" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-9574"
                        >
                          <a 
                            href="https://edgeinformation.com/industries/manufacturing/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Manufacturing
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li> 
                    <li 
                      id="menu-item-6290" 
                      className="flex items-center"
                    >
                      <a 
                        href="https://edgeinformation.com/about-edge/" 
                        className="ml-[10px] mr-[10px]"
                      >
                        <span 
                          className="menu-title-text"
                        >
                          Company
                        </span>
                      </a>
                      <ul 
                        className="sub-menu tracked-pos" 
                        style={{display: 'none'}}
                      >
                        <li 
                          id="menu-item-6307" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6307"
                        >
                          <a 
                            href="https://edgeinformation.com/about-edge/our-team/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Our Team
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6306" 
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item menu-item-6306"
                        >
                          <a 
                            href="https://edgeinformation.com/about-edge/our-edge/" 
                            className="sf-with-ul"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Our Edge
                            </span>
                            <span 
                              className="sf-sub-indicator"
                            >
                              <i 
                                className="fa fa-angle-right icon-in-menu" aria-hidden="true"
                              >
                              </i>
                            </span>
                          </a>
                          <ul 
                            className="sub-menu" 
                            style={{display: 'none'}}
                          >
                            <li 
                              id="menu-item-10236" 
                              className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-10236"
                            >
                              <a 
                                href="https://edgeinformation.com/about-edge/our-edge/code-of-ethics/"
                              >
                                <span 
                                  className="menu-title-text"
                                >
                                  Mission Statement
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li 
                          id="menu-item-9976" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-9976"
                        >
                          <a 
                            href="https://edgeinformation.com/accreditations/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Accreditations
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6305" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6305"
                        >
                          <a 
                            href="https://edgeinformation.com/about-edge/our-clients/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Our Clients
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6304" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6304"
                        >
                          <a 
                            href="https://edgeinformation.com/about-edge/our-partners/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Our Partners
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6627" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6627"
                        >
                          <a 
                            href="https://edgeinformation.com/about-edge/technology/webscreen-background-screening-software/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Webscreen
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-10731" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-10731"
                        >
                          <a 
                            href="https://edgeinformation.com/about-edge/careers/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Careers
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6303" 
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item menu-item-6303"
                        >
                          <a 
                            href="https://edgeinformation.com/about-edge/technology/" 
                            className="sf-with-ul"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Our Technology
                            </span>
                            <span 
                              className="sf-sub-indicator"
                            >
                              <i 
                                className="fa fa-angle-right icon-in-menu" 
                                aria-hidden="true"
                              >
                              </i>
                            </span>
                          </a>
                          <ul 
                            className="sub-menu" style={{display: 'none'}}
                          >
                            <li 
                              id="menu-item-6633" 
                              className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6633"
                            >
                              <a 
                                href="https://edgeinformation.com/about-edge/technology/applicant-tracking-system-integration/"
                              >
                                <span 
                                  className="menu-title-text"
                                >
                                  Applicant Tracking System Integration Partners
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li 
                      id="menu-item-6288" 
                      className="flex items-center"
                    >
                      <a 
                        href="https://edgeinformation.com/resource-library/" 
                        className="ml-[10px] mr-[10px]"
                      >
                        <span 
                          className="menu-title-text"
                        >
                          Resource Library
                        </span>
                      </a>
                      <ul 
                        className="sub-menu tracked-pos" 
                        style={{display: 'none'}}
                      >
                        <li 
                          id="menu-item-6323" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6323"
                        >
                          <a 
                            href="https://edgeinformation.com/resource-library/upcoming-events/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Upcoming Events
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6324" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6324"
                        >
                          <a 
                            href="https://edgeinformation.com/blog/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              The Employment Edge Blog
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6325" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6325"
                        >
                          <a 
                            href="https://edgeinformation.com/resource-library/press-releases/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Press Releases
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6322" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6322"
                        >
                          <a 
                            href="https://edgeinformation.com/resource-library/background-screening-terms/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Background Screening Terms
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6321" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6321"
                        >
                          <a 
                            href="https://edgeinformation.com/resource-library/video-library/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Video Library
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li 
                      id="menu-item-6281" 
                      className="flex items-center" 
                    >
                      <a 
                        href="https://edgeinformation.com/information-for-applicants/" 
                        className="ml-[10px] mr-[10px]"
                      >
                        <span 
                          className="menu-title-text"
                        >
                          Applicants
                        </span>
                      </a>
                      <ul 
                        className="sub-menu tracked-pos" 
                        style={{display: 'none'}}
                      >
                        <li 
                          id="menu-item-6704" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6704"
                        >
                          <a 
                            href="https://edgeinformation.com/dispute/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Dispute Your Report
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6707" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6707"
                        >
                          <a 
                            href="https://edgeinformation.com/how-to-read-a-background-report/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              How to Read a Background Report
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6710" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6710"
                        >
                          <a 
                            href="https://edgeinformation.com/summary-rights-fair-credit-reporting-act/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Your Rights Under the Fair Credit Reporting Act
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-13896" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-13896"
                        >
                          <a 
                            href="https://edgeinformation.com/human-trafficking-survivor-resources/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Human Trafficking Survivor Resources
                            </span>
                          </a>
                        </li>
                        <li 
                          id="menu-item-6713" 
                          className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-6713"
                        >
                          <a 
                            href="https://edgeinformation.com/united-states-code-title-15-commerce-trade/"
                          >
                            <span 
                              className="menu-title-text"
                            >
                              Legal Information – Title 15 US Code – Commerce and Trade
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li 
                      id="menu-item-9822" 
                      className="flex items-center"
                    >
                      <a 
                        className="ml-[10px] mr-[10px]"
                        href="https://edgeinformation.com/faqs/"
                      >
                        <span 
                          className="menu-title-text"
                        >
                          FAQs
                        </span>
                      </a>
                    </li>
                    <li 
                      id="menu-item-6289" 
                      className="flex items-center"
                    >
                      <a 
                        className="ml-[10px] mr-[10px]"
                        href="https://edgeinformation.com/support/"
                      >
                        <span 
                          className="menu-title-text"
                        >
                          Contact Us
                        </span>
                      </a>
                    </li>
                    <li 
                      id="menu-item-9494" 
                      className="flex items-center"
                    >
                      <a 
                        href="https://edgeinformation.com/client-login/"
                      >
                        <span 
                          className="menu-title-text"
                        >
                          Client Login
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
				</div>

				
			</div>
			
		</div>
		
	</header>
	
	
	<div className="ns-loading-cover"></div>		
	

</div>

  </Fragment>
  );
}