// animation.ts - Fixed to ensure content is visible while enabling animations
import { useEffect } from 'react';

// Modified scroll reveal animation that ensures content visibility
export const initScrollReveal = () => {
    useEffect(() => {
        try {
            // Prepare elements for animation by adding the animate class
            const prepareElementsForAnimation = () => {
                document.querySelectorAll('.reveal').forEach(element => {
                    if (!element.classList.contains('animate')) {
                        element.classList.add('animate');

                        // If element is already in viewport, immediately activate it
                        const rect = element.getBoundingClientRect();
                        const windowHeight = window.innerHeight;

                        if (rect.top < windowHeight - 150) {
                            element.classList.add('active');
                        }
                    }
                });
            };

            // Function to handle reveal animation on scroll
            const revealOnScroll = () => {
                const revealElements = document.querySelectorAll('.reveal.animate');
                if (revealElements.length === 0) return;

                const windowHeight = window.innerHeight;

                revealElements.forEach((element) => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;

                    if (elementTop < windowHeight - elementVisible) {
                        element.classList.add('active');
                    } else {
                        element.classList.remove('active');
                    }
                });
            };

            // Add scroll event listener with debounce for performance
            let scrollTimeout: number | null = null;
            const handleScroll = () => {
                if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
                scrollTimeout = window.requestAnimationFrame(() => {
                    revealOnScroll();
                });
            };

            // Prepare elements then add scroll listener
            prepareElementsForAnimation();
            window.addEventListener('scroll', handleScroll);

            // Initial call to reveal elements that are already visible
            revealOnScroll();

            // Cleanup function
            return () => {
                window.removeEventListener('scroll', handleScroll);
                if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
            };
        } catch (error) {
            console.error('Scroll reveal error:', error);
            return () => { }; // Empty cleanup on error
        }
    }, []);
};

// Typing animation - unchanged
export const initTypingEffect = () => {
    useEffect(() => {
        try {
            // Get subtitle element
            const subtitle = document.querySelector('.hero-subtitle');
            if (!subtitle || !subtitle.textContent) return;

            // Store original text and clear it
            const originalText = subtitle.textContent.trim();
            if (originalText === '') return;

            subtitle.textContent = '';

            // Set up typing animation with a delay to ensure DOM is ready
            let charIndex = 0;
            const startTyping = () => {
                const typingInterval = setInterval(() => {
                    if (charIndex < originalText.length) {
                        subtitle.textContent += originalText.charAt(charIndex);
                        charIndex++;
                    } else {
                        clearInterval(typingInterval);
                    }
                }, 100);

                // Cleanup function
                return () => clearInterval(typingInterval);
            };

            // Start typing after a short delay
            const typingTimeout = setTimeout(startTyping, 500);

            // Cleanup function
            return () => clearTimeout(typingTimeout);
        } catch (error) {
            console.error('Typing effect error:', error);
            return () => { }; // Empty cleanup on error
        }
    }, []);
};

// Lightweight floating animation effect 
export const initFloatingEffect = () => {
    useEffect(() => {
        try {
            // Find the avatar element
            const avatar = document.querySelector('.avatar');
            if (!avatar) return;

            // Apply the floating animation class if not already applied
            if (!avatar.classList.contains('floating')) {
                avatar.classList.add('floating');
            }

            // Create subtle background decorations without canvas
            const heroSection = document.querySelector('.hero');
            if (!heroSection) return;

            // Get safe colors - with fallbacks
            const getColor = (varName: string, fallback: string): string => {
                try {
                    const color = getComputedStyle(document.documentElement)
                        .getPropertyValue(varName).trim();
                    return color || fallback;
                } catch {
                    return fallback;
                }
            };

            const primaryColor = getColor('--primary-color', '#4f46e5');
            const accentColor = getColor('--accent-color', '#06b6d4');

            // Create decorative elements instead of canvas particles
            const createDecorations = () => {
                // Remove any previous decorations
                document.querySelectorAll('.hero-decoration').forEach(el => el.remove());

                // Create 10 decorative dots
                for (let i = 0; i < 10; i++) {
                    const decoration = document.createElement('div');
                    decoration.className = 'hero-decoration';

                    // Random position, size and color
                    const size = Math.random() * 10 + 5;
                    decoration.style.position = 'absolute';
                    decoration.style.width = `${size}px`;
                    decoration.style.height = `${size}px`;
                    decoration.style.borderRadius = '50%';
                    decoration.style.background = i % 2 === 0 ? primaryColor : accentColor;
                    decoration.style.opacity = `${Math.random() * 0.3 + 0.1}`;
                    decoration.style.left = `${Math.random() * 90 + 5}%`;
                    decoration.style.top = `${Math.random() * 80 + 10}%`;
                    decoration.style.pointerEvents = 'none';

                    // Add floating animation with different delays
                    decoration.style.animation = `float ${Math.random() * 3 + 3}s ease-in-out infinite`;
                    decoration.style.animationDelay = `${Math.random() * 2}s`;

                    // Add to hero section
                    heroSection.appendChild(decoration);
                }
            };

            // Create decorations
            createDecorations();

            // Update on resize
            const handleResize = () => {
                // Throttle resize handler
                if (resizeTimeout) clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(createDecorations, 200);
            };

            let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
            window.addEventListener('resize', handleResize);

            // Cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
                if (resizeTimeout) clearTimeout(resizeTimeout);
                document.querySelectorAll('.hero-decoration').forEach(el => el.remove());
            };
        } catch (error) {
            console.error('Floating effect error:', error);
            return () => { }; // Empty cleanup on error
        }
    }, []);
};

// Safe initialization of all animations
export const initAllAnimations = () => {
    // Ensure the DOM is fully loaded before starting animations
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            startAnimationsWithDelay();
        });
    } else {
        startAnimationsWithDelay();
    }
};

// Start animations with delay between each for better performance
const startAnimationsWithDelay = () => {
    // Start with scroll reveal (most important for UX)
    setTimeout(() => initScrollReveal(), 100);

    // Then typing effect (visually important)
    setTimeout(() => initTypingEffect(), 500);

    // Finally floating effect (decorative)
    setTimeout(() => initFloatingEffect(), 1000);
};

export default initAllAnimations;