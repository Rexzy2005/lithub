# EmailJS Setup Guide for LITHUB

## ✅ What Has Been Implemented

Your contact form is now set up to send emails using EmailJS. The following changes have been made:

1. **HTML Changes** (`index.html`):
   - Added EmailJS CDN script in the `<head>` section
   - Updated the contact form with proper form ID and input names:
     - `name` - User's name
     - `email` - User's email
     - `subject` - Email subject
     - `message` - User's message

2. **JavaScript Changes** (`script.js`):
   - Added EmailJS initialization
   - Added form submission handler
   - Includes success and error messages

## 🔐 How to Configure

### Step 1: Create an EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account

### Step 2: Get Your Public Key
1. Log in to your EmailJS dashboard
2. Go to **Account** → **API Keys**
3. Copy your **Public Key**
4. Replace `YOUR_PUBLIC_KEY_HERE` in `script.js` with your actual public key

### Step 3: Create an Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**
6. Replace `YOUR_SERVICE_ID` in `script.js` with this ID

### Step 4: Create an Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set the following template variables in your email:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content

Example template content:
```
Hello,

You have a new message from {{name}} ({{email}}):

Subject: {{subject}}

Message:
{{message}}

---
Best regards,
LITHUB Contact Form
```

4. Copy your **Template ID**
5. Replace `YOUR_TEMPLATE_ID` in `script.js` with this ID

### Step 5: Update script.js
In `script.js`, find the EmailJS configuration section and update:
```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace with your actual public key
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) // Replace with your IDs
```

## ✨ Features Implemented

- ✅ Form validation (all fields required)
- ✅ Success message on email sent
- ✅ Error message if sending fails
- ✅ Form resets after successful submission
- ✅ Responsive design maintained
- ✅ User-friendly error handling

## 📧 What Happens When Someone Submits

1. User fills out the contact form (Name, Email, Subject, Message)
2. User clicks Submit
3. Form sends data to your configured email address via EmailJS
4. User receives a success message
5. Form clears automatically
6. You receive the email with all details

## 🔗 Useful Links

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS API Reference](https://www.emailjs.com/docs/tutorial/creating-contact-form/)
- [Troubleshooting Guide](https://www.emailjs.com/docs/support/)

## ⚠️ Important Notes

- Keep your **Public Key** in `script.js` - it's safe to expose
- **Never** share your **Secret Key** - it should only be used on backend servers
- Free EmailJS account includes 200 emails/month
- Test the form thoroughly before going live

---
Once configured, your contact form will be fully functional! 🚀
