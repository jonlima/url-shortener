'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">url-shortener documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-e255ad5ba89a6f8513f4f35b74f84ec96bb4413c5026bed4b21fa0503a0f92ffdd4a7871a471f70030b32ae8f938ace49fba877785be0505ae29422f59da2d40"' : 'data-bs-target="#xs-controllers-links-module-AppModule-e255ad5ba89a6f8513f4f35b74f84ec96bb4413c5026bed4b21fa0503a0f92ffdd4a7871a471f70030b32ae8f938ace49fba877785be0505ae29422f59da2d40"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-e255ad5ba89a6f8513f4f35b74f84ec96bb4413c5026bed4b21fa0503a0f92ffdd4a7871a471f70030b32ae8f938ace49fba877785be0505ae29422f59da2d40"' :
                                            'id="xs-controllers-links-module-AppModule-e255ad5ba89a6f8513f4f35b74f84ec96bb4413c5026bed4b21fa0503a0f92ffdd4a7871a471f70030b32ae8f938ace49fba877785be0505ae29422f59da2d40"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-e255ad5ba89a6f8513f4f35b74f84ec96bb4413c5026bed4b21fa0503a0f92ffdd4a7871a471f70030b32ae8f938ace49fba877785be0505ae29422f59da2d40"' : 'data-bs-target="#xs-injectables-links-module-AppModule-e255ad5ba89a6f8513f4f35b74f84ec96bb4413c5026bed4b21fa0503a0f92ffdd4a7871a471f70030b32ae8f938ace49fba877785be0505ae29422f59da2d40"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e255ad5ba89a6f8513f4f35b74f84ec96bb4413c5026bed4b21fa0503a0f92ffdd4a7871a471f70030b32ae8f938ace49fba877785be0505ae29422f59da2d40"' :
                                        'id="xs-injectables-links-module-AppModule-e255ad5ba89a6f8513f4f35b74f84ec96bb4413c5026bed4b21fa0503a0f92ffdd4a7871a471f70030b32ae8f938ace49fba877785be0505ae29422f59da2d40"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UrlsModule.html" data-type="entity-link" >UrlsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UrlsModule-8b46768803a0d4d2a0e7c76de88093f67890775b58f637fe38391d415a5d1fc3059e65a0a6bbb511d518bd9fa564e8b2f5118138e44a65beb92d4d29631676fa"' : 'data-bs-target="#xs-controllers-links-module-UrlsModule-8b46768803a0d4d2a0e7c76de88093f67890775b58f637fe38391d415a5d1fc3059e65a0a6bbb511d518bd9fa564e8b2f5118138e44a65beb92d4d29631676fa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UrlsModule-8b46768803a0d4d2a0e7c76de88093f67890775b58f637fe38391d415a5d1fc3059e65a0a6bbb511d518bd9fa564e8b2f5118138e44a65beb92d4d29631676fa"' :
                                            'id="xs-controllers-links-module-UrlsModule-8b46768803a0d4d2a0e7c76de88093f67890775b58f637fe38391d415a5d1fc3059e65a0a6bbb511d518bd9fa564e8b2f5118138e44a65beb92d4d29631676fa"' }>
                                            <li class="link">
                                                <a href="controllers/UrlsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UrlsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UrlsModule-8b46768803a0d4d2a0e7c76de88093f67890775b58f637fe38391d415a5d1fc3059e65a0a6bbb511d518bd9fa564e8b2f5118138e44a65beb92d4d29631676fa"' : 'data-bs-target="#xs-injectables-links-module-UrlsModule-8b46768803a0d4d2a0e7c76de88093f67890775b58f637fe38391d415a5d1fc3059e65a0a6bbb511d518bd9fa564e8b2f5118138e44a65beb92d4d29631676fa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UrlsModule-8b46768803a0d4d2a0e7c76de88093f67890775b58f637fe38391d415a5d1fc3059e65a0a6bbb511d518bd9fa564e8b2f5118138e44a65beb92d4d29631676fa"' :
                                        'id="xs-injectables-links-module-UrlsModule-8b46768803a0d4d2a0e7c76de88093f67890775b58f637fe38391d415a5d1fc3059e65a0a6bbb511d518bd9fa564e8b2f5118138e44a65beb92d4d29631676fa"' }>
                                        <li class="link">
                                            <a href="injectables/UrlsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UrlsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Url.html" data-type="entity-link" >Url</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUrlDto.html" data-type="entity-link" >CreateUrlDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUrlsTable1724011503102.html" data-type="entity-link" >CreateUrlsTable1724011503102</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Url.html" data-type="entity-link" >Url</a>
                            </li>
                            <li class="link">
                                <a href="classes/URLNotFoundException.html" data-type="entity-link" >URLNotFoundException</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});