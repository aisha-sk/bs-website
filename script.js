// Smooth animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Chatbot functionality
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotPanel = document.getElementById('chatbotPanel');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatInput = document.querySelector('.chat-input');
    const chatSend = document.querySelector('.chat-send');
    const messagesContainer = document.querySelector('.chatbot-messages');

    // Toggle chatbot panel
    chatbotToggle.addEventListener('click', function() {
        chatbotPanel.classList.toggle('active');
    });

    // Close chatbot panel
    chatbotClose.addEventListener('click', function() {
        chatbotPanel.classList.remove('active');
    });

    // Send message functionality
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, 'user');
            chatInput.value = '';
            
            // Simulate AI response
            setTimeout(() => {
                const responses = [
                    "I can help you navigate our Business Solutions services. What specific area are you interested in?",
                    "Our team specializes in digital transformation, process automation, and data analytics. How can I assist you?",
                    "Would you like to know more about our current projects or explore our service offerings?",
                    "I'm here to help you find the right resources and connect you with the appropriate team members."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage(randomResponse, 'bot');
            }, 1000);
        }
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
        
        if (sender === 'user') {
            messageDiv.innerHTML = `
                <div class="message-content user-content">${text}</div>
                <div class="message-avatar user-avatar">
                    <i class="fas fa-user"></i>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">${text}</div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Send message on button click
    chatSend.addEventListener('click', sendMessage);

    // Send message on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Card click handlers
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle navigation based on card type
            switch(link) {
                case 'departments':
                    // Navigate to departments/org chart
                    window.location.href = '#departments';
                    break;
                case 'what-we-do':
                    // Navigate to services page
                    window.location.href = 'services.html';
                    break;
                case 'portfolios':
                    // Navigate to projects/portfolios
                    window.location.href = '#portfolios';
                    break;
            }
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                // Simulate search functionality
                console.log('Searching for:', query);
                // You can implement actual search logic here
            }
        }
    });

    // Parallax effect for floating shapes
    document.addEventListener('mousemove', function(e) {
        const shapes = document.querySelectorAll('.floating-shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Navbar scroll effect
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.floating-navbar');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            navbar.style.transform = 'translateX(-50%) translateY(-100px)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateX(-50%) translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Add ripple effect to cards
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .user-message {
            display: flex;
            gap: 12px;
            margin-bottom: 16px;
            justify-content: flex-end;
        }
        
        .user-content {
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
            color: white;
        }
        
        .user-avatar {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .glass-card {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});