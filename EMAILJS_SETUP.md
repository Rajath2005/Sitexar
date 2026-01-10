# EmailJS Setup Guide

To make the contact form functional, you need to configure EmailJS and get your unique keys.

## 1. Create an Account
Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.

## 2. Get Your Service ID
1. Click on **"Email Services"** in the left sidebar.
2. Click **"Add New Service"**.
3. Select your email provider (e.g., **Gmail**).
4. Click **"Connect Account"** and log in.
5. Click **"Create Service"**.
6. Copy the **Service ID** (e.g., `service_xxxxxx`).

## 3. Get Your Template ID
1. Click on **"Email Templates"** in the left sidebar.
2. Click **"Create New Template"**.
3. Design your email. Use the following **variables** to capture the form data:
   - `{{from_name}}` : The sender's name
   - `{{from_email}}` : The sender's email address
   - `{{message}}` : The message content
   - `{{to_name}}` : Will show as "Sitexar Team" (or whatever you set in the code)

   **Example Template:**
   > **Subject:** New message from {{from_name}}
   > 
   > **Content:**
   > You received a message from {{from_name}} ({{from_email}}):
   > 
   > {{message}}

4. Click **"Save"**.
5. Click the **"Settings"** tab (next to "Content").
6. Copy the **Template ID** (e.g., `template_xxxxxx`).

## 4. Get Your Public Key
1. Click on your **Account Name** (top right corner) -> **"Account"**.
2. Look for the **"API Keys"** section.
3. Copy the **Public Key** (it usually starts with some random characters).

## 5. Update the Code
Open `src/pages/Contact.tsx` and replace the placeholders:

```typescript
const serviceId = "YOUR_SERVICE_ID";   // Paste Service ID here
const templateId = "YOUR_TEMPLATE_ID"; // Paste Template ID here
const publicKey = "YOUR_PUBLIC_KEY";   // Paste Public Key here
```

Save the file, and your contact form will work!
