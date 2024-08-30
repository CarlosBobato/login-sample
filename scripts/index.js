let LoginScreen = function (){
    const self = this;

    self.elements = {
        login: document.getElementsByClassName('login')[0],
        register: document.getElementsByClassName('register')[0],
        banner: document.getElementsByClassName('signup-signin-banner')[0],
        signupBanner: document.getElementsByClassName('signup-banner-text')[0],
        signinBanner: document.getElementsByClassName('signin-banner-text')[0]
    }

    self.setEvents = function(){
        if(!self.elements.login){
            console.error("No 'login' element found on DOM, please check your HTML");
            return false;
        }

        if(!self.elements.register){
            console.error("No 'register' element found on DOM, please check your HTML");
            return false;
        }

        if(!self.elements.banner){
            console.error("No 'signup-signin-banner' element found on DOM, please check your HTML");
            return false;
        }

        const formLogin = self.elements.login.getElementsByTagName('form')[0];
        if(!formLogin){
            console.error("No 'form' element found on DOM, please check your HTML");
            return false;
        }

        self.elements.formLogin = formLogin;

        const formRegister = self.elements.register.getElementsByTagName('form')[0];
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

        if(!self.elements.signupBanner){
            console.error("No 'signup-banner-text' element found on DOM, please check your HTML");
            return false;
        }

        self.elements.signupBannerButton = self.elements.signupBanner.getElementsByTagName('button')[0];

        if(!self.elements.signinBanner){
            console.error("No 'signin-banner-text' element found on DOM, please check your HTML");
            return false;
        }

        self.elements.signinBannerButton = self.elements.signinBanner.getElementsByTagName('button')[0];

        self.elements.signinBannerButton.onclick = function(event){
            event.preventDefault();
            console.log("Oppening register screen...");

            self.elements.signupBanner.classList.remove('hidden');
            self.elements.signinBanner.classList.add('hidden');

            if(window.orientation === 0 || window.orientation === 180){
                self.elements.banner.style.bottom = "unset";
                self.elements.banner.style.top = "50%";   
            }
            else{
                self.elements.banner.style.right = "unset";
                self.elements.banner.style.left = "50%";
            }
        }

        self.elements.signupBannerButton.onclick = function(event){
            event.preventDefault();
            console.log("Oppening login screen...");

            self.elements.signupBanner.classList.add('hidden');
            self.elements.signinBanner.classList.remove('hidden');

            if(window.orientation === 0 || window.orientation === 180){
                self.elements.banner.style.bottom = "50%";
                self.elements.banner.style.top = "unset";
            }
            else{
                self.elements.banner.style.right = "50%";
                self.elements.banner.style.left = "unset";
            }
        }

        console.log('Events loaded');

        return true;
    }

    self.init = function (){
        self.setEvents();

        if(window.orientation === 0 || window.orientation === 180){
            console.log('screen is portrait');
        }
        else{
            console.log('screen is landscape');
        }

        // Identifies if the screen is portrait
        if(window.orientation === 0 || window.orientation === 180){
            self.elements.banner.style.bottom = "50%";
        }
        else{
            // Assumes that the banner is on the right or 'loging-in'
            self.elements.banner.style.left = "50%";
        }
    }
}

var login = new  LoginScreen();

login.init();