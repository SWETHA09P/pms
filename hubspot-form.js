window.addEventListener("message", function(event) {
    if (event.origin === hubspotForm.site_url && event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
        var formId = event.data.id;

        fetch(hubspotForm.ajax_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: 'action=hubspot_fetch_form_name&formId=' + encodeURIComponent(formId) + '&security=' + hubspotForm.nonce
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'hubspot-form-success',
                    'hs-form-guid': formId,
                    'hs-form-name': data.data
                });
            } else {
                console.error('Error fetching form name:', data.data);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }
});

