// Smooth scrolling for navigation links
$(document).ready(function() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = this.hash;
        var $target = $(target);
        
        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top - 70
            }, 1000, 'swing');
            
            // Update active nav item
            $('.navbar-nav .nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });
    
    // Navbar background on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background', 'rgba(255, 255, 255, 0.95)');
            $('.navbar').css('backdrop-filter', 'blur(10px)');
        } else {
            $('.navbar').css('background', 'white');
        }
    });
    
    // Active navigation on scroll
    $(window).on('scroll', function() {
        var currentPos = $(this).scrollTop() + 100;
        
        $('.navbar-nav .nav-link').each(function() {
            var link = $(this);
            var section = $(link.attr('href'));
            
            if (section.length) {
                if (section.offset().top <= currentPos && 
                    section.offset().top + section.height() > currentPos) {
                    $('.navbar-nav .nav-link').removeClass('active');
                    link.addClass('active');
                }
            }
        });
    });
    
    // Animate skill bars on scroll
    var skillsAnimated = false;
    
    function animateSkills() {
        var skillsTop = $('#skills').offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        
        if (!skillsAnimated && scrollTop + windowHeight > skillsTop + 100) {
            skillsAnimated = true;
            
            $('.progress-bar').each(function() {
                var $this = $(this);
                var width = $this.css('width');
                $this.css('width', '0');
                
                setTimeout(function() {
                    $this.animate({
                        width: width
                    }, 1500);
                }, 200);
            });
        }
    }
    
    $(window).on('scroll', animateSkills);
    
    // Fade in elements on scroll
    function fadeInOnScroll() {
        $('.fade-in-up').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }
    
    $(window).on('scroll', fadeInOnScroll);
    
    // Form submission
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        var formData = {
            name: $(this).find('input[placeholder="Your Name"]').val(),
            email: $(this).find('input[placeholder="Your Email"]').val(),
            subject: $(this).find('input[placeholder="Subject"]').val(),
            message: $(this).find('textarea').val()
        };
        
        // Here you would normally send the form data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        
        // Clear form
        this.reset();
    });
    
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Mobile menu close on click
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-toggler').click();
        }
    });
    
    // Typing effect for hero section (optional)
    var titles = ['Software Developer', 'Full Stack Engineer', 'Problem Solver'];
    var index = 0;
    var charIndex = 0;
    var currentTitle = '';
    var isDeleting = false;
    var typingSpeed = 100;
    
    function typeWriter() {
        var fullTitle = titles[index];
        
        if (isDeleting) {
            currentTitle = fullTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentTitle = fullTitle.substring(0, charIndex + 1);
            charIndex++;
        }
        
        $('.hero-section h2').html(currentTitle + '<span class="cursor">|</span>');
        
        if (!isDeleting && charIndex === fullTitle.length) {
            isDeleting = true;
            typingSpeed = 50;
            setTimeout(typeWriter, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % titles.length;
            typingSpeed = 100;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    // Uncomment to enable typing effect
    // typeWriter();
    
    // Preloader (optional)
    $(window).on('load', function() {
        $('.preloader').fadeOut('slow');
    });
});

// Cursor style for typing effect
var style = document.createElement('style');
style.textContent = `
    .cursor {
        display: inline-block;
        animation: blink 0.7s infinite;
    }
    
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);