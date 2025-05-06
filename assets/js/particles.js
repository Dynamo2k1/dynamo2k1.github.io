document.addEventListener('DOMContentLoaded', function() {
    particlesJS('matrix', {  // Changed ID to match your HTML's canvas ID
        particles: {
            number: {
                value: 120,  // Increased particle count for denser matrix feel
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#20c20e"  // Matrix green from your theme
            },
            shape: {
                type: "char",  // Changed to characters for authentic matrix feel
                character: {
                    value: ["0", "1"],  // Binary rain effect
                    font: "courier new",
                    style: "",
                    weight: "bold"
                }
            },
            opacity: {
                value: 0.75,  // More visible
                random: true,
                anim: {
                    enable: true,  // Added fading animation
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 12,  // Larger characters
                random: true,
                anim: {
                    enable: true,  // Size animation
                    speed: 2,
                    size_min: 8,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 100,  // Tighter connections
                color: "#20c20e",
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,  // Faster movement
                direction: "bottom",  // Classic matrix rain direction
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"  // More dramatic than grab
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 6  // More particles on click
                }
            }
        },
        retina_detect: true
    });
});