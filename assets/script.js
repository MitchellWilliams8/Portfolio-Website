// form handling
const form = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const submitBtn = form.querySelector('.submit-btn');
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        formStatus.textContent = '';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = '#4ADE80';
                form.reset();
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            formStatus.textContent = 'There was a problem sending your message.';
            formStatus.style.color = '#ef4444';
        } finally {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }
    });
}