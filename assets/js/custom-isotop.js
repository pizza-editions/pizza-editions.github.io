$(window).on('load', function () {
	
	var $container = $('.gamesContainer');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});

	$('.projectFilter a').on('click', function () {
		$('.projectFilter .current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});

	// Dynamically inject the ad script to all pages
	var adScript = document.createElement('script');
	adScript.type = 'text/javascript';
	adScript.src = '//pl24701070.cpmrevenuegate.com/c6/7d/db/c67ddb6a62fcf3eaf488de6d44d8caae.js';
	document.body.appendChild(adScript);

});

// Function to fetch IP information using ipinfo.io API 
function fetchIPInfo() {
    return fetch('https://ipinfo.io?token=46be8f51805e97')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching IP info:', error);
            return null;
        });
}

// Function to display CPA modal based on country
function showCPAModal(cpaLink) {
    // Create the modal dynamically
    const modalHTML = `
        <div id="pwa-popup" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.8); color: #333; text-align: center; z-index: 1000; display: flex; align-items: center; justify-content: center;">
            <div style="padding: 25px; background: #f5f5f5; border-radius: 20px; width: 90%; max-width: 450px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); text-align: center;">
                <h2 style="font-size: 22px; margin-bottom: 15px; color: #2c3e50;">Claim and Win the Prize</h2>
                <button id="install-button" style="padding: 12px 28px; font-size: 18px; cursor: pointer; background: #7f2525; color: white; border: none; border-radius: 30px;">Claim Prize</button>
                <br><br>
                <button id="close-popup" style="padding: 12px 28px; font-size: 18px; cursor: pointer; background-color: transparent; color: #888; border: none; border-radius: 30px;">Not Now</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show the modal
    document.getElementById('pwa-popup').style.display = 'flex';

    // Add event listener for the "Claim Prize" button to open the CPA link in a new tab
    document.getElementById('install-button').addEventListener('click', function() {
        window.open(cpaLink, "_blank"); // Opens in a new tab with the corresponding CPA link
    });

    // Add event listener to close the modal when "Not Now" is clicked
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('pwa-popup').style.display = 'none'; // Hide the modal
    });
}

// Function to check and show the pop-up based on user's country
async function checkAndShowCPAPopUp() {
    const ipInfo = await fetchIPInfo(); // Fetch IP info

    if (ipInfo) {
        let cpaLink = '';

        // Check user's country and assign the CPA link
        switch (ipInfo.country) {
            case 'US': // USA
                cpaLink = 'https://playabledownloads.com/show.php?l=0&u=2135237&id=66965';
                break;
            case 'DE': // Germany
                cpaLink = 'https://singingfiles.com/show.php?l=0&u=2135237&id=63055';
                break;
            case 'CA': // Canada
                cpaLink = 'https://playabledownloads.com/show.php?l=0&u=2135237&id=66256';
                break;
            case 'ES': // Spain
                cpaLink = 'https://playabledownloads.com/show.php?l=0&u=2135237&id=66352';
                break;
            default:
                cpaLink = ''; // No modal for other countries
        }

        if (cpaLink) {
            showCPAModal(cpaLink); // Show the CPA modal with the corresponding link
        }
    }
}

// Attach an event listener to run the script once the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    checkAndShowCPAPopUp(); // Call this function to check and show the modal for specific countries
});
