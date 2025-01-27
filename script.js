// script.js
function embedInstagram() {
    const url = document.getElementById('instagram-url').value;

    if (url) {
        // Validate that the URL is an Instagram URL
        const instagramPattern = /https:\/\/www\.instagram\.com\/(p|reel)\/[\w-]+/;
        if (!instagramPattern.test(url)) {
            alert('Please enter a valid Instagram Reel or Post URL.');
            return;
        }

        // Create the embed code dynamically
        const embedHtml = `
            <blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="13">
                <a href="${url}">Instagram Post</a>
            </blockquote>
        `;

        // Insert the embed code into the page
        const embedSection = document.getElementById('embed-section');
        embedSection.innerHTML = embedHtml;

        // Load Instagram's embed script to make the content render
        const script = document.createElement('script');
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    } else {
        alert('Please enter an Instagram URL.');
    }
}
