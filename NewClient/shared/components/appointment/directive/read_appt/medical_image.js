import React, {Component, PropTypes} from 'react'
class MedicalImage extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div id="tab_image" className="tab-pane">
                <div className="portfolio-content portfolio-3">
                    <div className="clearfix">
                        <div id="js-filters-lightbox-gallery1" className="cbp-l-filters-dropdown cbp-l-filters-dropdown-floated">
                            <div className="cbp-l-filters-dropdownWrap border-grey-salsa">
                                <div className="cbp-l-filters-dropdownHeader uppercase">Sort Gallery</div>
                                <div className="cbp-l-filters-dropdownList">
                                    <div data-filter="*" className="cbp-filter-item-active cbp-filter-item uppercase"> All (
                                        <div className="cbp-filter-counter"></div> items) </div>
                                    <div data-filter=".identity" className="cbp-filter-item uppercase"> Identity (
                                        <div className="cbp-filter-counter"></div> items) </div>
                                    <div data-filter=".web-design" className="cbp-filter-item uppercase"> Web Design (
                                        <div className="cbp-filter-counter"></div> items) </div>
                                    <div data-filter=".print" className="cbp-filter-item uppercase"> Print (
                                        <div className="cbp-filter-counter"></div> items) </div>
                                </div>
                            </div>
                        </div>
                        <div id="js-filters-lightbox-gallery2" className="cbp-l-filters-button cbp-l-filters-left">
                            <div data-filter="*" className="cbp-filter-item-active cbp-filter-item btn blue btn-outline uppercase">All</div>
                            <div data-filter=".graphic" className="cbp-filter-item btn blue btn-outline uppercase">Graphic</div>
                            <div data-filter=".logos" className="cbp-filter-item btn blue btn-outline uppercase">Logo</div>
                            <div data-filter=".motion" className="cbp-filter-item btn blue btn-outline uppercase">Motion</div>
                        </div>
                    </div>
                    <div id="js-grid-lightbox-gallery" className="cbp">
                        <div className="cbp-item web-design graphic print motion">
                            <a href="/assets/global/plugins/cubeportfolio/ajax/project3.html" className="cbp-caption cbp-singlePageInline" data-title="World Clock Widget<br>by Paul Flavius Nechita" rel="nofollow">
                                <div className="cbp-caption-defaultWrap">
                                    <img src="/assets/global/img/portfolio/600x600/01.jpg" alt="" /> </div>
                                <div className="cbp-caption-activeWrap">
                                    <div className="cbp-l-caption-alignLeft">
                                        <div className="cbp-l-caption-body">
                                            <div className="cbp-l-caption-title">World Clock Widget</div>
                                            <div className="cbp-l-caption-desc">by Paul Flavius Nechita</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="cbp-item web-design logos identity graphic">
                            <a href="/assets/global/plugins/cubeportfolio/ajax/project4.html" className="cbp-caption cbp-singlePageInline" data-title="Bolt UI<br>by Tiberiu Neamu" rel="nofollow">
                                <div className="cbp-caption-defaultWrap">
                                    <img src="/assets/global/img/portfolio/600x600/1.jpg" alt="" /> </div>
                                <div className="cbp-caption-activeWrap">
                                    <div className="cbp-l-caption-alignLeft">
                                        <div className="cbp-l-caption-body">
                                            <div className="cbp-l-caption-title">Bolt UI</div>
                                            <div className="cbp-l-caption-desc">by Tiberiu Neamu</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="cbp-item graphic print identity">
                            <a href="/assets/global/plugins/cubeportfolio/ajax/project3.html" className="cbp-caption cbp-singlePageInline" data-title="WhereTO App<br>by Tiberiu Neamu" rel="nofollow">
                                <div className="cbp-caption-defaultWrap">
                                    <img src="/assets/global/img/portfolio/600x600/02.jpg" alt="" /> </div>
                                <div className="cbp-caption-activeWrap">
                                    <div className="cbp-l-caption-alignLeft">
                                        <div className="cbp-l-caption-body">
                                            <div className="cbp-l-caption-title">WhereTO App</div>
                                            <div className="cbp-l-caption-desc">by Tiberiu Neamu</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="cbp-item web-design motion logos">
                            <a href="/assets/global/plugins/cubeportfolio/ajax/project4.html" className="cbp-caption cbp-singlePageInline" data-title="iDevices<br>by Tiberiu Neamu" rel="nofollow">
                                <div className="cbp-caption-defaultWrap">
                                    <img src="/assets/global/img/portfolio/600x600/2.jpg" alt="" /> </div>
                                <div className="cbp-caption-activeWrap">
                                    <div className="cbp-l-caption-alignLeft">
                                        <div className="cbp-l-caption-body">
                                            <div className="cbp-l-caption-title">iDevices</div>
                                            <div className="cbp-l-caption-desc">by Tiberiu Neamu</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="cbp-item identity graphic print">
                            <a href="/assets/global/plugins/cubeportfolio/ajax/project3.html" className="cbp-caption cbp-singlePageInline" data-title="Seemple* Music for iPad<br>by Tiberiu Neamu" rel="nofollow">
                                <div className="cbp-caption-defaultWrap">
                                    <img src="/assets/global/img/portfolio/600x600/03.jpg" alt="" /> </div>
                                <div className="cbp-caption-activeWrap">
                                    <div className="cbp-l-caption-alignLeft">
                                        <div className="cbp-l-caption-body">
                                            <div className="cbp-l-caption-title">Seemple* Music for iPad</div>
                                            <div className="cbp-l-caption-desc">by Tiberiu Neamu</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="cbp-item motion print logos web-design">
                            <a href="/assets/global/plugins/cubeportfolio/ajax/project4.html" className="cbp-caption cbp-singlePageInline" data-title="Remind~Me Widget<br>by Tiberiu Neamu" rel="nofollow">
                                <div className="cbp-caption-defaultWrap">
                                    <img src="/assets/global/img/portfolio/600x600/3.jpg" alt="" /> </div>
                                <div className="cbp-caption-activeWrap">
                                    <div className="cbp-l-caption-alignLeft">
                                        <div className="cbp-l-caption-body">
                                            <div className="cbp-l-caption-title">Remind~Me Widget</div>
                                            <div className="cbp-l-caption-desc">by Tiberiu Neamu</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="cbp-item graphic logos">
                            <a href="/assets/global/plugins/cubeportfolio/ajax/project3.html" className="cbp-caption cbp-singlePageInline" data-title="Workout Buddy<br>by Tiberiu Neamu" rel="nofollow">
                                <div className="cbp-caption-defaultWrap">
                                    <img src="/assets/global/img/portfolio/600x600/04.jpg" alt="" /> </div>
                                <div className="cbp-caption-activeWrap">
                                    <div className="cbp-l-caption-alignLeft">
                                        <div className="cbp-l-caption-body">
                                            <div className="cbp-l-caption-title">Workout Buddy</div>
                                            <div className="cbp-l-caption-desc">by Tiberiu Neamu</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="cbp-item identity print logos motion">
                            <a href="/assets/global/plugins/cubeportfolio/ajax/project4.html" className="cbp-caption cbp-singlePageInline" data-title="Digital Menu<br>by Cosmin Capitanu" rel="nofollow">
                                <div className="cbp-caption-defaultWrap">
                                    <img src="/assets/global/img/portfolio/600x600/4.jpg" alt="" /> </div>
                                <div className="cbp-caption-activeWrap">
                                    <div className="cbp-l-caption-alignLeft">
                                        <div className="cbp-l-caption-body">
                                            <div className="cbp-l-caption-title">Digital Menu</div>
                                            <div className="cbp-l-caption-desc">by Cosmin Capitanu</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="cbp-item identity motion web-design">
                            <a href="/assets/global/plugins/cubeportfolio/ajax/project3.html" className="cbp-caption cbp-singlePageInline" data-title="Holiday Selector<br>by Cosmin Capitanu" rel="nofollow">
                                <div className="cbp-caption-defaultWrap">
                                    <img src="/assets/global/img/portfolio/600x600/05.jpg" alt="" /> </div>
                                <div className="cbp-caption-activeWrap">
                                    <div className="cbp-l-caption-alignLeft">
                                        <div className="cbp-l-caption-body">
                                            <div className="cbp-l-caption-title">Holiday Selector</div>
                                            <div className="cbp-l-caption-desc">by Cosmin Capitanu</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div id="js-loadMore-lightbox-gallery" className="cbp-l-loadMore-button">
                        <a href="/assets/global/plugins/cubeportfolio/ajax/loadMore3.html" className="cbp-l-loadMore-link btn grey-mint btn-outline" rel="nofollow">
                            <span className="cbp-l-loadMore-defaultText">LOAD MORE</span>
                            <span className="cbp-l-loadMore-loadingText">LOADING...</span>
                            <span className="cbp-l-loadMore-noMoreLoading">NO MORE WORKS</span>
                        </a>
                    </div>
                </div>
            </div>
			)
	}
}
export default MedicalImage