// Application data
const appData = {
  "tree_benefits": [
    {
      "title": "Carbon Sequestration",
      "description": "Trees absorb CO2 from atmosphere, storing carbon in biomass. One mature tree can absorb 48 lbs of CO2 per year.",
      "icon": "🌱"
    },
    {
      "title": "Air Purification",
      "description": "Trees filter pollutants including nitrogen oxides, ammonia, sulfur dioxide and particulates, improving air quality by up to 30%.",
      "icon": "🌬️"
    },
    {
      "title": "Soil Protection",
      "description": "Tree roots prevent soil erosion, improve soil structure, and increase water infiltration by 60,000 liters per acre per 1% organic matter increase.",
      "icon": "🌍"
    },
    {
      "title": "Temperature Regulation",
      "description": "Trees can cool urban areas by up to 10°F, reducing energy consumption for air conditioning by up to 50%.",
      "icon": "🌡️"
    },
    {
      "title": "Biodiversity Support",
      "description": "Nearly 50% of Earth's terrestrial biodiversity resides in forests, supporting millions of species and ecosystem balance.",
      "icon": "🦋"
    },
    {
      "title": "Water Conservation",
      "description": "Trees reduce stormwater runoff by 15-27% of annual rainfall and help recharge groundwater supplies.",
      "icon": "💧"
    }
  ],
  "soil_conservation_methods": [
    {
      "category": "Physical Methods",
      "methods": [
        {
          "name": "Terracing",
          "description": "Creating stepped levels on sloped land to slow water runoff and reduce soil erosion, especially effective on steep terrains."
        },
        {
          "name": "Contour Farming",
          "description": "Plowing along natural contour lines to slow water flow, reduce erosion, and increase water infiltration."
        },
        {
          "name": "Windbreaks",
          "description": "Planting trees or shrubs in rows to create barriers against wind erosion and protect soil surface."
        }
      ]
    },
    {
      "category": "Biological Methods",
      "methods": [
        {
          "name": "Cover Crops",
          "description": "Growing plants that cover soil when crops aren't cultivated, protecting from erosion and improving fertility."
        },
        {
          "name": "Crop Rotation",
          "description": "Alternating different crop types across seasons to maintain soil health and prevent nutrient depletion."
        },
        {
          "name": "Agroforestry",
          "description": "Integrating trees and shrubs into agricultural systems to reduce erosion and enhance biodiversity."
        }
      ]
    },
    {
      "category": "Chemical Methods",
      "methods": [
        {
          "name": "Soil Amendments",
          "description": "Adding compost, manure, or biochar to improve soil quality, fertility, and water retention."
        },
        {
          "name": "Organic Farming",
          "description": "Using natural processes and materials to maintain soil health without synthetic chemicals."
        },
        {
          "name": "pH Management",
          "description": "Balancing soil acidity and alkalinity to optimize nutrient availability and plant growth."
        }
      ]
    }
  ],
  "planting_steps": [
    {
      "step": 1,
      "title": "Planning and Site Selection",
      "description": "Choose appropriate location considering soil type, sunlight, water availability, and space for growth. Select native species adapted to local conditions."
    },
    {
      "step": 2,
      "title": "Soil Preparation",
      "description": "Test soil pH and nutrients. Remove weeds and debris. Add organic matter or compost if needed to improve soil structure."
    },
    {
      "step": 3,
      "title": "Digging the Hole",
      "description": "Dig a hole 2-3 times wider than root ball and same depth as root ball height. Break up compacted soil around hole."
    },
    {
      "step": 4,
      "title": "Tree Placement",
      "description": "Remove tree from container, tease out roots if pot-bound. Place in hole ensuring root flare is level with soil surface."
    },
    {
      "step": 5,
      "title": "Backfilling",
      "description": "Fill hole with original soil, gently shaking tree to eliminate air pockets. Firm soil lightly but avoid compaction."
    },
    {
      "step": 6,
      "title": "Watering and Mulching",
      "description": "Water thoroughly with 15-20 gallons. Apply 4-inch layer of mulch around base, keeping 6 inches from trunk."
    },
    {
      "step": 7,
      "title": "Ongoing Care",
      "description": "Regular watering, especially first year. Monitor for pests and diseases. Prune as needed for healthy growth."
    }
  ],
  "community_engagement": [
    {
      "strategy": "Educational Programs",
      "description": "Organize workshops in schools and communities to teach about environmental conservation and tree planting techniques."
    },
    {
      "strategy": "Social Media Campaigns",
      "description": "Use platforms like Facebook, Instagram, and Twitter to spread awareness and mobilize volunteers for tree planting events."
    },
    {
      "strategy": "Corporate Partnerships",
      "description": "Collaborate with businesses for CSR initiatives, funding, and employee volunteer participation in environmental projects."
    },
    {
      "strategy": "Government Collaboration",
      "description": "Work with local authorities for permits, land access, and integration with existing environmental programs."
    }
  ]
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    populateBenefits();
    initializeConservationTabs();
    populatePlantingSteps();
    populateCommunityStrategies();
    initializeCharts();
    setupFormHandling();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Populate tree benefits section
function populateBenefits() {
    const benefitsGrid = document.getElementById('benefits-grid');
    if (!benefitsGrid) return;

    benefitsGrid.innerHTML = '';

    appData.tree_benefits.forEach(benefit => {
        const benefitCard = document.createElement('div');
        benefitCard.className = 'benefit-card';
        benefitCard.innerHTML = `
            <span class="benefit-icon">${benefit.icon}</span>
            <h3>${benefit.title}</h3>
            <p>${benefit.description}</p>
        `;
        benefitsGrid.appendChild(benefitCard);
    });
}

// Conservation tabs functionality
function initializeConservationTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const conservationContent = document.getElementById('conservation-content');

    if (!conservationContent) return;

    // Show initial content (Physical Methods)
    showConservationContent('physical');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabType = this.getAttribute('data-tab');
            showConservationContent(tabType);
        });
    });
}

function showConservationContent(tabType) {
    const conservationContent = document.getElementById('conservation-content');
    if (!conservationContent) return;

    const categoryMap = {
        'physical': 'Physical Methods',
        'biological': 'Biological Methods',
        'chemical': 'Chemical Methods'
    };

    const categoryName = categoryMap[tabType];
    const categoryData = appData.soil_conservation_methods.find(
        category => category.category === categoryName
    );

    if (!categoryData) return;

    conservationContent.innerHTML = `
        <h3>${categoryData.category}</h3>
        <div class="method-grid">
            ${categoryData.methods.map(method => `
                <div class="method-item">
                    <h4>${method.name}</h4>
                    <p>${method.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Populate planting steps
function populatePlantingSteps() {
    const stepsTimeline = document.getElementById('steps-timeline');
    if (!stepsTimeline) return;

    stepsTimeline.innerHTML = '';

    appData.planting_steps.forEach(step => {
        const stepItem = document.createElement('div');
        stepItem.className = 'step-item';
        stepItem.innerHTML = `
            <div class="step-number">${step.step}</div>
            <div class="step-content">
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        `;
        stepsTimeline.appendChild(stepItem);
    });
}

// Populate community strategies
function populateCommunityStrategies() {
    const communityGrid = document.getElementById('community-grid');
    if (!communityGrid) return;

    communityGrid.innerHTML = '';

    appData.community_engagement.forEach(engagement => {
        const communityCard = document.createElement('div');
        communityCard.className = 'community-card';
        communityCard.innerHTML = `
            <h3>${engagement.strategy}</h3>
            <p>${engagement.description}</p>
        `;
        communityGrid.appendChild(communityCard);
    });
}

// Initialize charts for response analysis
function initializeCharts() {
    setTimeout(() => {
        createResponseChart();
        createSpeciesChart();
    }, 500);
}

function createResponseChart() {
    const ctx = document.getElementById('responseChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Weekly Volunteers', 'Monthly Volunteers', 'Occasional', 'Not Available'],
            datasets: [{
                data: [35, 28, 25, 12],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Volunteer Availability Distribution',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

function createSpeciesChart() {
    const ctx = document.getElementById('speciesChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Neem', 'Banyan', 'Mango', 'Peepal', 'Bamboo', 'Gulmohar'],
            datasets: [{
                label: 'Preference Count',
                data: [45, 38, 42, 35, 28, 31],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545', '#D2BA4C'],
                borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545', '#D2BA4C'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Tree Species Preferences',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Responses'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Tree Species'
                    }
                }
            }
        }
    });
}

// Form handling
function setupFormHandling() {
    const sampleForm = document.querySelector('.sample-contact-form');
    if (!sampleForm) return;

    sampleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        const formContainer = this.parentElement;
        const successMessage = document.createElement('div');
        successMessage.className = 'status status--success';
        successMessage.style.marginTop = '20px';
        successMessage.innerHTML = `
            <span>✅ Thank you for your interest!</span>
        `;
        
        formContainer.appendChild(successMessage);
        
        // Reset form
        this.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            if (successMessage.parentElement) {
                successMessage.remove();
            }
        }, 5000);
    });
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.benefit-card, .community-card, .method-item, .step-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeAnimations, 100);
});

// Utility function to format numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Add loading states for charts
function showChartLoading(chartId) {
    const container = document.getElementById(chartId)?.parentElement;
    if (container) {
        container.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 200px;">
                <div style="text-align: center;">
                    <div style="border: 3px solid #f3f3f3; border-top: 3px solid #22c55e; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 10px;"></div>
                    <p>Loading chart...</p>
                </div>
            </div>
        `;
    }
}

// Add CSS for loading spinner
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Enhanced scroll behavior
function enhanceScrollBehavior() {
    // Add scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #22c55e, #16a34a);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollIndicator);

    // Update scroll indicator on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    enhanceScrollBehavior();
});

const sensorParts = {
  p1: { title: "Sensor Pins/Probe", desc: "Metallic prongs inserted into soil to detect moisture via conductivity." },
  p2: { title: "Sensing Area", desc: "Sensitive region for direct contact with soil and water." },
  p3: { title: "Comparator IC", desc: "Compares sensed resistance and generates digital output." },
  p4: { title: "LED Indicator", desc: "Glows to visually indicate if soil is dry/wet." },
  p5: { title: "Power Pin (VCC)", desc: "Connector pin for supplying voltage (commonly 3.3V/5V)." },
  p6: { title: "Analog Output Pin", desc: "Provides variable voltage representing measured humidity." },
  p7: { title: "Digital Output Pin", desc: "Binary signal (dry/wet) from on-board comparator." },
  p8: { title: "Ground Pin", desc: "Electrical ground reference for safe circuit operation." }
};

document.querySelectorAll('.sensor-btn-circ').forEach(btn => {
  btn.addEventListener('click', () => {
    // Highlight active button
    document.querySelectorAll('.sensor-btn-circ').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    // Display related info
    const part = btn.dataset.part;
    const info = sensorParts[part];
    const infoBox = document.getElementById('sensor-part-info');
    if (info) {
      infoBox.innerHTML =
        `<h3 class="text-xl font-bold mb-2 text-emerald-300">${info.title}</h3><p>${info.desc}</p>`;
      infoBox.style.display = 'block';
      infoBox.scrollIntoView({behavior:"smooth", block:"nearest"});
    } else {
      infoBox.style.display = 'none';
    }
  });
});


// Export functions for global access
window.scrollToSection = scrollToSection;