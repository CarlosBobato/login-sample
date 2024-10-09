/**
 * @author Carlos Bobato
 * @class LoginScreen
 * @description This class is responsible for setting up the events for the login screen
 * */
let LoginScreen = function (){
    /**
     * @author Carlos Bobato
     * @inner LoginScreen
     * @type {this} self - The object itself
     * */
    const self = this;

    /**
     * @author Carlos Bobato
     * @inner LoginScreen
     * @type {Object} elements - The elements on the DOM
     * @description This object stores all the elements on the DOM
     * */
    self.elements = {
        login: document.getElementsByClassName('login')[0],
        register: document.getElementsByClassName('register')[0],
        banner: document.getElementsByClassName('signup-signin-banner')[0],
        signupBanner: document.getElementsByClassName('signup-banner-text')[0],
        signinBanner: document.getElementsByClassName('signin-banner-text')[0]
    }

    /**
     * @author Carlos Bobato
     * @inner LoginScreen
     * @type {Object} model - The model of the login screen
     * @description This object stores all the data of the login screen
     * */
    self.model = {
        /**
         * @author Carlos Bobato
         * @inner LoginScreen
         * @type {boolean} mobileFirst - If the screen was mobile/portrait when first loaded the page
         * @description If the screen was mobile/portrait when first loaded the page
         * */
        mobileFirst: false,
    }

    /**
     * @author Carlos Bobato
     * @inner LoginScreen
     * @function setEvents
     * @description This function sets up the events
     * */
    self.setEvents = function(){

        /**
         * @author Carlos Bobato
         * @description This validator checks if the 'login' elements is on the DOM
         * */
        if(!self.elements.login){
            console.error("No 'login' element found on DOM, please check your HTML");
            return false;
        }

        /**
         * @author Carlos Bobato
         * @description This validator checks if the 'register' elements is on the DOM
         * */
        if(!self.elements.register){
            console.error("No 'register' element found on DOM, please check your HTML");
            return false;
        }

        /**
         * @author Carlos Bobato
         * @description This validator checks if the 'signup-signin-banner' elements is on the DOM
         * */
        if(!self.elements.banner){
            console.error("No 'signup-signin-banner' element found on DOM, please check your HTML");
            return false;
        }

        /**
         * @author Carlos Bobato
         * @type {HTMLFormElement} formLogin - The 'login' form
         * */
        const formLogin = self.elements.login.getElementsByTagName('form')[0];
        
        /**
         * @author Carlos Bobato
         * @description This validator checks if the 'form login' element is on the DOM
         * */
        if(!formLogin){
            console.error("No 'form' element found on DOM, please check your HTML");
            return false;
        }

        self.elements.formLogin = formLogin;

        /**
         * @author Carlos Bobato
         * @type {HTMLFormElement} formRegister - The 'register' form
         * */
        const formRegister = self.elements.register.getElementsByTagName('form')[0];

        /**
         * @author Carlos Bobato
         * @description This validator checks if the 'form register' element is on the DOM
         * */
        if(!formRegister){
            console.error("No 'form' element found on DOM, please check your HTML");
            return false;
        }

        self.elements.formRegister = formRegister;

        self.elements.formLogin.onsubmit = function(event){
            event.preventDefault();
        }

        self.elements.formRegister.onsubmit = function(event){
            event.preventDefault();
        }

        /**
         * @author Carlos Bobato
         * @description This validator checks if the 'signup-banner-text' element is on the DOM
         * */
        if(!self.elements.signupBanner){
            console.error("No 'signup-banner-text' element found on DOM, please check your HTML");
            return false;
        }

        self.elements.signupBannerButton = self.elements.signupBanner.getElementsByTagName('button')[0];

        /**
         * @author Carlos Bobato
         * @description This validator checks if the 'signin-banner-text' element is on the DOM
         * */
        if(!self.elements.signinBanner){
            console.error("No 'signin-banner-text' element found on DOM, please check your HTML");
            return false;
        }

        self.elements.signinBannerButton = self.elements.signinBanner.getElementsByTagName('button')[0];

        /**
         * @author Carlos Bobato
         * @inner setEvents
         * @function onClickSigninBannerButton
         * @description Changes the banner from 'signin' to 'register'
         * */
        self.elements.signinBannerButton.onclick = function(event){
            event.preventDefault();
            console.log("Oppening register screen...", "onClickSigninBannerButton");

            self.elements.signupBanner.classList.remove('hidden');
            self.elements.signinBanner.classList.add('hidden');

            /**
             * @author Carlos Bobato
             * @description Checks if the screen is portrait or landscape
             * */            
            if(window.innerHeight > window.innerWidth){
                console.log("screen is portrait");
                if(self.model.mobileFirst){
                    self.elements.banner.style.transform = "translate(0%, 0%)";
                }else{
                    self.elements.banner.style.transform = "translate(-50%, -56%)";
                }
                 
            }
            else{
                console.log("screen is landscape");
                if(self.model.mobileFirst){
                    self.elements.banner.style.transform = "translate(50%, 52.5%)";
                }else{
                    self.elements.banner.style.transform = "translate(0%, 0%)";    
                }
                
            }

        }

        /**
         * @author Carlos Bobato
         * @inner setEvents
         * @function onClickSignupBannerButton
         * @description Changes the banner from 'register' to 'signin'
         * */
        self.elements.signupBannerButton.onclick = function(event){
            event.preventDefault();
            console.log("Oppening login screen...", "onClickSignupBannerButton");

            self.elements.signupBanner.classList.add('hidden');
            self.elements.signinBanner.classList.remove('hidden');
            self.elements.banner.style.transform = "initial";

            /**
             * @author Carlos Bobato 
             * @description Checks if the screen is portrait or landscape
             * */
            if(window.innerHeight > window.innerWidth){
                console.log("screen is portrait");
                if(self.model.mobileFirst){
                    self.elements.banner.style.transform = "translate(0%, 100%)";
                }else{
                    self.elements.banner.style.transform = "translate(-50%, 45%)";    
                }
            }
            else{
                console.log("screen is landscape");
                if(self.model.mobileFirst){
                    self.elements.banner.style.transform = "translate(-50%, 52.5%)";
                }else{
                    self.elements.banner.style.transform = "translate(-100%, 0%)";    
                }
            }
        }

        /**
         * @author Carlos Bobato
         * @inner setEvents
         * @function onResize
         * @description Changes the banner behaviour based on if the screen is portrait or landscape
         * */
        window.onresize = function(){
            
            self.elements.banner.style.transform = "initial";

            /**
             * @author Carlos Bobato
             * @description Checks if the banner is currently set to 'signup'
             * */
            if(self.elements.signinBanner.classList.contains('hidden')){
                if(window.innerHeight > window.innerWidth){
                    console.log("screen is portrait");
                    if(self.model.mobileFirst){
                        self.elements.banner.style.transform = "translate(0%, 0%)";
                    }else{
                        self.elements.banner.style.transform = "translate(-50%, -56%)";    
                    }
                }
                else{
                    console.log("screen is landscape");
                    if (self.model.mobileFirst){
                        self.elements.banner.style.transform = "translate(50%, 52.5%)";
                    }else{
                        self.elements.banner.style.transform = "translate(0%, 0%)";    
                    }
                }
            }
            else{
                if(window.innerHeight > window.innerWidth){
                    console.log("screen is portrait");
                    if(self.model.mobileFirst){
                        self.elements.banner.style.transform = "translate(0%, 100%)";
                    }else{
                        self.elements.banner.style.transform = "translate(-50%, 50%)";    
                    }
                }
                else{
                    console.log("screen is landscape");
                    if(self.model.mobileFirst){
                        self.elements.banner.style.transform = "translate(-50%, 52.5%)";
                    }else{
                        self.elements.banner.style.transform = "translate(-100%, 0%)";    
                    }
                }
            }

        }

        console.log('Events loaded');

        return true;
    }

    /**
     * @author Carlos Bobato
     * @inner LoginScreen
     * @function init
     * @description This function initializes the login screen
     * */
    self.init = function (){

        if (window.innerHeight > window.innerWidth){
            self.model.mobileFirst = true;
        }

        self.setEvents();

        if(window.innerHeight > window.innerWidth){
            console.log('screen is portrait');
        }
        else{
            console.log('screen is landscape');
        }

        /**
         * @author Carlos Bobato
         * @description Checks if the screen is portrait or landscape
         * */
        if(window.innerHeight > window.innerWidth){
            self.elements.banner.style.bottom = "50%";
        }
        else{
            /**
             * @author Carlos Bobato
             * @description Assumes that the banner is on the right or 'loging-in'
             * */
            self.elements.banner.style.left = "50%";
        }
    }
}

/**
 * @author Carlos Bobato
 * @constructor LoginScreen
 * @description This function is responsible for initializing the login screen
 * */
var login = new  LoginScreen();

login.init();