 jQuery(function($) {

 	$(function() {
 		var headerCode = '<header id="header-main" class="header">\
            <div class="container">\
                <div class="logo">\
                    <a href="dev-sitemap.html">\
                        <img src="img/logo.png" alt=" Four Wheel Campers">\
                    </a>\
                </div>\
                <div class="mobile-menu-toggle">\
                    <span></span>\
                </div>\
                <nav class="main-nav desktop">\
                    <ul>\
                        <li><a href="index.html"><span class="icon-skiing"></span> My Life</a></li>\
                        <li><a href="campers.html">Campers</a></li>\
                        <li><a href="financing.html">Financing</a>\
                            <ul class="sub-menu">\
                                <li class="menu-item"><a href="#">Sistahs Go Red</a></li>\
                                <li class="menu-item"><a href="#">Sistahs Go Red</a></li>\
                                <li class="menu-item"><a href="#">Sistahs Go Red</a></li>\
                            </ul>\
                        </li>\
                        <li><a href="events.html">Events</a></li>\
                        <li><a href="support.html">Support</a></li>\
                        <li><a href="store.html">Store</a></li>\
                        <li class="btn-dealer"><a href="find-a-dealer.html">Find Dealer</a></li>\
                    </ul>\
                </nav>\
                <div class="mobile-menu-wrap">\
                    <div class="mobile-menu-box">\
                        <ul class="mobile-menu">\
                            <li><a href="index.html"><span class="icon-skiing"></span> My Life</a></li>\
                            <li><a href="campers.html">Campers</a></li>\
                            <li><a href="financing.html">Financing</a>\
                                <ul class="sub-menu">\
                                    <li class="menu-item"><a href="#">Sistahs Go Red</a></li>\
                                    <li class="menu-item"><a href="#">Sistahs Go Red</a></li>\
                                    <li class="menu-item"><a href="#">Sistahs Go Red</a></li>\
                                </ul>\
                            </li>\
                            <li><a href="events.html">Events</a></li>\
                            <li><a href="support.html">Support</a></li>\
                            <li><a href="store.html">Store</a></li>\
                            <li class="btn-dealer"><a href="find-a-dealer.html">Find  Dealer</a></li>\
                        </ul>\
                    </div>\
                    <div class="mobile-menu-overlay"></div>\
                </div>\
            </div>\
        </header>\
        <header id="header-scrolling" class="header">\
            <div class="container">\
                <div class="logo">\
                    <a href="index.html">\
                        <img src="img/logo.png" alt=" Four Wheel Campers">\
                    </a>\
                </div>\
                <div class="mobile-menu-toggle">\
                    <span></span>\
                </div>\
                <nav class="main-nav desktop">\
                    <ul>\
                        <li><a href="index.html"><span class="icon-skiing"></span> My Life</a></li>\
                        <li><a href="campers.html">Campers</a></li>\
                        <li><a href="financing.html">Financing</a>\
                            <ul class="sub-menu">\
                                <li class="menu-item"><a href="#">Sistahs Go Red</a></li>\
                                <li class="menu-item"><a href="#">Sistahs Go Red</a></li>\
                                <li class="menu-item"><a href="#">Sistahs Go Red</a></li>\
                            </ul>\
                        </li>\
                        <li><a href="events.html">Events</a></li>\
                        <li><a href="support.html">Support</a></li>\
                        <li><a href="store.html">Store</a></li>\
                        <li class="btn-dealer"><a href="find-a-dealer.html">Find Dealer</a></li>\
                    </ul>\
                </nav>\
            </div>\
        </header>';

        var footerCode = '<footer id="footer">\
            <div class="container">\
                <ul class="footer-list">\
                    <li>\
                        <div class="footer-box">\
                            <a href="#" class="footer-title">Company</a>\
                            <a href="#" class="footer-link">Our story</a>\
                            <a href="#" class="footer-link">Careers</a>\
                            <a href="#" class="footer-link">Job Application</a>\
                        </div>\
                    </li>\
                    <li>\
                        <div class="footer-box">\
                            <a href="#" class="footer-title">Contact us</a>\
                            <a href="#" class="footer-link">Find a Dealer</a>\
                            <a href="#" class="footer-link">Factory</a>\
                            <a href="#" class="footer-link">Service</a>\
                            <a href="#" class="footer-link">Media</a>\
                            <a href="#" class="footer-link">Influencers</a>\
                            <a href="#" class="footer-link">Dealer Inquiries</a>\
                        </div>\
                    </li>\
                    <li>\
                        <div class="footer-box">\
                            <a href="#" class="footer-title">News</a>\
                            <a href="#" class="footer-link">Trade Show & Event Calendar</a>\
                            <a href="#" class="footer-link">Articles</a>\
                            <a href="#" class="footer-link">Owner Rallies</a>\
                            <a href="#" class="footer-link">Photos</a>\
                            <a href="#" class="footer-link">Stories</a>\
                            <a href="#" class="footer-link">Updates</a>\
                        </div>\
                    </li>\
                    <li>\
                        <div class="footer-box">\
                            <a href="#" class="footer-title">Services</a>\
                            <a href="#" class="footer-link">Schedule</a>\
                        </div>\
                    </li>\
                    <li>\
                        <div class="footer-box">\
                            <span class="footer-title">Stay In Touch</span>\
                            <ul class="social-list">\
                                <li>\
                                    <a href="#" title="Facebook">\
                                        <i class="fab fa-facebook-f"></i>\
                                    </a>\
                                </li>\
                                <li>\
                                    <a href="#" title="Twitter">\
                                        <i class="fab fa-twitter"></i>\
                                    </a>\
                                </li>\
                                <li>\
                                    <a href="#" title="Google+">\
                                        <i class="fab fa-google-plus-g"></i>\
                                    </a>\
                                </li>\
                                <li>\
                                    <a href="#" title="Vimeo">\
                                        <i class="fab fa-vimeo-v"></i>\
                                    </a>\
                                </li>\
                            </ul>\
                        </div>\
                    </li>\
                </ul>\
            </div>\
            <div class="footer-bottom-box">\
                <div class="container">\
                    <p class="copyright">© Copyright Four Wheel Campers 2018. All rights reserved</p>\
                </div>\
            </div>\
        </footer>';
 		

 		$(headerCode).insertAfter($('.btn-jump-to-content'));
 		$(footerCode).insertAfter($('#main-content'));

 	});

});