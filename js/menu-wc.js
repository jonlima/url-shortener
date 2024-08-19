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
                                            'data-bs-target="#controllers-links-module-AppModule-f984e3c46d5da01b6b3d5a26b9e47ec463ce2251b9fac6aaf2c4fae6d579cf8f9e399603445205e04d0492384171cee1840f12621c932294534576300315c9dd"' : 'data-bs-target="#xs-controllers-links-module-AppModule-f984e3c46d5da01b6b3d5a26b9e47ec463ce2251b9fac6aaf2c4fae6d579cf8f9e399603445205e04d0492384171cee1840f12621c932294534576300315c9dd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f984e3c46d5da01b6b3d5a26b9e47ec463ce2251b9fac6aaf2c4fae6d579cf8f9e399603445205e04d0492384171cee1840f12621c932294534576300315c9dd"' :
                                            'id="xs-controllers-links-module-AppModule-f984e3c46d5da01b6b3d5a26b9e47ec463ce2251b9fac6aaf2c4fae6d579cf8f9e399603445205e04d0492384171cee1840f12621c932294534576300315c9dd"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-f984e3c46d5da01b6b3d5a26b9e47ec463ce2251b9fac6aaf2c4fae6d579cf8f9e399603445205e04d0492384171cee1840f12621c932294534576300315c9dd"' : 'data-bs-target="#xs-injectables-links-module-AppModule-f984e3c46d5da01b6b3d5a26b9e47ec463ce2251b9fac6aaf2c4fae6d579cf8f9e399603445205e04d0492384171cee1840f12621c932294534576300315c9dd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f984e3c46d5da01b6b3d5a26b9e47ec463ce2251b9fac6aaf2c4fae6d579cf8f9e399603445205e04d0492384171cee1840f12621c932294534576300315c9dd"' :
                                        'id="xs-injectables-links-module-AppModule-f984e3c46d5da01b6b3d5a26b9e47ec463ce2251b9fac6aaf2c4fae6d579cf8f9e399603445205e04d0492384171cee1840f12621c932294534576300315c9dd"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-bce5fd303ee5dd15d39846d7f8c325f5e5393546bb62fac68112e1d56516d68af676cd7230524ce7191bff63977aa2efb4224eb4236dc8ac80973874e8e2f286"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-bce5fd303ee5dd15d39846d7f8c325f5e5393546bb62fac68112e1d56516d68af676cd7230524ce7191bff63977aa2efb4224eb4236dc8ac80973874e8e2f286"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-bce5fd303ee5dd15d39846d7f8c325f5e5393546bb62fac68112e1d56516d68af676cd7230524ce7191bff63977aa2efb4224eb4236dc8ac80973874e8e2f286"' :
                                            'id="xs-controllers-links-module-AuthModule-bce5fd303ee5dd15d39846d7f8c325f5e5393546bb62fac68112e1d56516d68af676cd7230524ce7191bff63977aa2efb4224eb4236dc8ac80973874e8e2f286"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-bce5fd303ee5dd15d39846d7f8c325f5e5393546bb62fac68112e1d56516d68af676cd7230524ce7191bff63977aa2efb4224eb4236dc8ac80973874e8e2f286"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-bce5fd303ee5dd15d39846d7f8c325f5e5393546bb62fac68112e1d56516d68af676cd7230524ce7191bff63977aa2efb4224eb4236dc8ac80973874e8e2f286"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-bce5fd303ee5dd15d39846d7f8c325f5e5393546bb62fac68112e1d56516d68af676cd7230524ce7191bff63977aa2efb4224eb4236dc8ac80973874e8e2f286"' :
                                        'id="xs-injectables-links-module-AuthModule-bce5fd303ee5dd15d39846d7f8c325f5e5393546bb62fac68112e1d56516d68af676cd7230524ce7191bff63977aa2efb4224eb4236dc8ac80973874e8e2f286"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
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
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-03b36d6b4e8240815c0671a8f80a17f063d3ab3a5ecd3da5ede942748902dd15a81d285933e77186227bcedd45b6b5fa052b7c6499dae9050b06f54c0c6090a3"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-03b36d6b4e8240815c0671a8f80a17f063d3ab3a5ecd3da5ede942748902dd15a81d285933e77186227bcedd45b6b5fa052b7c6499dae9050b06f54c0c6090a3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-03b36d6b4e8240815c0671a8f80a17f063d3ab3a5ecd3da5ede942748902dd15a81d285933e77186227bcedd45b6b5fa052b7c6499dae9050b06f54c0c6090a3"' :
                                            'id="xs-controllers-links-module-UsersModule-03b36d6b4e8240815c0671a8f80a17f063d3ab3a5ecd3da5ede942748902dd15a81d285933e77186227bcedd45b6b5fa052b7c6499dae9050b06f54c0c6090a3"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-03b36d6b4e8240815c0671a8f80a17f063d3ab3a5ecd3da5ede942748902dd15a81d285933e77186227bcedd45b6b5fa052b7c6499dae9050b06f54c0c6090a3"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-03b36d6b4e8240815c0671a8f80a17f063d3ab3a5ecd3da5ede942748902dd15a81d285933e77186227bcedd45b6b5fa052b7c6499dae9050b06f54c0c6090a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-03b36d6b4e8240815c0671a8f80a17f063d3ab3a5ecd3da5ede942748902dd15a81d285933e77186227bcedd45b6b5fa052b7c6499dae9050b06f54c0c6090a3"' :
                                        'id="xs-injectables-links-module-UsersModule-03b36d6b4e8240815c0671a8f80a17f063d3ab3a5ecd3da5ede942748902dd15a81d285933e77186227bcedd45b6b5fa052b7c6499dae9050b06f54c0c6090a3"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
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
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
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
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUrlDto.html" data-type="entity-link" >CreateUrlDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUrlsTable1724011503102.html" data-type="entity-link" >CreateUrlsTable1724011503102</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailIsRegisteredException.html" data-type="entity-link" >EmailIsRegisteredException</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/LinkUserToUrl1724098604809.html" data-type="entity-link" >LinkUserToUrl1724098604809</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUrlDto.html" data-type="entity-link" >UpdateUrlDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Url.html" data-type="entity-link" >Url</a>
                            </li>
                            <li class="link">
                                <a href="classes/URLNotFoundException.html" data-type="entity-link" >URLNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users1724086805338.html" data-type="entity-link" >Users1724086805338</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OptionalAuthGuard.html" data-type="entity-link" >OptionalAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICreateUser.html" data-type="entity-link" >ICreateUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPayloadUser.html" data-type="entity-link" >IPayloadUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
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