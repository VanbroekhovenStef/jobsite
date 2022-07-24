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
                    <a href="index.html" data-type="index-link">jobsite documentation</a>
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-adca5e8a5acc0e1974a3836ae37017019609af2d0f06a118d4324998be8e8408f094a859bde05d01ab55b13241ff2038850a14f35664cb49e1c888f1eb441765"' : 'data-target="#xs-components-links-module-AppModule-adca5e8a5acc0e1974a3836ae37017019609af2d0f06a118d4324998be8e8408f094a859bde05d01ab55b13241ff2038850a14f35664cb49e1c888f1eb441765"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-adca5e8a5acc0e1974a3836ae37017019609af2d0f06a118d4324998be8e8408f094a859bde05d01ab55b13241ff2038850a14f35664cb49e1c888f1eb441765"' :
                                            'id="xs-components-links-module-AppModule-adca5e8a5acc0e1974a3836ae37017019609af2d0f06a118d4324998be8e8408f094a859bde05d01ab55b13241ff2038850a14f35664cb49e1c888f1eb441765"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BedrijfModule.html" data-type="entity-link" >BedrijfModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BedrijfModule-efb21aa518abb35e89579ac1034eded53e7dcb4e47a5a23e3d2dbac8c8dba233f33cba32154ed286d772c5f8e9af52771c08e99287edb5c53559448b40fde029"' : 'data-target="#xs-components-links-module-BedrijfModule-efb21aa518abb35e89579ac1034eded53e7dcb4e47a5a23e3d2dbac8c8dba233f33cba32154ed286d772c5f8e9af52771c08e99287edb5c53559448b40fde029"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BedrijfModule-efb21aa518abb35e89579ac1034eded53e7dcb4e47a5a23e3d2dbac8c8dba233f33cba32154ed286d772c5f8e9af52771c08e99287edb5c53559448b40fde029"' :
                                            'id="xs-components-links-module-BedrijfModule-efb21aa518abb35e89579ac1034eded53e7dcb4e47a5a23e3d2dbac8c8dba233f33cba32154ed286d772c5f8e9af52771c08e99287edb5c53559448b40fde029"' }>
                                            <li class="link">
                                                <a href="components/BedrijfDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BedrijfDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BedrijfFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BedrijfFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BedrijfListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BedrijfListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BedrijfModule-efb21aa518abb35e89579ac1034eded53e7dcb4e47a5a23e3d2dbac8c8dba233f33cba32154ed286d772c5f8e9af52771c08e99287edb5c53559448b40fde029"' : 'data-target="#xs-injectables-links-module-BedrijfModule-efb21aa518abb35e89579ac1034eded53e7dcb4e47a5a23e3d2dbac8c8dba233f33cba32154ed286d772c5f8e9af52771c08e99287edb5c53559448b40fde029"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BedrijfModule-efb21aa518abb35e89579ac1034eded53e7dcb4e47a5a23e3d2dbac8c8dba233f33cba32154ed286d772c5f8e9af52771c08e99287edb5c53559448b40fde029"' :
                                        'id="xs-injectables-links-module-BedrijfModule-efb21aa518abb35e89579ac1034eded53e7dcb4e47a5a23e3d2dbac8c8dba233f33cba32154ed286d772c5f8e9af52771c08e99287edb5c53559448b40fde029"' }>
                                        <li class="link">
                                            <a href="injectables/BedrijfService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BedrijfService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BedrijfRoutingModule.html" data-type="entity-link" >BedrijfRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SecurityModule.html" data-type="entity-link" >SecurityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SecurityModule-ee5d331801bc8874f7cd030362056f51dece4430bb6086320a62e34693f8bfa799f906687419e1a7756e2aadf81e97d9be8e7f489451ac23499edb327f7d74a1"' : 'data-target="#xs-components-links-module-SecurityModule-ee5d331801bc8874f7cd030362056f51dece4430bb6086320a62e34693f8bfa799f906687419e1a7756e2aadf81e97d9be8e7f489451ac23499edb327f7d74a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SecurityModule-ee5d331801bc8874f7cd030362056f51dece4430bb6086320a62e34693f8bfa799f906687419e1a7756e2aadf81e97d9be8e7f489451ac23499edb327f7d74a1"' :
                                            'id="xs-components-links-module-SecurityModule-ee5d331801bc8874f7cd030362056f51dece4430bb6086320a62e34693f8bfa799f906687419e1a7756e2aadf81e97d9be8e7f489451ac23499edb327f7d74a1"' }>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecurityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecurityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-8fec2840a9c98adf44104a292f85db91319564675262c1f6204784f1a5775900eaa93a94965b6d165402801b87715bcc5a2b77650f8ac418a0a0f3d8c613cac7"' : 'data-target="#xs-pipes-links-module-SharedModule-8fec2840a9c98adf44104a292f85db91319564675262c1f6204784f1a5775900eaa93a94965b6d165402801b87715bcc5a2b77650f8ac418a0a0f3d8c613cac7"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-8fec2840a9c98adf44104a292f85db91319564675262c1f6204784f1a5775900eaa93a94965b6d165402801b87715bcc5a2b77650f8ac418a0a0f3d8c613cac7"' :
                                            'id="xs-pipes-links-module-SharedModule-8fec2840a9c98adf44104a292f85db91319564675262c1f6204784f1a5775900eaa93a94965b6d165402801b87715bcc5a2b77650f8ac418a0a0f3d8c613cac7"' }>
                                            <li class="link">
                                                <a href="pipes/ShortenContentPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShortenContentPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SollicitatieModule.html" data-type="entity-link" >SollicitatieModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SollicitatieModule-a71c6d833231a6b34624bdb3021e8d543a69edf8563526bb349c7eafd902f97369d3477453cb56ddac444ebe5c742d24e04059a1c6c47eb3fe78141f4cbe8c0b"' : 'data-target="#xs-components-links-module-SollicitatieModule-a71c6d833231a6b34624bdb3021e8d543a69edf8563526bb349c7eafd902f97369d3477453cb56ddac444ebe5c742d24e04059a1c6c47eb3fe78141f4cbe8c0b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SollicitatieModule-a71c6d833231a6b34624bdb3021e8d543a69edf8563526bb349c7eafd902f97369d3477453cb56ddac444ebe5c742d24e04059a1c6c47eb3fe78141f4cbe8c0b"' :
                                            'id="xs-components-links-module-SollicitatieModule-a71c6d833231a6b34624bdb3021e8d543a69edf8563526bb349c7eafd902f97369d3477453cb56ddac444ebe5c742d24e04059a1c6c47eb3fe78141f4cbe8c0b"' }>
                                            <li class="link">
                                                <a href="components/SollicitatieDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SollicitatieDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SollicitatieFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SollicitatieFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SollicitatieListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SollicitatieListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SollicitatieModule-a71c6d833231a6b34624bdb3021e8d543a69edf8563526bb349c7eafd902f97369d3477453cb56ddac444ebe5c742d24e04059a1c6c47eb3fe78141f4cbe8c0b"' : 'data-target="#xs-injectables-links-module-SollicitatieModule-a71c6d833231a6b34624bdb3021e8d543a69edf8563526bb349c7eafd902f97369d3477453cb56ddac444ebe5c742d24e04059a1c6c47eb3fe78141f4cbe8c0b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SollicitatieModule-a71c6d833231a6b34624bdb3021e8d543a69edf8563526bb349c7eafd902f97369d3477453cb56ddac444ebe5c742d24e04059a1c6c47eb3fe78141f4cbe8c0b"' :
                                        'id="xs-injectables-links-module-SollicitatieModule-a71c6d833231a6b34624bdb3021e8d543a69edf8563526bb349c7eafd902f97369d3477453cb56ddac444ebe5c742d24e04059a1c6c47eb3fe78141f4cbe8c0b"' }>
                                        <li class="link">
                                            <a href="injectables/SollicitatieService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SollicitatieService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-a82baefa1ba08a0af3d657ea674e76ac3bc545042d39ea738400884e8afac99c2290518ba8132dbb00555aff38329381b985fd479f91d92300c97cb18e5744e3"' : 'data-target="#xs-components-links-module-UserModule-a82baefa1ba08a0af3d657ea674e76ac3bc545042d39ea738400884e8afac99c2290518ba8132dbb00555aff38329381b985fd479f91d92300c97cb18e5744e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-a82baefa1ba08a0af3d657ea674e76ac3bc545042d39ea738400884e8afac99c2290518ba8132dbb00555aff38329381b985fd479f91d92300c97cb18e5744e3"' :
                                            'id="xs-components-links-module-UserModule-a82baefa1ba08a0af3d657ea674e76ac3bc545042d39ea738400884e8afac99c2290518ba8132dbb00555aff38329381b985fd479f91d92300c97cb18e5744e3"' }>
                                            <li class="link">
                                                <a href="components/UserDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-a82baefa1ba08a0af3d657ea674e76ac3bc545042d39ea738400884e8afac99c2290518ba8132dbb00555aff38329381b985fd479f91d92300c97cb18e5744e3"' : 'data-target="#xs-injectables-links-module-UserModule-a82baefa1ba08a0af3d657ea674e76ac3bc545042d39ea738400884e8afac99c2290518ba8132dbb00555aff38329381b985fd479f91d92300c97cb18e5744e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-a82baefa1ba08a0af3d657ea674e76ac3bc545042d39ea738400884e8afac99c2290518ba8132dbb00555aff38329381b985fd479f91d92300c97cb18e5744e3"' :
                                        'id="xs-injectables-links-module-UserModule-a82baefa1ba08a0af3d657ea674e76ac3bc545042d39ea738400884e8afac99c2290518ba8132dbb00555aff38329381b985fd479f91d92300c97cb18e5744e3"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VacatureModule.html" data-type="entity-link" >VacatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VacatureModule-ac047c1bd53764d34f998a76afc181344cb36dd470910ffb5295911a39c4aadf7feb71fe00ac38ad8ee8529503801b56c2dc3b177451eb03827c6740b865120a"' : 'data-target="#xs-components-links-module-VacatureModule-ac047c1bd53764d34f998a76afc181344cb36dd470910ffb5295911a39c4aadf7feb71fe00ac38ad8ee8529503801b56c2dc3b177451eb03827c6740b865120a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VacatureModule-ac047c1bd53764d34f998a76afc181344cb36dd470910ffb5295911a39c4aadf7feb71fe00ac38ad8ee8529503801b56c2dc3b177451eb03827c6740b865120a"' :
                                            'id="xs-components-links-module-VacatureModule-ac047c1bd53764d34f998a76afc181344cb36dd470910ffb5295911a39c4aadf7feb71fe00ac38ad8ee8529503801b56c2dc3b177451eb03827c6740b865120a"' }>
                                            <li class="link">
                                                <a href="components/VacatureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VacatureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VacatureDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VacatureDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VacatureFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VacatureFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VacatureListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VacatureListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VacatureModule-ac047c1bd53764d34f998a76afc181344cb36dd470910ffb5295911a39c4aadf7feb71fe00ac38ad8ee8529503801b56c2dc3b177451eb03827c6740b865120a"' : 'data-target="#xs-injectables-links-module-VacatureModule-ac047c1bd53764d34f998a76afc181344cb36dd470910ffb5295911a39c4aadf7feb71fe00ac38ad8ee8529503801b56c2dc3b177451eb03827c6740b865120a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VacatureModule-ac047c1bd53764d34f998a76afc181344cb36dd470910ffb5295911a39c4aadf7feb71fe00ac38ad8ee8529503801b56c2dc3b177451eb03827c6740b865120a"' :
                                        'id="xs-injectables-links-module-VacatureModule-ac047c1bd53764d34f998a76afc181344cb36dd470910ffb5295911a39c4aadf7feb71fe00ac38ad8ee8529503801b56c2dc3b177451eb03827c6740b865120a"' }>
                                        <li class="link">
                                            <a href="injectables/VacatureService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VacatureService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BedrijfService.html" data-type="entity-link" >BedrijfService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleService.html" data-type="entity-link" >RoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SollicitatieService.html" data-type="entity-link" >SollicitatieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VacatureService.html" data-type="entity-link" >VacatureService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/SecurityInterceptor.html" data-type="entity-link" >SecurityInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/BedrijfsbeheerderGuard.html" data-type="entity-link" >BedrijfsbeheerderGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SuperadminGuard.html" data-type="entity-link" >SuperadminGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Bedrijf.html" data-type="entity-link" >Bedrijf</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sollicitatie.html" data-type="entity-link" >Sollicitatie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserResponse.html" data-type="entity-link" >UserResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vacature.html" data-type="entity-link" >Vacature</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});